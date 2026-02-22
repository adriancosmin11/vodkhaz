import AgeGate from "./components/AgeGate";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ProductShowcase from "./components/ProductShowcase";
import CocktailsSection from "./components/CocktailsSection";
import SocialGallery from "./components/SocialGallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <Navbar />
      <CartDrawer />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ProductShowcase />
        <StorySection />
        <CocktailsSection />
        <SocialGallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
