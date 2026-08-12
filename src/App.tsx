import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Hero, Products, Statement, ValueSection } from "./components/SectionsTop";
import { Categories, Metrics, Testimonials, WhyYago } from "./components/SectionsMid";
import { CategorySplit } from "./components/CategorySplit";
import { Novos } from "./components/Novos";
import { Seminovos } from "./components/Seminovos";
import {
  Delivery,
  Faq,
  FinalCta,
  FloatingWhats,
  Footer,
  Instagram,
  Location,
} from "./components/SectionsBottom";
import { Logo } from "./components/ui";
import { cn } from "./utils/cn";

function Loader({ done }: { done: boolean }) {
  return (
    <div
      aria-hidden={done}
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-all duration-700",
        done ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="grain absolute inset-0 opacity-60" />
      <div className="relative flex flex-col items-center">
        <Logo size="lg" className="text-white" />
        <div className="mt-8 h-px w-32 overflow-hidden bg-white/15 sm:w-40">
          <span
            className="block h-full bg-white transition-[width] duration-[1100ms] ease-out"
            style={{ width: done ? "100%" : "22%" }}
          />
        </div>
        <p className="label mt-5 text-white/35">Aracaju / SE</p>
      </div>
    </div>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Loader done={ready} />
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <CategorySplit />
        <Products />
        <ValueSection />
        <Categories />
        <Novos />
        <Seminovos />
        <WhyYago />
        <Testimonials />
        <Metrics />
        <Delivery />
        <Instagram />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
