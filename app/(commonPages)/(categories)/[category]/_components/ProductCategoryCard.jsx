import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import db from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export async function ProductCategoryCard({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const cats = await db.subCategory.findMany({
    where: {
      name: params.category,
    },
    include: {
      type: {},
    },
  });

  return (
    <div className="flex items-center justify-center mx-auto flex-wrap gap-8 max-w-[800px]">
      {cats[0].type.map((category) => (
        <Link href={`/${params.category}/${category.name}`} key={category.id}>
          <Card className="aspect-video bg-transparent border-transparent hover:border-emerald-400 cursor-pointer group hover:p-2 hover:scale-95 transition-all ease-in-out shadow-none">
            <CardHeader className="flex flex-col gap-y-3 justify-center items-center p-0">
              <Image
                src={`${category.image}`}
                width={150}
                height={150}
                className="w-[220px] h-[300px] md:w-[320px] object-cover"
              />
              <CardTitle className="text-white w-full text-md">
                {category.name}
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}

ProductCategoryCard.Skeleton = function CategoryPageSkeleton() {
  return (
    <div className="flex items-center justify-center mx-auto flex-wrap gap-8 max-w-[800px]">
      <Skeleton className="w-[220px] h-[300px] md:w-[320px] bg-slate-300/40" />
      <Skeleton className="w-[220px] h-[300px] md:w-[320px] bg-slate-300/40" />
      <Skeleton className="w-[220px] h-[300px] md:w-[320px] bg-slate-300/40" />
      <Skeleton className="w-[220px] h-[300px] md:w-[320px] bg-slate-300/40" />
    </div>
  );
};
