import { Header } from "@/components/common";

export default function CommanPagesLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
