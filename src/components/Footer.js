import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Grid, IconButton } from '@mui/material';
import * as React from 'react'

const Footer = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item><IconButton href="https://github.com/Xavier-Pisco/" target="_blank" color='primary'><GitHubIcon /></IconButton></Grid>
            <Grid item><IconButton href="https://www.linkedin.com/in/xavier-pisco/" target="_blank" color='primary'><LinkedInIcon/></IconButton></Grid>
            <Grid item><IconButton href="mailto:x.pisco@gmail.com" target="_blank" color='primary'><EmailOutlinedIcon/></IconButton></Grid>
        </Grid>
    );
}

export default Footer;