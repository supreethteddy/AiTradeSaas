
'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToPartner = () => {
    document.getElementById('early-partner')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHow = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-[#060a14] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/6 rounded-full blur-[100px]"></div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm text-white/60">
              Now accepting early partners
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Why Trade the Market
            <br />
            When You Can{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Own the Platform?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Start your own AI-powered trading software business under your
            brand. We build and manage the technology. You focus on growing the
            business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPartner}
              className="group px-8 py-4 bg-white text-[#060a14] rounded-full font-semibold text-base hover:bg-white/90 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              Become an Early Partner
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-right-line text-lg group-hover:translate-x-0.5 transition-transform"></i>
              </span>
            </button>
            <button
              onClick={scrollToHow}
              className="px-8 py-4 text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-full font-medium text-base transition-all cursor-pointer whitespace-nowrap bg-white/5 hover:bg-white/8"
            >
              See How It Works
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent rounded-3xl blur-2xl"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
              <span className="ml-3 text-xs text-white/30">
                AI Trading Platform — Dashboard
              </span>
            </div>
            <Image
              src="https://readdy.ai/api/search-image?query=modern%20dark%20themed%20AI%20trading%20software%20dashboard%20interface%20showing%20real%20time%20stock%20market%20analytics%20with%20glowing%20blue%20and%20purple%20accent%20lines%20probability%20analysis%20charts%20neural%20network%20data%20visualization%20clean%20minimal%20SaaS%20design%20with%20candlestick%20charts%20risk%20metrics%20panels%20and%20automated%20strategy%20builder%20on%20dark%20navy%20background%20professional%20fintech%20UI&width=1200&height=650&seq=hero-dashboard-v5&orientation=landscape"
              alt="AI Trading Platform Dashboard"
              width={1200}
              height={650}
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20">
              <i className="ri-brain-line text-lg text-blue-400"></i>
            </div>
            <span className="text-sm text-white/50">AI Probability Engine</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20">
              <i className="ri-code-s-slash-line text-lg text-purple-400"></i>
            </div>
            <span className="text-sm text-white/50">Strategy Automation</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <i className="ri-shield-check-line text-lg text-emerald-400"></i>
            </div>
            <span className="text-sm text-white/50">White-Label Ready</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20">
              <i className="ri-line-chart-line text-lg text-amber-400"></i>
            </div>
            <span className="text-sm text-white/50">Backtesting Module</span>
          </div>
        </div>
      </div>
    </section>
  );
}
