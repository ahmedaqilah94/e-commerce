import JustFourYouSection from "@/components/wishListSection/JustFourYouSection";
import WishListSection from "@/components/wishListSection/WishListSection";

function WishList() {
  return (
    <main className="w-[95%] lg:w-[81.25%] mb-[140px]">
      <WishListSection />
      <JustFourYouSection />
    </main>
  );
}

export default WishList;
