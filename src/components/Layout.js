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
            <title>{pageTitle}</title>
            <Container style={{
                flexGrow: 1,
                height: "100%"
            }}>
                <Stack alignItems="center" justifyContent="space-between" direction="column" style={{
                    height: "100%"
                }}>
                    <Navbar></Navbar>
                    <Stack spacing={2} alignItems="center">{children}</Stack>
                    <Footer />
                </Stack>
            </Container>

        </div>
    )
}

export default Layout