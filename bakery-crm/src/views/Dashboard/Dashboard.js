import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';

import CustomersList from '../../components/Dashboard/CustomersList'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 50,
        paddingTop: 10
    }
}));

function Dashboard() {
    const classes = useStyles();
    return(
        <Grid container className={classes.root} justify="center" spacing={2}>
            <Grid item xs={12}><h3>Dashboard</h3></Grid>

            <Grid item xs={12}>
                <CustomersList />
            </Grid>
        </Grid>
    )
}

export default Dashboard;
