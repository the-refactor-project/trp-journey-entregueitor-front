import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Info from "../../ui/components/Info/Info";
import "./Layout.css";

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
      <Info />
    </>
  );
};

export default Layout;
