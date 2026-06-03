import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Stats from "@/components/Stats";

// New Config-Driven Sections
import HeroSection from "@/sections/HeroSection";
import ProgramsSection from "@/sections/ProgramsSection";
import TrainersSection from "@/sections/TrainersSection";
import MembershipSection from "@/sections/MembershipSection";
import TransformationSection from "@/sections/TransformationSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASection from "@/sections/CTASection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* 1. Loading Screen Anim */}
      <LoadingScreen />

      {/* Main Container Wrapper */}
      <div className="relative min-h-screen bg-dark-bg selection:bg-neon selection:text-black antialiased">
        {/* Decorative Grid Overlay on Body */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-neon/[0.03] rounded-full filter blur-[150px] pointer-events-none z-0" />

        {/* 2. Navigation */}
        <Navbar />

        {/* Core Sections */}
        <main className="relative z-10">
          {/* 3. Hero Section */}
          <HeroSection />

          {/* 4. Stats Counters (Generic) */}
          <Stats />

          {/* 5. Gym Programs */}
          <ProgramsSection />

          {/* 6. Elite Coaches */}
          <TrainersSection />

          {/* 7. Membership Rates */}
          <MembershipSection />

          {/* 8. Transformations before/after composite grid */}
          <TransformationSection />

          {/* 9. Client Testimonial Slider */}
          <TestimonialsSection />

          {/* 10. Large CTA Banner */}
          <CTASection />

          {/* 11. Custom Form & Dark Map Desk */}
          <ContactSection />
        </main>

        {/* 12. Site Footnote Navigation */}
        <Footer />

        {/* 13. Floating Contact trigger */}
        <WhatsAppButton />
      </div>
    </>
  );
}
