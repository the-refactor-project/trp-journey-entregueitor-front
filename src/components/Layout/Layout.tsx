import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
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
