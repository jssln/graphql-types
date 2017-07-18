import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {
  getOrSetType,
  TypeNames,
} from './protected';

import { getTeamType } from './team';

function getUserType() {
  return getOrSetType(
    TypeNames.USER,
    () => new GraphQLObjectType({
      name: TypeNames.USER,
      fields: () => ({
        name: {
          type: GraphQLString,
          resolve: (parent, args, context) => {
            return parent.name;
          },
        },
        teams: {
          type: new GraphQLList(getTeamType()),
          resolve: (parent, args, context) => {
            return parent.teams;
          },
        }
      }),
    })
  );
}


module.exports = {
  getUserType,
};
