"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Telemetry = { speed: number; heading: number; distance: number; power: number; slope: number };

export default function MarsExperience() {
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef({ forward: false, back: false, left: false, right: false });
  const [telemetry, setTelemetry] = useState<Telemetry>({ speed: 0, heading: 0, distance: 0, power: 97, slope: 3 });
  const [mission, setMission] = useState("Drive to the cyan waypoint · 1.2 km");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#a94d2f");
    scene.fog = new THREE.FogExp2("#a94d2f", 0.009);

    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 900);
    camera.position.set(0, 6.6, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight("#ffd7aa", "#421a16", 2.5));
    const sun = new THREE.DirectionalLight("#fff0d0", 3.8);
    sun.position.set(-45, 70, 24);
    sun.castShadow = true;
    scene.add(sun);

    const terrainGeometry = new THREE.PlaneGeometry(280, 520, 56, 104);
    terrainGeometry.rotateX(-Math.PI / 2);
    const terrainPositions = terrainGeometry.attributes.position;
    for (let index = 0; index < terrainPositions.count; index += 1) {
      const x = terrainPositions.getX(index);
      const z = terrainPositions.getZ(index);
      const ridge = Math.sin(x * .075) * 1.4 + Math.cos(z * .042) * 1.1 + Math.sin((x + z) * .034) * .8;
      terrainPositions.setY(index, ridge + Math.abs(x) * .012);
    }
    terrainGeometry.computeVertexNormals();
    const terrain = new THREE.Mesh(terrainGeometry, new THREE.MeshStandardMaterial({ color: "#9f452b", roughness: .96, metalness: .02, flatShading: true }));
    terrain.position.z = -190;
    terrain.receiveShadow = true;
    scene.add(terrain);

    const rockMaterial = new THREE.MeshStandardMaterial({ color: "#672b22", roughness: 1, flatShading: true });
    const rockGeometry = new THREE.DodecahedronGeometry(1, 0);
    for (let index = 0; index < 90; index += 1) {
      const rock = new THREE.Mesh(rockGeometry, rockMaterial);
      const side = index % 2 === 0 ? -1 : 1;
      rock.position.set(side * (7 + (index * 17) % 94), -.15 + Math.sin(index) * .4, 8 - index * 5.2);
      const scale = .45 + (index % 7) * .19;
      rock.scale.set(scale * 1.3, scale, scale);
      rock.rotation.set(index * .13, index * .29, index * .07);
      rock.castShadow = true;
      scene.add(rock);
    }

    const rover = new THREE.Group();
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(3.4, .62, 4.5), new THREE.MeshStandardMaterial({ color: "#d7d2be", metalness: .55, roughness: .48 }));
    chassis.position.y = 1.25;
    chassis.castShadow = true;
    rover.add(chassis);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2.2, .55, 2.1), new THREE.MeshStandardMaterial({ color: "#b28c55", metalness: .45, roughness: .5 }));
    deck.position.set(0, 1.85, -.25);
    rover.add(deck);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(.11, .14, 2, 8), new THREE.MeshStandardMaterial({ color: "#ddd9c9", metalness: .6 }));
    mast.position.set(0, 2.8, -.55);
    rover.add(mast);
    const cameraHead = new THREE.Mesh(new THREE.BoxGeometry(.9, .38, .48), new THREE.MeshStandardMaterial({ color: "#202934", metalness: .65 }));
    cameraHead.position.set(0, 3.78, -.58);
    rover.add(cameraHead);
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: "#252525", metalness: .4, roughness: .8 });
    [-1.85, 1.85].forEach((x) => [-1.45, 0, 1.45].forEach((z) => {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.72, .72, .42, 18), wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, .72, z);
      wheel.castShadow = true;
      rover.add(wheel);
    }));
    rover.position.set(0, 0, 0);
    scene.add(rover);

    const waypoint = new THREE.Group();
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, 10, 8), new THREE.MeshBasicMaterial({ color: "#54f2ff", transparent: true, opacity: .58 }));
    beam.position.y = 5;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.4, .08, 10, 40), new THREE.MeshBasicMaterial({ color: "#54f2ff" }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = .18;
    waypoint.add(beam, ring);
    waypoint.position.set(-18, 0, -112);
    scene.add(waypoint);

    let speed = 0;
    let heading = 0;
    let distance = 0;
    let frame = 0;
    let lastTelemetry = 0;
    const clock = new THREE.Clock();

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    const key = (event: KeyboardEvent, active: boolean) => {
      const value = event.key.toLowerCase();
      if (["w", "arrowup"].includes(value)) controlsRef.current.forward = active;
      if (["s", "arrowdown"].includes(value)) controlsRef.current.back = active;
      if (["a", "arrowleft"].includes(value)) controlsRef.current.left = active;
      if (["d", "arrowright"].includes(value)) controlsRef.current.right = active;
      if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(value)) event.preventDefault();
    };
    const down = (event: KeyboardEvent) => key(event, true);
    const up = (event: KeyboardEvent) => key(event, false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    const animate = () => {
      const delta = Math.min(clock.getDelta(), .04);
      const controls = controlsRef.current;
      if (controls.forward) speed = Math.min(speed + delta * 5.2, 8.8);
      else if (controls.back) speed = Math.max(speed - delta * 6.5, -2.4);
      else speed *= Math.pow(.89, delta * 18);
      const steer = (controls.left ? 1 : 0) - (controls.right ? 1 : 0);
      heading += steer * delta * (.34 + Math.abs(speed) * .055);
      rover.rotation.y = heading;
      rover.position.x -= Math.sin(heading) * speed * delta;
      rover.position.z -= Math.cos(heading) * speed * delta;
      rover.position.x = THREE.MathUtils.clamp(rover.position.x, -105, 105);
      rover.position.z = THREE.MathUtils.clamp(rover.position.z, -225, 18);
      const ground = Math.sin(rover.position.x * .075) * 1.4 + Math.cos((rover.position.z + 190) * .042) * 1.1 + Math.sin((rover.position.x + rover.position.z + 190) * .034) * .8 + Math.abs(rover.position.x) * .012;
      rover.position.y = ground;
      distance += Math.abs(speed) * delta;
      camera.position.lerp(new THREE.Vector3(rover.position.x + Math.sin(heading) * 11, rover.position.y + 7.3, rover.position.z + Math.cos(heading) * 15), .065);
      camera.lookAt(rover.position.x, rover.position.y + 1.5, rover.position.z - 7);
      waypoint.children[1].rotation.z += delta * .7;
      renderer.render(scene, camera);
      if (performance.now() - lastTelemetry > 120) {
        lastTelemetry = performance.now();
        const waypointDistance = rover.position.distanceTo(waypoint.position);
        setTelemetry({ speed: Math.round(Math.abs(speed) * 3.6), heading: Math.round(((heading * 180 / Math.PI) % 360 + 360) % 360), distance: Math.round(distance), power: Math.max(41, Math.round(97 - distance * .018)), slope: Math.round(Math.abs(Math.sin(rover.position.z * .04)) * 12) });
        if (waypointDistance < 8) setMission("Waypoint reached · Geological sample located");
      }
      frame = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      renderer.dispose();
      terrainGeometry.dispose();
      rockGeometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const press = (control: keyof typeof controlsRef.current, active: boolean) => { controlsRef.current[control] = active; };

  return (
    <main className="mars-app">
      <div className="mars-viewport" ref={mountRef} />
      <header className="mars-header"><div><strong>ARES / TRAVERSE</strong><span>Sol 18 · Jezero sector</span></div><Link href="/projects">Exit simulation ↗</Link></header>
      <section className="mars-mission"><span>MISSION 03</span><strong>{mission}</strong></section>
      <aside className="mars-telemetry"><div><span>Velocity</span><strong>{telemetry.speed}</strong><small>km/h</small></div><div><span>Heading</span><strong>{telemetry.heading}°</strong><small>relative</small></div><div><span>Traverse</span><strong>{telemetry.distance}</strong><small>meters</small></div><div><span>Power</span><strong>{telemetry.power}%</strong><small>nominal</small></div><div><span>Slope</span><strong>{telemetry.slope}°</strong><small>stable</small></div></aside>
      <div className="mars-reticle" aria-hidden="true"><i /><span>WAYPOINT</span></div>
      <div className="mars-controls" aria-label="Rover controls">
        <button onPointerDown={() => press("left", true)} onPointerUp={() => press("left", false)} onPointerLeave={() => press("left", false)}>←</button>
        <div><button onPointerDown={() => press("forward", true)} onPointerUp={() => press("forward", false)} onPointerLeave={() => press("forward", false)}>Accelerate</button><button onPointerDown={() => press("back", true)} onPointerUp={() => press("back", false)} onPointerLeave={() => press("back", false)}>Brake</button></div>
        <button onPointerDown={() => press("right", true)} onPointerUp={() => press("right", false)} onPointerLeave={() => press("right", false)}>→</button>
      </div>
      <div className="mars-help">WASD / arrow keys · Medium-speed surface operations</div>
    </main>
  );
}
