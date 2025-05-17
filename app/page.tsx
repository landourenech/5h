import HeroSection from "@/composents/heroSection";
import FeaturesSection from "@/composents/featuresSection";
import SupportsSection from "@/composents/supportsSection";
import MinutesSection from "@/composents/minutesSection";

export default function Home() {
  return (
   <main className="flex flex-col items-center justify-center p-20  max-md:p-5 gap-30 md:gap-10"> 
    <HeroSection />
    <SupportsSection />
    <FeaturesSection />
    <MinutesSection />
    {/* <TestimonialsSection /> */}
    {/* <PricingSection /> */}
    {/* <ContactSection /> */}
  
   </main>
  );
}
