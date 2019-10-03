import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Button,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_CUSTOMERS = gql`
    query {
        getCustomers {
            id
            firstname
            lastname
            address
            latestVisit
        }
    }
`;

function CustomerList () {
    const { loading, error, data } = useQuery(GET_CUSTOMERS);

    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    return(
        <Card>
            {console.log(data)}
            <CardHeader
                action={
                    <Button
                        color="primary"
                        size="small"
                        variant="outlined"
                    >
                        Add customer
                    </Button>
                }
                title="Customers list"
            />
            <Divider />
            <CardContent>
                <div>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Full name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Latest visit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.getCustomers.map(customer => (
                        <TableRow
                            hover
                            key={customer.id}
                        >
                            <TableCell>{customer.firstname + ' ' + customer.lastname}</TableCell>
                            <TableCell>{customer.address}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
  
export default CustomerList;