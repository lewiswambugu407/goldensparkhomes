import Navigation from "./components/navigation";
import Hero from "./components/hero-section";
import Properties from "./components/properties";
import Footer from "./components/footer";
import GuestReviews from "./components/testimonials";
import WhatsAppButton from "./components/whatsapp-floating-button";
import Map from "./components/map";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Properties />
      <GuestReviews />
      <Map />
      <Footer />
      <WhatsAppButton />
     </div>
  );
}