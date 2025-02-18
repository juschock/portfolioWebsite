// components/Navbar.tsx
'use client'

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Experience</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="font-semibold">Joshua Uschock</div>
      </div>
    </nav>
  );
}
