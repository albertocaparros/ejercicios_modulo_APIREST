import { GraphQLClient } from 'graphql-request';

const url = 'http://localhost:3050/graphql';

export const graphQLClient = new GraphQLClient(url);
