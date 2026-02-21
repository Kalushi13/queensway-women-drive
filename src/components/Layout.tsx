import { ReactNode } from "react";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
