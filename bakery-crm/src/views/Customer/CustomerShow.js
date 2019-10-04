import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CustomerDetails from '../../components/Customer/CustomerDetails'
import CustomerPurchases from '../../components/Customer/CustomerPurchases'
import CustomerAmountSpent from '../../components/Customer/CustomerAmountSpent'

const GET_CUSTOMER = gql`
    query getCustomerAndPurchases($id: ID!, $nbItems: Int) {
        getCustomer(id: $id) {
            id
            firstname
            lastname
            email
            address
            totalAmountSpent
        },
        getPurchases(customerID: $id, first: $nbItems) {
            id
            productName
            price
            timestamp
        },
    }
`;
const UPDATE_CUSTOMER = gql`
    mutation UpdateCustomer($id: ID!, $firstname: String!, $lastname: String!, $email: String, $address: String) {
        updateCustomer(id: $id, firstname: $firstname, lastname: $lastname, email: $email, address: $address){
            id
            firstname
            lastname
            email
            address
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

function CustomerShow({ match }) {
    const classes = useStyles();
    const id = parseInt(match.params.id);
    const customerID = parseInt(match.params.id);
    const nbItems = 10;

    const { loading, error, data } = useQuery(GET_CUSTOMER, {
        variables: { id, customerID, nbItems }
    });

    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    const customer = data.getCustomer;
    return(
        <Grid container className={classes.root} justify="center" spacing={2}>
            <Grid item xs={12}><h3>Customer - {customer.firstname +' '+ customer.lastname}</h3></Grid>

            <Grid item xs={12} md={8}>
                <CustomerDetails 
                    customer={customer}
                    mutationCustomer={UPDATE_CUSTOMER}
                    cardTitle="Customer details"
                    btnTxt="Save changes"
                    type="edit"
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <CustomerAmountSpent amount={customer.totalAmountSpent} />
            </Grid>
            <Grid item xs={12}>
                <CustomerPurchases purchases={data.getPurchases} customerID={customerID}/>
            </Grid>
        </Grid>
    )
}

export default CustomerShow;
