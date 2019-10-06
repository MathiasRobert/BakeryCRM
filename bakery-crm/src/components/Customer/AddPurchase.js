import React, { useState } from 'react';
import { 
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';

import { GET_CUSTOMER_AND_PURCHASES, GET_CUSTOMERS } from '../../api/queries';
import { ADD_PURCHASE } from '../../api/mutations';

const useStyles = makeStyles(theme => ({
    addIcon: {
      marginRight: theme.spacing(1),
    },
}));

function AddPurchase(props) {
    const { customerID } = props;

    const [addPurchaseMutation] = useMutation(ADD_PURCHASE);

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({ productName: '', price: 0 });

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        addPurchaseMutation({ 
            variables: 
            { 
                customerID: customerID,  
                productName: values.productName,  
                price: parseFloat(values.price),  
            },
            refetchQueries: () => ['getCustomersList', 'getCustomerAndPurchases']
        });
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <AddIcon className={classes.addIcon} />
                Add purchase
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new purchase</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="productName"
                        name="productName"
                        label="Product"
                        onChange={handleChange}
                        required
                        value={values.productName}
                    />
                    <TextField
                        margin="dense"
                        id="price"
                        name="price"
                        label="Price"
                        type="number"
                        onChange={handleChange}
                        required
                        value={values.price}
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleAdd} color="primary">
                    Add purchase
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddPurchase;