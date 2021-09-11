import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';
import compLogo from '../../images/AS logo.png'
import React from 'react'

function Navbar() {
    const classes = useStyles();


    return (
<AppBar className={classes.appBar} position= "static" color="inherit">
<div className={classes.brandContainer}>
                <Typography key="navbarTypography"  to="/" className={classes.heading} variant="h2" align="center" >business name</Typography>
                <img className={classes.image} src={compLogo} alt="business-logo" height="60"/>
            </div>
</AppBar>
    )
}
export default Navbar;