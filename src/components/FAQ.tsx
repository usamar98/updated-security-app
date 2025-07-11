'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How quickly can AI automation be implemented?",
      answer: "Most basic automations can be implemented within 2-4 weeks. Complex custom solutions may take 6-12 weeks depending on requirements."
    },
    {
      question: "What types of tasks can be automated?",
      answer: "We can automate data entry, email management, scheduling, reporting, lead generation, content creation, and many other repetitive business processes."
    },
    {
      question: "Is my data secure with AI automation?",
      answer: "Yes, we implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards like GDPR and SOC 2."
    },
    {
      question: "Do I need technical knowledge to use the AI systems?",
      answer: "No technical knowledge required. We design user-friendly interfaces and provide comprehensive training to ensure your team can easily use the AI systems."
    },
    {
      question: "What's the typical ROI of AI automation?",
      answer: "Most clients see 200-400% ROI within the first year through reduced labor costs, increased efficiency, and improved accuracy."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FAQs
          </h2>
          <p className="text-xl text-gray-600">
            We've Got the Answers You're Looking For
          </p>
          <p className="text-gray-500 mt-2">
            Quick answers to your AI automation questions.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}