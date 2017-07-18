// @flow

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import { getUserType } from './type';


// Some dummy data
const USER = {name: 'Alice'};
const TEAM = {name: 'Team A'};
USER.teams = [TEAM];
TEAM.members = [USER];

const FAKE_DB = {
  User: USER,
  Team: TEAM,
};


const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: getUserType(),
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (parent, args, context) => {
        return FAKE_DB.User;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: queryType,
});


module.exports = {
  schema,
};
