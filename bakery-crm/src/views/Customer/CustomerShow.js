import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CustomerDetails from '../../components/Customer/CustomerDetails'

const GET_CUSTOMER = gql`
    query getCustomerByID($id: ID!) {
        getCustomer(id: $id) {
            id
            firstname
            lastname
            email
            address
            purchases {
                id
                productName
                price
                timestamp
            }
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
    console.log(id)

    const { loading, error, data } = useQuery(GET_CUSTOMER, {
        variables: { id }
    });

    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    const customer = data.getCustomer;
    return(
        <Grid container className={classes.root} justify="center" spacing={2}>
            <Grid item xs={12}><h3>Customer - {customer.firstname +' '+ customer.lastname}</h3></Grid>

            <Grid item xs={6}>
                <CustomerDetails customer={customer} />
            </Grid>
        </Grid>
    )
}

export default CustomerShow;
