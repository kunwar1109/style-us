import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import db from "@/lib/db";
import Image from "next/image";

export const HomePageCategories = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const categories = await db.category.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <section className="p-8">
      <h3 className="text-center text-white text-2xl pb-8">
        We got everyone <span className="text-emerald-400">covered</span>
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-8 md:flex-wrap">
        {categories.map((category) => (
          <Card
            className="aspect-video w-full h-[200px] md:w-[320px] md:h-[250px] bg-transparent border border-transparent hover:border hover:border-emerald-400 flex flex-col cursor-pointer space-y-2 overflow-hidden group "
            key={category.id}
          >
            <CardHeader className="flex-1 relative p-0 w-full">
              <Image
                src={category.image}
                width={150}
                height={150}
                className="w-full h-full object-cover absolute top-0"
              />
              <div className="bg-black/30 bottom-0 h-10 absolute w-full group-hover:h-full duration-200" />
              <CardTitle className="text-white absolute bottom-2 left-3 group-hover:top-5 w-full">
                <span className="transition-all group-hover:pb-16">
                  {category.name}
                </span>
                <p className="hidden group-hover:block font-normal text-sm transition-all absolute top-10">
                  {category.description}
                </p>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

HomePageCategories.Skeleton = function HomePageCategoriesSkeleton() {
  return (
    <section className="p-8">
      <Skeleton className="bg-slate-300/40 h-8 w-72 mx-auto mb-8"></Skeleton>
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-8 md:flex-wrap">
        <Skeleton className="aspect-video w-full h-[200px] md:w-[320px] md:h-[250px] bg-slate-300/40"></Skeleton>
        <Skeleton className="aspect-video w-full h-[200px] md:w-[320px] md:h-[250px] bg-slate-300/40"></Skeleton>
        <Skeleton className="aspect-video w-full h-[200px] md:w-[320px] md:h-[250px] bg-slate-300/40"></Skeleton>
        <Skeleton className="aspect-video w-full h-[200px] md:w-[320px] md:h-[250px] bg-slate-300/40"></Skeleton>
      </div>
    </section>
  );
};
