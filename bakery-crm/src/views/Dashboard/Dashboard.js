import React, { Component } from "react";
import {
    Container
} from '@material-ui/core';
import CustomersList from '../../components/Dashboard/CustomersList'

class Dashboard extends Component {
    render() {
        return(
            <Container>
                <h4>Bakery CRM</h4>
                <CustomersList />
            </Container>
        )
    }
}

export default Dashboard;
