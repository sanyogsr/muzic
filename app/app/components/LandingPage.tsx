import Appbar from "./Appbar";
import CTA from "./Cta";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HreoSection";

export default function () {
  return (
    <div>
      <Appbar />
      <HeroSection />
      <FeatureSection />
      <CTA />
      <Footer />
    </div>
  );
}
