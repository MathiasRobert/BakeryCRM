import gql from 'graphql-tag';

export const ADD_CUSTOMER = gql`
    mutation AddCustomer($firstname: String!, $lastname: String!, $email: String, $address: String) {
        addCustomer(firstname: $firstname, lastname: $lastname, email: $email, address: $address){
            id
        }
    }
`;

export const UPDATE_CUSTOMER = gql`
    mutation UpdateCustomer($id: ID!, $firstname: String!, $lastname: String!, $email: String, $address: String) {
        updateCustomer(id: $id, firstname: $firstname, lastname: $lastname, email: $email, address: $address){
            id
            firstname
            lastname
            email
            address
        }
    }
`;
export const ADD_PURCHASE = gql`
    mutation AddPurchase($customerID: ID!, $productName: String!, $price: Float!) {
        addPurchase(customerID: $customerID, productName: $productName, price: $price) {
            id
        }
    }
`;