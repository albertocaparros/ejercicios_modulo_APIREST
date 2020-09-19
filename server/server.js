const express = require('express');
(path = require('path')),
  (cookieParser = require('cookie-parser')),
  (bodyParser = require('body-parser')),
  (cors = require('cors'));

const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./routes/graphql/type-defs');
const resolvers = require('./routes/graphql/resolvers');

const users = require('./routes/users');
const cars = require('./routes/cars');

const app = express();

// setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/users', users);
app.use('/api/cars', cars);

const graphqlServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
graphqlServer.applyMiddleware({ app });

app.set('port', process.env.PORT || 3050);
app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));
console.log(
  'GraphQL server listening on port: ' +
    (process.env.PORT || 3050) +
    graphqlServer.graphqlPath
);

module.exports = app;
