import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';
import AddPurchase from './AddPurchase';

const CustomerPurchases = (props) => {
    const { purchases, customerID } = props;

    return (
        <Card>
            <CardHeader
                action={
                    <AddPurchase customerID={customerID} />
                }
                title="Last 10 purchases"
            />
            <Divider />
            <CardContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Date of purchase</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchases.map(purchase => (
                        <TableRow
                            hover
                            key={purchase.id}
                        >
                            <TableCell>{purchase.productName}</TableCell>
                            <TableCell>{purchase.price}</TableCell>
                            <TableCell>{purchase.timestamp 
                                ? (new Date(purchase.timestamp)).toLocaleDateString() + ' ' + (new Date(purchase.timestamp)).toLocaleTimeString() 
                                : 'Unknown'}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>                        
            </CardContent>
        </Card>
    );
};

export default CustomerPurchases;