import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import Navigation from "../Navigation/Navigation";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Navigation />
        <div className="main-block">
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
