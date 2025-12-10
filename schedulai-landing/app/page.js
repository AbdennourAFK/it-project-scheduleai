import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureOverview from "../components/FeatureOverview";
import HowItWorks from "../components/HowItWorks";
import ForWho from "../components/ForWho";
import StatsBar from "../components/StatsBar";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="main">
      <Navbar />

      <Hero />

      <section id="features" className="section">
        <div className="container">
          <FeatureOverview />
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <HowItWorks />
        </div>
      </section>

      <section id="for-who" className="section">
        <div className="container">
          <ForWho />
          <StatsBar />
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <Pricing />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTA />
        </div>
      </section>

      <Footer />
    </main>
  );
}
