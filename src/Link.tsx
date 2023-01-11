import React, { PropsWithChildren } from 'react'
import clsx from "clsx";

type LinkProps = {
    href?: string
    className?: string
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ href, className, ...rest}) => {

    return (
        <a className={clsx(className, "ui-link")} href={href} {...rest}>{href}</a>
    )
}

export default Link