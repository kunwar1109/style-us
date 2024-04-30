import Link from "next/link";

export const Header = () => {
  return (
    <nav className="sticky top-0 left-0 w-full bg-slate-800 h-20 flex items-center justify-between px-8 z-10">
      {/* LOGO */}
      <h1 className="text-2xl text-fuchsia-50 cursor-pointer">
        Style<span className="text-emerald-400">US</span>
      </h1>
      {/* Login/Signup || Profile */}
      {
        <Link href="/login">
          <button className="border border-emerald-400 px-6 py-2 transition-colors duration-500 ease-in-out text-emerald-400 hover:bg-emerald-400 hover:text-black">
            Login
          </button>
        </Link>
      }
    </nav>
  );
};
