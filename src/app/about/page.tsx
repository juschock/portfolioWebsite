export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Joshua R. Uschock</h1>
      <h2 className="text-2xl font-semibold mb-4">DevOps / SRE / Software Engineer</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
        <p className="text-gray-800 leading-relaxed">
          Senior Engineer with extensive leadership and management experience. Ten years in the
          United States Army, including service as a Special Operations Team Arabic Linguist in two
          combat deployments. Three years at Amazon Web Services (AWS) building secure,
          available, and scalable systems. Architected fully automated CI/CD and Data Engineering
          pipelines as DevOps Lead Engineer at Booz Allen Hamilton. Worked as Senior Network
          Engineer and Site Reliability Engineer at Oracle and Accenture Federal Services. Expert
          Python and JavaScript programmer with years of experience in React and Next.js.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Development</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Python (15 years)</li>
            <li>JavaScript / TypeScript (5 years)</li>
            <li>React / Next.js (5 years)</li>
            <li>Ruby / Rails (4 years)</li>
            <li>Java (3 years)</li>
            <li>HTML / CSS (5 years)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">DevOps & Cloud</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kubernetes, Docker, Jenkins</li>
            <li>Terraform, Ansible</li>
            <li>AWS Cloud Infrastructure</li>
            <li>Linux System Administration</li>
            <li>CI/CD Pipeline Development</li>
            <li>Site Reliability Engineering</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Contact</h3>
        <p className="text-gray-800">
          <a href="mailto:joshua.uschock@gmail.com" className="text-blue-600 hover:underline">
            joshua.uschock@gmail.com
          </a>
          {' | '}
          <a href="tel:724-875-2428" className="text-blue-600 hover:underline">
            724-875-2428
          </a>
        </p>
      </div>
    </section>
  );
}
  