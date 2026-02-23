
import Hero from '@/components/Hero';
import WhatIsThis from '@/components/WhatIsThis';
import HowItWorks from '@/components/HowItWorks';
import WhatYouGet from '@/components/WhatYouGet';
import RevenueOpportunity from '@/components/RevenueOpportunity';
import EarlyPartnerOffer from '@/components/EarlyPartnerOffer';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Hero />
      <WhatIsThis />
      <HowItWorks />
      <WhatYouGet />
      <RevenueOpportunity />
      <EarlyPartnerOffer />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
