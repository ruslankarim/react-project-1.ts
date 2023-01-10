import React, { PropsWithChildren } from 'react'

type LinkProps = {
    href: string
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ href }) => {
    return (
        <a className="ui-link" href={href}>{href}</a>
    )
}

export default Link