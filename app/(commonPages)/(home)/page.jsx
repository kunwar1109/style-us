import { Suspense } from "react";
import { HomeCarousel, HomePageCategories } from "./_components";
import { Trending } from "./_components/Trending";

export default function Home() {
  return (
    <main className="bg-slate-700 pt-20">
      {/* Carosal */}
      <HomeCarousel />
      {/* Categories/gender based */}
      <Trending />

      <Suspense fallback={<HomePageCategories.Skeleton />}>
        <HomePageCategories />
      </Suspense>
    </main>
  );
}
