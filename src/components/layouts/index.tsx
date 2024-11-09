import { memo } from "react";
import Footer from "../footer";
import Header from "../header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="container mx-auto my-5 px-4">{children}</div>
      <Footer />
    </>
  );
}

export default memo(Layout);
