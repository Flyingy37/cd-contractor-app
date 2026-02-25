import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <CtaStrip />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileCtaBar />
    </>
  );
}
