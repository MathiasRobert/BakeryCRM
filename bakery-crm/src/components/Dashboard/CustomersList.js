import React from 'react';
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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';

import { GET_CUSTOMERS } from '../../api/queries';

function CustomersList () {
    const { loading, error, data } = useQuery(GET_CUSTOMERS);

    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    return(
        <Card>
            <CardHeader
                action={
                    <Button
                        component={NavLink}
                        to="/customer/create"
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
                                <TableCell></TableCell>
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
                                <TableCell>{customer.latestVisit 
                                    ? (new Date(customer.latestVisit)).toLocaleDateString() + ' ' + (new Date(customer.latestVisit)).toLocaleTimeString() 
                                    : 'Unknown'}
                                </TableCell>
                                <TableCell>
                                    <Button component={NavLink} to={"/customer/" + customer.id}>
                                        <ArrowForwardIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
  
export default CustomersList;