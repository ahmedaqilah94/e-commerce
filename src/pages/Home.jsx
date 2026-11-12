import BestSelling from "@/components/bestSellingSection/BestSellingSection";
import CategoriesSection from "@/components/categoriesSection/CategoriesSection";
import FeaturedSection from "@/components/featuredSection/FeaturedSection";
import FlashSales from "@/components/flashSalesSection/FlashSalesSection";
import HomeHero from "@/components/iPhonePreviewSection/IPhonePreviewSection";
import OurProductsSection from "@/components/ourProductsSection/OurProductsSection";
import ServiceFeature from "@/components/serviceFeature/ServiceFeature";
import SpeakerViewSection from "@/components/speakerViewSection/SpeakerViewSection";

function Home() {
  return (
    <main className="w-[95%] lg:w-[81.25%]">
      <HomeHero />
      <FlashSales />
      <CategoriesSection />
      <BestSelling />
      <SpeakerViewSection />
      <OurProductsSection />
      <FeaturedSection />
      <ServiceFeature />
    </main>
  );
}

export default Home;
