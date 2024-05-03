import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import db from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function CategoryPage({ params }) {
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
    </section>
  );
}
