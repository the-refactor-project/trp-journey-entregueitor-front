import LoginWithGitHubButton from "../../components/LoginWithGitHubButton/LoginWithGitHubButton";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  return (
    <div className="login">
      <LoginWithGitHubButton />
    </div>
  );
};

export default LoginPage;
