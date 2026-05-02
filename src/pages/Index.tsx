import { Navbar } from "@/components/barber/Navbar";
import { Hero } from "@/components/barber/Hero";
import { Services } from "@/components/barber/Services";
import { About } from "@/components/barber/About";
import { Testimonials } from "@/components/barber/Testimonials";
import { Contact } from "@/components/barber/Contact";
import { Footer } from "@/components/barber/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
