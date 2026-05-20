import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
          <Hero />

          {/* 4. Stats Counters */}
          <Stats />

          {/* 5. Gym Programs */}
          <Programs />

          {/* 6. Elite Coaches */}
          <Trainers />

          {/* 7. Membership Rates */}
          <Membership />

          {/* 8. Transformations before/after composite grid */}
          <Transformation />

          {/* 9. Client Testimonial Slider */}
          <Testimonials />

          {/* 10. Large CTA Banner */}
          <CTA />

          {/* 11. Custom Form & Dark Map Desk */}
          <Contact />
        </main>

        {/* 12. Site Footnote Navigation */}
        <Footer />

        {/* 13. Floating Contact trigger */}
        <WhatsAppButton />
      </div>
    </>
  );
}
