export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Xtract's AI automation has transformed our operations. We've reduced manual work by 70% and increased productivity significantly.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Operations Director, GrowthCo",
      content: "The AI assistant handles our scheduling and email management flawlessly. It's like having a super-efficient team member working 24/7.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager, InnovateLab",
      content: "Our lead generation has increased by 300% since implementing Xtract's AI solutions. The ROI has been incredible.",
      avatar: "ER"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Businesses Love Our AI Solutions
          </p>
          <p className="text-gray-500 mt-2">
            Real businesses, real results with AI automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}