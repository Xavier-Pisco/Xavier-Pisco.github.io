import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Grid } from '@mui/material';
import * as React from 'react'

const Footer = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item><GitHubIcon /></Grid>
            <Grid item><LinkedInIcon/></Grid>
            <Grid item><EmailOutlinedIcon/></Grid>
        </Grid>
    );
}

export default Footer;