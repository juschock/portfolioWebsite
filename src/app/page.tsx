import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-6xl mx-auto">
        {/* Hero Card */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-8 hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Joshua Uschock
          </h1>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            Senior Engineer specializing in DevOps, SRE, and Full-Stack Development
          </p>
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
              Expert in Python, JavaScript, and modern web frameworks like React and Next.js
            </p>
          </div>

          {/* DevOps Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              DevOps
            </h2>
            <p className="text-gray-600">
              Experienced with Kubernetes, Docker, and AWS cloud infrastructure
            </p>
          </div>

          {/* SRE Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Site Reliability
            </h2>
            <p className="text-gray-600">
              Building secure, scalable, and reliable systems at enterprise scale
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Joshua U Schock</p>
        </footer>
      </main>
    </div>
  );
}
