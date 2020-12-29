import React from "react";
import "../css/services.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breakfast from "../assets/images/breakfast.png";
import Garden from "../assets/images/garden.png";
import Pool from "../assets/images/pool.png";
import Wifi from "../assets/images/wifi.png";
import Housekeeping from "../assets/images/housekeeping.png";
import Dining from "../assets/images/dinning.png";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
function Services() {
    const classes = useStyles();
    return (
        <div className="services" id="services">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} className="services-heading">
                        Our Services
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Breakfast} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Breakfast</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Garden} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Garden</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Pool} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Pool</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Wifi} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Free Wifi</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Housekeeping} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Daily Housekeeping</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Dining} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">In-Room Dining Service</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Services;