import { ComponentProps, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  buttonType: "solid" | "inline" | "icon";
  size: "big" | "medium" | "small";
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  buttonType,
  size,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button button--${buttonType} button--${size} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
