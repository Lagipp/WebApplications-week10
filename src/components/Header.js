import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'

import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';


//import MenuIcon from '@mui/icons-material/Menu';



<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>


/* https://stackoverflow.com/questions/42156150/how-to-add-multiple-buttons-in-appbar-using-iconelementright*/ 
/* the solution for invisible buttons */

const buttonStyle = {
    color: 'white'
}


function Header() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (

        <Suspense fallback={"PAGE IS LOADING..."}>

        <div>

            <h1> Header </h1>

            {/*<Box sx={{ flexGrow: 1 }}>*/}
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box sx={{ flexGrow: 1 }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">

                        <Button style={buttonStyle} component={RouterLink} to="/"> {t('Home')} </Button>
                        <Button style={buttonStyle} component={RouterLink} to="/about"> {t('About')} </Button>

                    </Typography>
                    </Box>

                        <Button style={buttonStyle} onClick={()=> changeLanguage("fi")}> FI </Button>
                        <Button style={buttonStyle} onClick={()=> changeLanguage("en")}> EN </Button>

                </Toolbar>
            </AppBar>
            {/*</Box>*/}

        </div>

        </Suspense>
    )
}

export default Header