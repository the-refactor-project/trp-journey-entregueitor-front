import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Info from "../../ui/components/Info/Info";
import "./Layout.css";
import Confirm from "../../ui/components/Confirm/Confirm";
import Loading from "../../ui/components/Loading/Loading";

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
      <Loading />
      <Confirm />
      <Info />
    </>
  );
};

export default Layout;
