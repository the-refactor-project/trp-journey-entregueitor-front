import useGetUiContext from "../../context/useUiGetContext";
import "./Info.css";

const Info: React.FC = () => {
  const { showInfo, infoType, infoMessage } = useGetUiContext();

  if (!showInfo) {
    return null;
  }

  return (
    <div className="info-background">
      <div className={`info info--${infoType}`}>{infoMessage}</div>
    </div>
  );
};

export default Info;
