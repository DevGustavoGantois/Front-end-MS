import { About } from "@/components/Sections/About";
import { Contact } from "@/components/Sections/Contact";
import { FAQ } from "@/components/Sections/FAQ";
import { Featured } from "@/components/Sections/Featured";
import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { Services } from "@/components/Sections/Services";
import { Testimonials } from "@/components/Sections/Testimonials";
import { Footer } from "@/components/Sections/Footer";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Services />
      <Featured />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
