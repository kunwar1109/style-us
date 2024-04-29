import { Suspense } from "react";
import { HomeCarousel, HomePageCategories } from "./_components";

export default function Home() {
  return (
    <main className="bg-slate-700 pt-20">
      {/* Carosal */}
      <HomeCarousel />
      {/* Categories/gender based */}
      <Suspense fallback={<HomePageCategories.Skeleton />}>
        <HomePageCategories />
      </Suspense>
      {/* explore best sellers */}
    </main>
  );
}
