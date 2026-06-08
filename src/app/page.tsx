import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Tracking from "@/components/Tracking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaveBackground from "@/components/WaveBackground";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Tracking />
      <Testimonials />
      <Contact />
      <Footer /> 
      <WaveBackground />
    </>
  );
}