const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { GraphQLDateTime } = require('graphql-iso-date');

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
        updateCustomer(firstname: String!, lastname: String!, email: String, address: String): Customer,
        addPurchase(customerID: ID!, productName: String, price: Float!): Purchase,
    }
`;

let customersData = [
    {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'john-doe@gmail.com',
        address: '1 test street'
    },
    {
        id: 2,
        firstname: 'John',
        lastname: 'Doe',
        email: 'john-doe@gmail.com',
        address: '1 test street'
    }
];
let purchasesData = [
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    }
];

const addCustomer = (args) => { 
    let customer = {
        id: customersData.length + 1,
        firstname: args.firstname,
        lastname: args.lastname,
        email: args.email,
        address: args.address,
    };
    customersData.push(customer);
    return customer;
}

const updateCustomer = (args) => { 
    const customer = customersData.find(customer => customer.id == args.id);
    if(customer){
        customer.firstname = args.firstname,
        customer.lastname =  args.lastname,
        customer.email = args.email,
        customer.address = args.address
    }
    return customer;
}

const resolvers = {
    DateTime: GraphQLDateTime,
    Query: {
        getCustomer: (args) => customersData.find(customer => customer.id == args.id),
        getCustomers: () => customersData,
    },
    Mutation: {
        addCustomer: (args) => addCustomer(args),
        updateCustomer: (args) => updateCustomer(args),
        addPurchase: (args) => addPurchase(args),
    },
    Customer: {
        purchases: (customer) => purchasesData.filter(purchase => purchase.customerID == customer.id),
    },
  };


// Create an express server and a GraphQL endpoint
var schema = makeExecutableSchema({typeDefs, resolvers});
const server = new ApolloServer({ schema, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);