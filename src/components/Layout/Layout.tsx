import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Banner } from "../Banner";

export const Layout = () => {
  return (
   <>
      <Header />
        <main className="container">
          < Banner />
          <Outlet />
        </main>
      <Footer />
    </>
  );
};
