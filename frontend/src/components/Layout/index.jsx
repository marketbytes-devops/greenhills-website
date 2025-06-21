import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Footer";
import Nav from "../Nav";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;