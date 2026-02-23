'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is this prediction software?',
      answer: 'No. It shows probability based on data.'
    },
    {
      question: 'Is profit guaranteed?',
      answer: 'No. Market risk always exists.'
    },
    {
      question: 'Do I need technical knowledge?',
      answer: 'No. We manage the technical side.'
    },
    {
      question: 'Who handles the servers?',
      answer: 'Our team manages infrastructure and updates.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <i className={`ri-arrow-down-s-line text-2xl text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
