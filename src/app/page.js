import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MobileApp from "@/components/sections/MobileApp";

export default function () {
  return (
    <div className="bg-[#FAF7EF] min-h-screen">
      <Navbar />
      <Hero />
      <MobileApp />
      <Footer />
    </div>
  );
}
