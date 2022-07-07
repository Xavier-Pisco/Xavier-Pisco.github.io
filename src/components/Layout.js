import { Container } from '@mui/material'
import * as React from 'react'
import Navbar from './Navbar'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <main>
                <Container>
                    <Navbar></Navbar>
                    {children}
                </Container>
            </main>
        </div>
    )
}

export default Layout