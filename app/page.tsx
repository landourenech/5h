import HeroSection from "@/composents/heroSection";
import FeaturesSection from "@/composents/featuresSection";
export default function Home() {
  return (
   <main className="flex flex-col items-center justify-center p-20 max-md:p-5 gap-4 ">
    <HeroSection />
    <FeaturesSection />
    {/* <TestimonialsSection /> */}
    {/* <PricingSection /> */}
    {/* <ContactSection /> */}
    {/* <Footer /> */}
   </main>
  );
}
