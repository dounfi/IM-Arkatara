import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalSparkles from "../decor/GlobalSparkles";

const RootLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <GlobalSparkles />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
