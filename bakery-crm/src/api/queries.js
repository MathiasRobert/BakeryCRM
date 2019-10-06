import gql from 'graphql-tag';

export const GET_CUSTOMERS = gql`
    query getCustomersList{
        getCustomers {
            id
            firstname
            lastname
            address
            latestVisit
        }
    }
`;

export const GET_CUSTOMER_AND_PURCHASES = gql`
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