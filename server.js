// @flow

import express from 'express';
import graphqlHTTP from 'express-graphql';

import { schema } from './schema1/index';


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
