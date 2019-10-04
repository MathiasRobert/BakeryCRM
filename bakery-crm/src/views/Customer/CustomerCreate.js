import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';
import gql from 'graphql-tag';

import CustomerDetails from '../../components/Customer/CustomerDetails'

const ADD_CUSTOMER = gql`
    mutation AddCustomer($firstname: String!, $lastname: String!, $email: String, $address: String) {
        addCustomer(firstname: $firstname, lastname: $lastname, email: $email, address: $address){
            id
        }
    }
`;
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 50,
        paddingTop: 10
    }
}));

function CustomerCreate() {
    const classes = useStyles();

    return(
        <Grid container className={classes.root} justify="center" spacing={2}>
            <Grid item xs={12}>
                <CustomerDetails 
                    mutationCustomer={ADD_CUSTOMER}
                    cardTitle="Customer details"
                    btnTxt="Create customer"
                    type="add"
                />
            </Grid>
        </Grid>
    )
}

export default CustomerCreate;
