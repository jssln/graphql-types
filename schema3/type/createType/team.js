import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { TypeNames } from './typeNames';


function createTeamType(getType: () => GraphQLObjectType) {
  return new GraphQLObjectType({
    name: TypeNames.TEAM,
    fields: () => ({
      name: {
        type: GraphQLString,
        resolve: (parent, args, context) => {
          return parent.name;
        },
      },
      members: {
        type: new GraphQLList(getType(TypeNames.USER)),
        resolve: (parent, args, context) => {
          return parent.members;
        }
      }
    }),
  });
}

module.exports = {
  createTeamType,
};
