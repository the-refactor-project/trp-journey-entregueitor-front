import Button from "../../../components/Button/Button";
import useGetUiContext from "../../context/useUiGetContext";
import useSetUiContext from "../../context/useUiSetContext";
import "./Confirm.css";

const Confirm: React.FC = () => {
  const { showConfirm, confirmText, confirmAction } = useGetUiContext();
  const { hideConfirm } = useSetUiContext();

  const onClick = () => {
    confirmAction();

    hideConfirm();
  };

  if (!showConfirm) {
    return null;
  }

  return (
    <div className="confirm-container">
      <div className="confirm">
        {confirmText}
        <Button buttonType="inline" size="medium" onClick={onClick}>
          Confirmar
        </Button>
        <Button
          className="confirm__close"
          buttonType="icon"
          size="small"
          onClick={hideConfirm}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              stroke="#000000"
              stroke-width="2"
            />
            <path
              d="M9 9L15 15M15 9L9 15"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
