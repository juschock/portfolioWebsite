'use client';
import '@/app/globals.css';

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto p-4 sm:p-8">
      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Joshua R. Uschock
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">DevOps / SRE / Software Engineer</h2>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Professional Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Senior Engineer with extensive leadership and management experience. Ten years in the
          United States Army, including service as a Special Operations Team Arabic Linguist in two
          combat deployments. Three years at Amazon Web Services (AWS) building secure,
          available, and scalable systems. Architected fully automated CI/CD and Data Engineering
          pipelines as DevOps Lead Engineer at Booz Allen Hamilton. Worked as Senior Network
          Engineer and Site Reliability Engineer at Oracle and Accenture Federal Services. Expert
          Python and JavaScript programmer with years of experience in React and Next.js.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Development Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Development
          </h3>
          <ul className="space-y-3">
            {[
              'Python (15 years)',
              'JavaScript / TypeScript (5 years)',
              'React / Next.js (5 years)',
              'Ruby / Rails (4 years)',
              'Java (3 years)',
              'HTML / CSS (5 years)',
            ].map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* DevOps Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            DevOps & Cloud
          </h3>
          <ul className="space-y-3">
            {[
              'Kubernetes, Docker, Jenkins',
              'Terraform, Ansible',
              'AWS Cloud Infrastructure',
              'Linux System Administration',
              'CI/CD Pipeline Development',
              'Site Reliability Engineering',
            ].map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:joshua.uschock@gmail.com"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            joshua.uschock@gmail.com
          </a>
          <a
            href="tel:724-396-8012"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            724-396-8012
          </a>
        </div>
      </div>
    </section>
  );
}
  