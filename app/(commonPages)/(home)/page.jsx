import { HomeCarousel, HomePageCategories } from "./_components";

export default function Home() {
  return (
    <main className="h-screen bg-slate-700 pt-20">
      {/* Carosal */}
      <HomeCarousel />
      {/* Categories/gender based */}
      <HomePageCategories />
      {/* explore best sellers */}
    </main>
  );
}
