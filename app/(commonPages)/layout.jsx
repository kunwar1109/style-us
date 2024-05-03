import { Footer, Header } from "@/components/common";

export default function CommanPagesLayout({ children }) {
  return (
    <div className="h-full bg-slate-700">
      <Header />
      <main>{children}</main>
    </div>
  );
}
