// src/hanlder.js

const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context
  }),
});

exports.graphqlHandler = server.createHandler({
	cors: {
		origin: '*',
		credentials: true,
	},
});
