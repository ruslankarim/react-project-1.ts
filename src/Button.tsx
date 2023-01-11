import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>["disabled"]
  className?: string
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ type, disabled, children, className, ...rest }) => {
  return (
    <button
      className={clsx(className, "ui-button")}
      type={type}
      disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button