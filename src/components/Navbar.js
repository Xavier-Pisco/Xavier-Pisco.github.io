import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Navbar = () => {
    return (
        <nav>
            <StaticImage src="../images/icon.png" alt="Logo with XP letters" height={20} />
            <div>
                <Link className="button is-primary is-small is-outlined" to="/">Home</Link>
                <Link className="button is-primary is-small is-outlined" to="/projects">Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar