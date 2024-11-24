import { memo } from "react";
import Footer from "../footer";
import Header from "../header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default memo(Layout);
