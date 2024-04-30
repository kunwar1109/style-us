import Image from "next/image";

export const Trending = () => {
  return (
    <section className="w-full p-8">
      <h3 className="text-center text-white text-2xl pb-8">
        Step <span className="text-emerald-400">Up</span> your style{" "}
        <span className="text-emerald-400">Game</span> with our trending
        collection
      </h3>
      <div className="flex md:items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col gap-4  lg:max-w-[820px]">
          <h4 className="text-white text-xl md:text-2xl">
            Get your style up with Style US, checkout our trending collection
            and stand out
          </h4>
          <button className="border border-emerald-400 text-emerald-400 w-24 text-sm px-4 py-2 hover:bg-emerald-400 hover:text-black">
            Explore
          </button>
        </div>
        <div className="flex-1 cursor-pointer transition-all ease-in-out hover:scale-90 hover:p-4 hover:border hover:border-emerald-400 ">
          <Image
            src="https://images.unsplash.com/photo-1467043237213-65f2da53396f"
            width={400}
            height={300}
            className="lg:w-full lg:h-96 lg:object-cover"
          />
        </div>
      </div>
    </section>
  );
};
