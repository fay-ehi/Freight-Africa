import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { PlatformSection } from "@/components/PlatformSection";
import { HowItWorks } from "@/components/HowItWorks";
import { MarketplacePreview } from "@/components/MarketplacePreview";
import { AfricaCoverage } from "@/components/AfricaCoverage";
import { WhyFreightAfrica } from "@/components/WhyFreightAfrica";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { WaitlistSection } from "@/components/WaitlistSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <PlatformSection />
      <HowItWorks />
      <MarketplacePreview />
      <AfricaCoverage />
      <WhyFreightAfrica />
      <WhoIsItFor />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
