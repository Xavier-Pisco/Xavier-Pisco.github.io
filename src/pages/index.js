import { Avatar, Typography } from '@mui/material'
import * as React from 'react'
import Layout from '../components/Layout'
import AvatarImage from '../images/avatar.png'
import Footer from '../components/Footer'
import './index.css'


const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <Typography variant="h1" align="center" gutterBottom>Informatics and Computer Engineering Student</Typography>
            <Typography variant="h2" align="center" gutterBottom>Computer lover who is studing at FEUP interested in BackEnd and Process Automation</Typography>
            <Avatar alt="Xavier Pisco" id="avatar-image" sx={{ width: 200, height: 200 }} src={AvatarImage} />
            <Footer/>
        </Layout>
    )
}

export default IndexPage