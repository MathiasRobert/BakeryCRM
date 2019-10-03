const { gql } = require('apollo-server-express');

// GraphQL schema
const typeDefs = gql`
    scalar DateTime,

    type Customer {
        id: ID!
        firstname: String!
        lastname: String!
        email: String
        address: String
        purchases: [Purchase]
        latestVisit: DateTime
    },

    type Purchase {
        id: ID!
        customer: [Customer]
        productName: String!
        price: Float!
        timestamp: DateTime!
    },

    type Query {
        getCustomer(id: ID!): Customer
        getCustomers: [Customer]
    },

    type Mutation {
        addCustomer(firstname: String!, lastname: String!, email: String, address: String): Customer,
        updateCustomer(id: ID!, firstname: String!, lastname: String!, email: String, address: String): Customer,
        addPurchase(customerID: ID!, productName: String, price: Float!): Purchase,
    }
`;

module.exports = typeDefs;