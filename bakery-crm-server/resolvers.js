const { GraphQLDateTime } = require('graphql-iso-date');

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
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
    {
        id: 1,
        customerID: 1,
        productName: 'Baguette',
        price: '1',
        timestamp: new Date()
    },
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

const addPurchase = (args) => { 
    let purchase = {
        id: purchasesData.length + 1,
        customerID: args.customerID,
        productName: args.productName,
        price: args.price,
        timestamp: new Date(),
    };
    purchasesData.push(purchase);
    return purchase;
}

const resolvers = {
    DateTime: GraphQLDateTime,
    Query: {
        getCustomer: (_, { id }) => customersData.find(customer => customer.id == id),
        getCustomers: () => customersData,
        getPurchases: (_, { customerID, first }) => {
            let res = purchasesData.filter(purchase => purchase.customerID == customerID);
            if(first)
                return res.slice(0, first);
            return res;
        },
    },
    Mutation: {
        addCustomer: (_, args) => addCustomer(args),
        updateCustomer: (_, args) => updateCustomer(args),
        addPurchase: (_, args) => addPurchase(args),
    },
    Customer: {
        purchases: (customer) => purchasesData.filter(purchase => purchase.customerID == customer.id),
        latestVisit: (customer) => {
            const purchases = purchasesData.filter(purchase => purchase.customerID == customer.id);
            const latest = purchases.sort((a,b) => a.timestamp > b.timestamp)[0]
            return latest ? latest.timestamp : null;
        }
    },
};

module.exports = resolvers;