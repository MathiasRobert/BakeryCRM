import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CustomerDetails from '../../components/Customer/CustomerDetails'
import CustomerPurchases from '../../components/Customer/CustomerPurchases'

const GET_CUSTOMER = gql`
    query getCustomerAndPurchases($id: ID!) {
        getCustomer(id: $id) {
            id
            firstname
            lastname
            email
            address
        },
        getPurchases(customerID: $id, first: 10) {
            id
            productName
            price
            timestamp
        },
    }
`;
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 50,
        paddingTop: 10
    }
}));

function CustomerShow({ match }) {
    const classes = useStyles();
    const id = parseInt(match.params.id);
    const customerID = parseInt(match.params.id);

    const { loading, error, data } = useQuery(GET_CUSTOMER, {
        variables: { id, customerID }
    });

    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    const customer = data.getCustomer;
    return(
        <Grid container className={classes.root} justify="center" spacing={2}>
            <Grid item xs={12}><h3>Customer - {customer.firstname +' '+ customer.lastname}</h3></Grid>

            <Grid item xs={12} md={6}>
                <CustomerDetails customer={customer} />
            </Grid>
            <Grid item xs={12} md={6}>
                <CustomerPurchases purchases={data.getPurchases} customerID={customerID}/>
            </Grid>
        </Grid>
    )
}

export default CustomerShow;
