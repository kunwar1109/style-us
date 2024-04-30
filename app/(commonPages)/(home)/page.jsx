import { Suspense } from "react";
import { HomeCarousel, HomePageCategories } from "./_components";
import { Trending } from "./_components/Trending";

export default function Home() {
  return (
    <>
      {/* Carosal */}
      <HomeCarousel />
      {/* Categories/gender based */}
      <Trending />

      <Suspense fallback={<HomePageCategories.Skeleton />}>
        <HomePageCategories />
      </Suspense>
    </>
  );
}
