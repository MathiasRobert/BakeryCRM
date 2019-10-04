import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    saveBtn: {
        marginLeft: 'auto'
    }
}));

const CustomerDetails = (props) => {
    const classes = useStyles();
    const [values, setValues] = useState(props.customer);

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Card>
            <form autoComplete="off" noValidate>
                <CardHeader
                // subheader="The information can be edited"
                title="Customer details"
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                helperText="Please specify the first name"
                                label="First name"
                                margin="dense"
                                name="firstname"
                                onChange={handleChange}
                                required
                                value={values.firstname}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Last name"
                                margin="dense"
                                name="lastname"
                                onChange={handleChange}
                                required
                                value={values.lastname}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                margin="dense"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Address"
                                margin="dense"
                                name="address"
                                onChange={handleChange}
                                value={values.address}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button className={classes.saveBtn} color="primary" variant="contained">
                        Save changes
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default CustomerDetails;