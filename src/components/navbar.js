import React, {useState} from 'react'


function navbar() {

    const path = window.location.pathname
  return (
    <>
    <nav className="nav">
        <a href="/" className="Razoration">Razoration</a>
        <ul>
            <CustomLink href="/about">About Us</CustomLink>
            <CustomLink href="/team">Meet the Team</CustomLink>
            <CustomLink href="/contact">Contact Us</CustomLink>
        </ul>
    </nav>
    </>
  )
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname
    
    return (
        <li className={path === href ? "active" : ""}>
                <a href={href} {...props}>
                    {children}
                    </a>
        </li>
    )

}

export default navbar