import * as React from 'react'
import Logo from './Logo'
import { Button, Grid } from '@mui/material'

const Navbar = () => {
    return (
        <Grid container justifyContent="space-between" >
            <Grid item>
                <Logo />
            </Grid>
            <Grid container item xs="auto" justifyContent="flex-end" spacing={0.5}>
                <Grid item><Button href="/">Home</Button></Grid>
                <Grid item><Button href="/projects">Projects</Button></Grid>
                <Grid item><Button href="/blog">Blog</Button></Grid>
            </Grid>
        </Grid>
    )
}

export default Navbar