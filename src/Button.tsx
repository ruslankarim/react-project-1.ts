import React, {ButtonHTMLAttributes, PropsWithChildren} from "react";

type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>["disabled"]
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({type, disabled, children}) => {
  return (
    <button className="ui-button" type={type} disabled={disabled}>{children}</button>
  )
}

export default Button