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
import { useMutation } from '@apollo/react-hooks';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    submitBtn: {
        marginLeft: 'auto'
    },
    btnIcon: {
        marginRight: theme.spacing(1),
    },
}));

const CustomerDetails = (props) => {
    const classes = useStyles();
    const { customer, cardTitle, btnTxt, type, history } = props
    let localCustomer;
    if(!customer)
        localCustomer = { firstname :'', lastname: '', email: '', address: ''}
    else
        localCustomer = customer;
    const [values, setValues] = useState(localCustomer);
    const [mutationCustomer] = useMutation(props.mutationCustomer, {
        onCompleted(data) {
            if(type === 'add')
                history.push('/customer/' + data.addCustomer.id)
        }
    });

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Card>
            <form 
                autoComplete="off" 
                onSubmit={e => {
                    e.preventDefault();
                    mutationCustomer({ 
                        variables: { 
                            id: type === 'edit' ? values.id : null,
                            firstname: values.firstname,
                            lastname: values.lastname,
                            email: values.email,
                            address: values.address
                        }
                    });
                }}
            >
                <CardHeader
                // subheader="The information can be edited"
                title={cardTitle}
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
                    <Button className={classes.submitBtn} color="primary" variant="outlined" type="submit">
                        {type === 'add' ? <AddIcon className={classes.btnIcon} /> : <EditIcon className={classes.btnIcon} />}
                        {btnTxt}
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default withRouter(CustomerDetails);