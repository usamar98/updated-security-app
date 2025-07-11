export default function Benefits() {
  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and focus on high-value activities"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 60% with smart automation"
    },
    {
      title: "24/7 Operations",
      description: "AI systems work around the clock without breaks"
    },
    {
      title: "Scalable Growth",
      description: "Scale your operations without proportional cost increases"
    },
    {
      title: "Error Reduction",
      description: "Minimize human errors with precise AI automation"
    },
    {
      title: "Data Insights",
      description: "Get actionable insights from automated data analysis"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Key Benefits of AI for Your Business Growth
          </p>
          <p className="text-gray-500 mt-2">
            Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}