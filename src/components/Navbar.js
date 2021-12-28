import * as React from 'react'
import { Link } from 'gatsby'
import { navLink } from './Navbar.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Navbar = () => {
    return (
        <nav>
        <StaticImage src="../images/icon.png" alt="Logo with XP letters" height={20} />
            <Link className={navLink} to="/">Home</Link>
            <Link className={navLink} to="/projects">Projects</Link>
        </nav>
    )
}

export default Navbar