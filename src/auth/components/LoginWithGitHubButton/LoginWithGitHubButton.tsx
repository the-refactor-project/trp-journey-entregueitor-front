import Button from "../../../components/Button/Button";
import useAuthSetInfoContext from "../../context/useAuthSetInfoContext";

const LoginWithGitHubButton = () => {
  const { login } = useAuthSetInfoContext();

  return (
    <Button buttonType="solid" size="medium" onClick={login}>
      Inicia sesión con GitHub
    </Button>
  );
};

export default LoginWithGitHubButton;
