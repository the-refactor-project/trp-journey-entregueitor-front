import { Link } from "react-router";
import Button from "../Button/Button";
import useAuthSetInfoContext from "../../auth/context/useAuthSetInfoContext";
import "./Header.css";
import useAuthGetInfoContext from "../../auth/context/useAuthGetInfoContext";

const Header: React.FC = () => {
  const { isLoggedIn } = useAuthGetInfoContext();
  const { logout } = useAuthSetInfoContext();

  return (
    <header className="main-header">
      <div className="container">
        <Link to="/">
          <img
            src="/logo-the-refactor-project.svg"
            className="main-logo"
            alt="Logotipo de The Refactor Project"
            width="200"
            height="64"
          />
        </Link>
        <h1 className="main-title">Bootcamp - Entregueitor Journey</h1>
        {isLoggedIn && (
          <div className="logout-container">
            <Button buttonType="inline" size="small" onClick={logout}>
              Cerrar sesión
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
