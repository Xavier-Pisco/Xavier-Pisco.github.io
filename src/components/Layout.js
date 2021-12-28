import * as React from 'react'
import Navbar from './Navbar'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <main>
            <Navbar></Navbar>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout