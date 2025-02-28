import { Link } from "react-router";
import Button from "../Button/Button";
import "./Header.css";

const Header: React.FC = () => {
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
        <div className="logout-container">
          <Button buttonType="inline" size="small" onClick={() => {}}>
            Cerrar sesión
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
