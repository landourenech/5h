import HeroSection from "@/composents/heroSection";
import FeaturesSection from "@/composents/featuresSection";
import SupportsSection from "@/composents/supportsSection";
export default function Home() {
  return (
   <main className="flex flex-col items-center justify-center p-20  max-md:p-5 gap-30 md:gap-10"> 
    <HeroSection />
    <SupportsSection />
    <FeaturesSection />
    {/* <TestimonialsSection /> */}
    {/* <PricingSection /> */}
    {/* <ContactSection /> */}
    {/* <Footer /> */}
   </main>
  );
}
