import { Container, Stack } from '@mui/material'
import * as React from 'react'
import Navbar from './Navbar'
import Footer from '../components/Footer'

const Layout = ({ pageTitle, children }) => {
    return (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: "column"
        }}>
            <title>{"Xavier Pisco | " + pageTitle}</title>
            <Container style={{
                flexGrow: 1,
                height: "100%"
            }}>
                <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    direction="column"
                    style={{ height: "100%" }}>
                    <Navbar></Navbar>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={7}
                        style={{ height: "100%" }}>
                        {children}
                    </Stack>
                    <Footer />
                </Stack>
            </Container>

        </div>
    )
}

export default Layout