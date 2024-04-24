import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const HomePageCategories = () => {
  return (
    <section className="p-4 flex items-center justify-start flex-wrap ">
      <Card className="w-full h-[200px] md:w-[320px] md:h-[250px] bg-transparent border-none hover:border hover:border-emerald-400 flex flex-col cursor-pointer space-y-2 overflow-auto group ">
        <CardHeader className="flex-1 relative p-0 w-full">
          <Image
            src="/images/1.jpeg"
            width={150}
            height={150}
            className="w-full h-full object-cover absolute top-0"
          />
          <div className="bg-black/30 bottom-0 h-10 absolute w-full group-hover:h-full duration-200" />
          <CardTitle className="text-white absolute bottom-2 left-3 group-hover:top-5">
            <span className="transition-all pb-16">Category Name</span>
            <p className="hidden group-hover:block font-normal text-sm transition-all absolute top-10">
              Description About Categoty
            </p>
          </CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
};
