import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { TypeNames } from './typeNames';

function createUserType(getType: () => GraphQLObjectType) {
  return new GraphQLObjectType({
    name: TypeNames.USER,
    fields: () => ({
      name: {
        type: GraphQLString,
        resolve: (parent, args, context) => {
          return parent.name;
        },
      },
      teams: {
        type: new GraphQLList(getType(TypeNames.TEAM)),
        resolve: (parent, args, context) => {
          return parent.teams;
        },
      }
    }),
  });
}

module.exports = {
  createUserType,
};