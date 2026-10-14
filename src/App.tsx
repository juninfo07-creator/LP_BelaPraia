import { useEffect } from "react";
import AboutGallery from "./components/AboutGallery/AboutGallery";
import Condominium from "./components/Condominium/Condominium";
import ContactCTA from "./components/ContactCTA/ContactCTA";
import Differentials from "./components/Differentials/Differentials";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IncludedItems from "./components/IncludedItems/IncludedItems";
import Location from "./components/Location/Location";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    target.scrollIntoView({ block: "start" });
    root.style.scrollBehavior = previousBehavior;
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <AboutGallery />
        <PropertyDetails />
        <IncludedItems />

        <section className="bg-surface py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div id="condominio" className="scroll-mt-24">
              <Condominium />
            </div>
            <div id="localizacao" className="scroll-mt-24">
              <Location />
            </div>
          </div>
        </section>

        <FAQ />

        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
