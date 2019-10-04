import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

const CustomerAmountSpent = (props) => {
    const { amount } = props;

    return (
        <Card>
            <CardHeader
            // subheader="The information can be edited"
            title="Total amount spent"
            />
            <Divider />
            <CardContent>
                <Typography variant="h4">
                    { amount } €
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CustomerAmountSpent;