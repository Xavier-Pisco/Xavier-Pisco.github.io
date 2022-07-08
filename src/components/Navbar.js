import * as React from 'react'
import Logo from './Logo'
import { Link, Grid } from '@mui/material'
import './navbar.css'

const Navbar = () => {
    return (
        <Grid container marginTop={3} justifyContent="space-between" id="navbar">
            <Grid item>
                <Logo />
            </Grid>
            <Grid container item xs="auto" justifyContent="flex-end" spacing={0.5}>
                <Grid item><Link underline="none" href="/">Home</Link></Grid>
                <Grid item><Link underline="none" href="/projects">Projects</Link></Grid>
                <Grid item><Link underline="none" href="/blog">Blog</Link></Grid>
            </Grid>
        </Grid>
    )
}

export default Navbar