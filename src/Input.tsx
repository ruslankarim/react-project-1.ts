import React, { PropsWithChildren, InputHTMLAttributes } from 'react'

type InputProps = {
    type?: InputHTMLAttributes<HTMLInputElement>["type"] | "text"
    placeholder?: string | "default placeholder"
    name?: InputHTMLAttributes<HTMLInputElement>["name"] | "default name"
}


const Input: React.FC<PropsWithChildren<InputProps>> = ({ type, placeholder, name }) => {
    return (
        <input
            className="ui-textfield"
            placeholder={placeholder}
            name={name}
            type={type}
        />
    )
}

export default Input