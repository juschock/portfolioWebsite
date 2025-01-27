import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8">
            Hi, I&apos;m Joshua, a developer experienced with Next.js, Python, and more.
          </p>
          <p className="text-sm text-gray-500">
            &copy; 2025 Joshua U Schock
          </p>
        </section>
        {/* Add images, links to projects, or a hero section here */}
      </main>
    </div>
  );
}
