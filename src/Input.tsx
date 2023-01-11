import React, { PropsWithChildren, InputHTMLAttributes } from 'react'
import clsx from "clsx";

type InputProps = {
    type?: InputHTMLAttributes<HTMLInputElement>["type"] | "text"
    placeholder?: string | "default placeholder"
    name?: InputHTMLAttributes<HTMLInputElement>["name"] | "default name"
    className?: string
}


const Input: React.FC<PropsWithChildren<InputProps>> = ({ type, placeholder, name, className, ...rest}) => {
    return (
        <input
            className={clsx("ui-textfield")}
            placeholder={placeholder}
            name={name}
            type={type}
            {...rest}
        />
    )
}

export default Input