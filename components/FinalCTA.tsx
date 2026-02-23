'use client';

export default function FinalCTA() {
  const scrollToPartner = () => {
    document.getElementById('early-partner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Own the Platform. Build the Brand.
          </h2>

          <button 
            onClick={scrollToPartner}
            className="px-10 py-5 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl whitespace-nowrap cursor-pointer"
          >
            Apply for License
          </button>
        </div>
      </div>
    </section>
  );
}
