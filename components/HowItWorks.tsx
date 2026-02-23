import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How the Software Works
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-6">
                  <i className="ri-brain-line text-3xl text-white"></i>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  AI Probability Analysis
                </h3>
                
                <p className="text-gray-700 text-lg mb-6">
                  The system studies past market data and shows:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-xl text-blue-600 mt-1"></i>
                    <span className="text-gray-700 text-lg">Probability of price movement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-xl text-blue-600 mt-1"></i>
                    <span className="text-gray-700 text-lg">Risk level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-xl text-blue-600 mt-1"></i>
                    <span className="text-gray-700 text-lg">Risk–reward ratio</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 italic">
                    It does not predict the future. It shows probability based on historical data.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Image
                src="https://readdy.ai/api/search-image?query=artificial%20intelligence%20analyzing%20financial%20market%20data%20with%20probability%20charts%20risk%20assessment%20graphs%20and%20analytics%20dashboard%20on%20dark%20blue%20background%20with%20glowing%20neural%20network%20connections%20modern%20fintech%20visualization%20clean%20professional%20style&width=600&height=500&seq=ai001&orientation=landscape"
                alt="AI Analysis"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://readdy.ai/api/search-image?query=automated%20trading%20strategy%20builder%20interface%20with%20rule%20based%20system%20showing%20buy%20sell%20signals%20stop%20loss%20targets%20on%20dark%20themed%20dashboard%20with%20blue%20purple%20accents%20modern%20clean%20fintech%20design%20professional%20software%20mockup&width=600&height=500&seq=strategy001&orientation=landscape"
                alt="Strategy Builder"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mb-6">
                  <i className="ri-robot-line text-3xl text-white"></i>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Strategy Builder & Automation
                </h3>
                
                <p className="text-gray-700 text-lg mb-6">
                  Users can set simple rules like:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-xl text-purple-600 mt-1"></i>
                    <span className="text-gray-700 text-lg">Buy at this price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-xl text-purple-600 mt-1"></i>
                    <span className="text-gray-700 text-lg">Exit at this target</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-xl text-purple-600 mt-1"></i>
                    <span className="text-gray-700 text-lg">Stop loss at this level</span>
                  </li>
                </ul>

                <p className="text-gray-700 text-lg mt-6">
                  The system can follow these rules automatically.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    This platform provides analytical tools only. It does not guarantee profits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
