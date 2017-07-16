// @flow

import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';


// Some dummy data
const USER = {name: 'Alice'};
const TEAM = {name: 'Team A'};
USER.teams = [TEAM];
TEAM.members = [USER];

const FAKE_DB = {
  User: USER,
  Team: TEAM,
};


// Type definitions
const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({  // Must be a function to handle circular reference.
    name: {
      type: GraphQLString,
      resolve: (parent, args, context) => {
        return parent.name;
      },
    },
    teams: {
      type: new GraphQLList(teamType),
      resolve: (parent, args, context) => {
        return parent.teams;
      },
    }
  }),
});

const teamType = new GraphQLObjectType({
  name: 'Team',
  fields: () => ({  // Must be a function to handle circular reference.
    name: {
      type: GraphQLString,
      resolve: (parent, args, context) => {
        return parent.name;
      },
    },
    members: {
      type: new GraphQLList(userType),
      resolve: (parent, args, context) => {
        return parent.members;
      }
    }
  }),
});


const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
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
