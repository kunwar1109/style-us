import { Suspense } from "react";
import { ProductCategoryCard } from "./_components/ProductCategoryCard";
import { Skeleton } from "@/components/ui/skeleton";

export default async function CategoryPage({ params }) {
  return (
    <section className="w-full p-8">
      <div className="flex justify-center flex-col items-center gap-y-4 pb-4">
        <h3 className="text-center text-3xl text-white">
          Take you Style Game to <span className="text-emerald-400">Next</span>{" "}
          Level
        </h3>
        <small className="text-sm text-center block text-white">
          for <span className="text-emerald-400">{params.category}</span>
        </small>
      </div>
      <Suspense fallback={<ProductCategoryCard.Skeleton />}>
        <ProductCategoryCard params={params} />
      </Suspense>
    </section>
  );
}
