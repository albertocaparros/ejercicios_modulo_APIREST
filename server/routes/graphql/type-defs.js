const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Car {
    car_id: Float!
    name: String!
    brand: String!
    year_release: String!
  }

  type Query {
    cars: [Car!]!
    car(car_id: Float!): Car!
  }

  input CarAdd {
    name: String!
    brand: String!
    year_release: String!
  }

  type Mutation {
    saveCar(carAdd: CarAdd!): Boolean
  }
`;

module.exports = typeDefs;
