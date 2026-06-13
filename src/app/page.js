import Attorney from "@/components/Attorney";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/Hero";
import PracticeAreas from "@/components/PracticeArea";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreas />
      <WhyChoose />
      <Results />
      <Testimonials />
      <Attorney />
      <FAQ />
      <FinalCTA />
    </>
  )
}