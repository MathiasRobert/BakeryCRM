const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Create an express server and a GraphQL endpoint
var schema = makeExecutableSchema({typeDefs, resolvers});
const server = new ApolloServer({ schema, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);