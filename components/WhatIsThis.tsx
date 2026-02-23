
import Image from 'next/image';

export default function WhatIsThis() {
  return (
    <section id="opportunity" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Is This Opportunity?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                This is a ready-made AI trading software.
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm flex-shrink-0 mt-1">
                    <i className="ri-close-line text-xl text-red-500"></i>
                  </div>
                  <p className="text-gray-700 text-lg">You don't build it from scratch.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm flex-shrink-0 mt-1">
                    <i className="ri-close-line text-xl text-red-500"></i>
                  </div>
                  <p className="text-gray-700 text-lg">You don't manage servers.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm flex-shrink-0 mt-1">
                    <i className="ri-close-line text-xl text-red-500"></i>
                  </div>
                  <p className="text-gray-700 text-lg">You don't need a technical team.</p>
                </div>

                <div className="border-t border-gray-300 my-8"></div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-sm flex-shrink-0 mt-1">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">You get your own branded platform.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-sm flex-shrink-0 mt-1">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">You sell access to users.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-sm flex-shrink-0 mt-1">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">We handle the backend system.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://readdy.ai/api/search-image?query=white%20label%20SaaS%20platform%20concept%20showing%20branded%20trading%20software%20interface%20with%20customizable%20logo%20area%20multiple%20user%20dashboards%20cloud%20infrastructure%20backend%20servers%20technology%20stack%20modern%20professional%20fintech%20business%20opportunity%20clean%20light%20background%20with%20blue%20purple%20gradient%20accents&width=600&height=500&seq=whitelabel-saas-v1&orientation=landscape"
              alt="White Label Platform"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
