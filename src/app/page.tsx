import Image from "next/image";
import LocalChatbot from "./components/Chatbot/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-6xl mx-auto">
        {/* Hero Card */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <Image
              src="/1689704103838.jpeg"
              alt="Professional headshot"
              width={180}
              height={180}
              className="rounded-full shadow-lg object-cover"
              priority
            />
            <div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Joshua Uschock
              </h1>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Senior Engineer specializing in DevOps, SRE, and Full-Stack Development
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Me
            </a>
            <a
              href="mailto:joshua.uschock@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
          <div className="flex gap-4 mt-4 w-full">
            <a
              href="https://github.com/juschock"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/joshuauschock"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Skills Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Development Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Development
            </h2>
            <p className="text-gray-600">
              Full-stack development with expertise in Python, JavaScript, and modern web frameworks. AWS certified cloud practitioner.
            </p>
          </div>

          {/* DevOps Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Security
            </h2>
            <p className="text-gray-600">
              CompTIA Security+ certified. Experienced in building secure systems and implementing security best practices.
            </p>
          </div>

          {/* SRE Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Linux & Systems
            </h2>
            <p className="text-gray-600">
              CompTIA Linux+ certified. Experienced in system administration and infrastructure management.
            </p>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Portfolio Website Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Portfolio Website</h3>
              <p className="text-gray-600 mb-4">
                A modern, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features server-side rendering and optimized performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Tailwind CSS</span>
              </div>
              <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/juschock/portfolioWebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                View on GitHub <span className="ml-2">→</span>
              </a>
              <a 
                  href="https:joshuauschock.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
                >
                  Live Demo: Visit joshuauschock.com <span className="ml-2">→</span>
                </a>
                </div>
            </div>

            {/* Sun Sun Project Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sun Sun</h3>
              <p className="text-gray-600 mb-4">
                A multilingual content platform that illuminates content across languages. Built with Next.js and features a modern, gradient-rich design with support for multiple languages.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">i18n</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/juschock/sunsun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  View on GitHub <span className="ml-2">→</span>
                </a>
                <a 
                  href="https://www.sunsun.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
                >
                  Live Demo: Visit SunSun.ai <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* New Project Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">PrepperGo.com</h3>
              <p className="text-gray-600 mb-4">
                PrepperGo.com is a comprehensive platform for preppers, offering resources and tools to help individuals prepare for emergencies and disasters.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">MongoDB</span>
              </div>
              <a 
                href="https://www.preppergo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-blue-800 transition-colors duration-300"
              >
                Live Demo: Visit PrepperGo.com <span className="ml-2">→</span>
              </a>
            </div>

            {/* Watch Inventory Management Platform Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Watch Inventory Management Platform</h3>
              <p className="text-gray-600 mb-4">
                A platform to manage watch inventories efficiently, providing tools for tracking and organizing collections.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/juschock/watch_inventory_mngmnt_platform.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  View on GitHub <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* File Management Dashboard Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">File Management Dashboard</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive dashboard for managing files efficiently, designed to handle large volumes of data with ease and security.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Prisma</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Tailwind CSS</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/juschock/file_management_dashbrd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  View on GitHub <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <LocalChatbot />

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">&copy; {new Date().getFullYear()} Joshua U Schock. All rights reserved.</p>
            <p className="text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS. 
              Deployed on Vercel.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
