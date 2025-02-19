import '../globals.css';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-4 sm:p-8 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-12 mb-6 sm:mb-8 hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Professional Experience
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            A showcase of my professional journey and key projects across different organizations.
          </p>
        </div>

        {/* Current Role */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Principal Engineer</h2>
            <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0">Dec 2023 - Present</span>
          </div>
          <h3 className="text-xl text-purple-600 mb-4">LoneCypressAI | Herndon, VA</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Designed and implemented AI-driven engineering solutions using AWS, Kubernetes, and Docker</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Led full software project lifecycles from requirements gathering to deployment</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Developed with Python and JavaScript, implementing modern CI/CD practices</span>
            </li>
          </ul>
        </div>

        {/* Previous Roles Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Accenture */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Senior DevOps Engineer</h2>
              <span className="text-gray-500">2023</span>
            </div>
            <h3 className="text-lg text-purple-600 mb-4">Accenture Federal Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                <span>Developed Helm charts and HPA for Kubernetes deployments</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                <span>Automated CI/CD pipelines using Jenkins</span>
              </li>
            </ul>
          </div>

          {/* Oracle */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Senior Network Engineer</h2>
              <span className="text-gray-500">2023</span>
            </div>
            <h3 className="text-lg text-purple-600 mb-4">Oracle - OCI</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                <span>Implemented cloud native workflows for OCI deployments</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                <span>Optimized network performance and automation</span>
              </li>
            </ul>
          </div>

          {/* Booz Allen */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Lead Engineer, DevOps</h2>
              <span className="text-gray-500">2022-2023</span>
            </div>
            <h3 className="text-lg text-purple-600 mb-4">Booz Allen Hamilton</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                <span>Automated deployments with Kubernetes, Helm, and ArgoCD</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                <span>Optimized ETL workflows with Apache NiFi</span>
              </li>
            </ul>
          </div>

          {/* AWS */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Systems Development Engineer</h2>
              <span className="text-gray-500">2019-2022</span>
            </div>
            <h3 className="text-lg text-purple-600 mb-4">Amazon Web Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                <span>Orchestrated AWS resources with Kubernetes and Python</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                <span>Delivered scalable, secure cloud solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer
        <footer className="text-center text-gray-500 pt-4 sm:pt-8">
          <p>&copy; {new Date().getFullYear()} Joshua R. Uschock</p>
        </footer> */}
      </main>
    </div>
  );
}
  