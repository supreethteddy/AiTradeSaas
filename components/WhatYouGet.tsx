
import Image from 'next/image';

export default function WhatYouGet() {
  const features = [
    { icon: 'ri-palette-line', text: 'Your own branded trading software' },
    { icon: 'ri-global-line', text: 'Your own domain' },
    { icon: 'ri-dashboard-line', text: 'User dashboard' },
    { icon: 'ri-settings-3-line', text: 'Admin control panel' },
    { icon: 'ri-brain-line', text: 'AI probability engine' },
    { icon: 'ri-robot-line', text: 'Strategy builder' },
    { icon: 'ri-line-chart-line', text: 'Backtesting module' },
    { icon: 'ri-tools-line', text: 'Backend maintenance' },
    { icon: 'ri-refresh-line', text: 'Ongoing updates' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What You Get
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex-shrink-0">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <p className="text-gray-800 text-lg font-medium">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <Image
              src="https://readdy.ai/api/search-image?query=comprehensive%20trading%20platform%20ecosystem%20showing%20multiple%20connected%20modules%20including%20user%20dashboard%20admin%20panel%20AI%20engine%20strategy%20builder%20backtesting%20tools%20cloud%20infrastructure%20all%20interconnected%20with%20glowing%20lines%20modern%20isometric%20view%20professional%20fintech%20software%20architecture%20light%20background%20with%20blue%20purple%20gradient%20elements&width=600&height=600&seq=platform-features-v1&orientation=squarish"
              alt="Platform Features"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 font-medium">
            We handle the technical part.
          </p>
          <p className="text-xl text-gray-700 font-medium">
            You focus on building the business.
          </p>
        </div>
      </div>
    </section>
  );
}
