# BakeryCRM

BakeryCRM is a full-stack Customer Relationship Management app, which holds all information of customers of a bakery managed by Bob the Baker.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You just need to have npm installed on your local machine.

### Installing

Firstly, go to the server directory, install required dependencies and run it.

```
cd bakery-crm-server
npm install
node index.js
```

Open a new terminal for the client application.
Then, go to the client directory, install required dependencies and run it.

```
cd bakery-crm
npm install
npm start
```

## Built With

* [React](https://fr.reactjs.org) - Client framework
* [Node.js](https://nodejs.org/en/) - Server framework
* [Apollo](https://www.apollographql.com/docs/) - Used in the server to create the graphQL API and in the client to query this API
* [GraphQL](https://graphql.org/learn/) - Query language for the API

## Use cases

All the following use cases have been implemented :
1. See an overview of all his customers, including their full name, address and the latest time of visit
2. Adding a new customer to the CRM
3. See information of an individual customer, including name, last-name, email address (optional), address (optional), a summary of their (maximum) last 10 purchases, the total money they have spent at the bakery in the last year
4. Edit information of an individual customer
5. Adding a new purchase to an individual customer

## Assumptions made

- I assume Bob will run the solution on a server within his bakery that will never turned off or fail and that has plenty of memory, letting you store the data in memory of the BakeryCRM back-end instead of adding a database.
- I assume Bob's employees are trustworthy, and no access control is needed for the BakeryCRM system.
