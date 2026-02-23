
import Image from 'next/image';

export default function RevenueOpportunity() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How This Can Become a Revenue Business
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative order-2 lg:order-1">
            <Image
              src="https://readdy.ai/api/search-image?query=business%20revenue%20growth%20visualization%20showing%20subscription%20model%20with%20increasing%20user%20base%20from%2050%20to%20100%20plus%20subscribers%20upward%20trending%20charts%20financial%20projections%20clean%20infographic%20style%20modern%20SaaS%20business%20metrics%20light%20background%20with%20blue%20purple%20gradient%20professional%20fintech%20illustration&width=600&height=500&seq=revenue-growth-v1&orientation=landscape"
              alt="Revenue Growth"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg order-1 lg:order-2">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The platform works on a yearly subscription model.
            </p>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              You can set your own pricing.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4 font-semibold">
                For example:
              </p>
              <p className="text-lg text-gray-700 mb-3">
                If users subscribe at <span className="font-bold text-blue-600">$99 per year</span>,
              </p>
              <p className="text-lg text-gray-700 mb-3">
                and you onboard even <span className="font-bold text-purple-600">50 users</span>,
              </p>
              <p className="text-lg text-gray-700">
                that creates meaningful annual revenue.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              If you grow to 100 or more users, the scale increases accordingly.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 mb-8">
              <p className="text-lg text-gray-700 mb-3">
                The trading market is large.
              </p>
              <p className="text-lg text-gray-700 mb-3">
                Millions of people participate every day.
              </p>
              <p className="text-lg text-gray-700">
                You don't need the whole market. Even a small audience can build a steady business.
              </p>
            </div>

            <p className="text-sm text-gray-500 italic">
              Actual results depend on marketing effort, positioning, and market conditions.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Grow
            </h3>
            <p className="text-lg text-gray-600">
              We guide you on which model to apply first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4">
                <i className="ri-share-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Affiliate Marketing</h4>
              <p className="text-gray-600">Partner with influencers and content creators</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-user-add-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Referral Programs</h4>
              <p className="text-gray-600">Let users bring more users with incentives</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4">
                <i className="ri-megaphone-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Online Advertising</h4>
              <p className="text-gray-600">Reach targeted audiences through digital ads</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Community Building</h4>
              <p className="text-gray-600">Create engaged groups around your brand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
