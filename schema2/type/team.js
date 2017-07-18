import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {
  getOrSetType,
  getType,
  TypeNames,
} from './protected';


function getTeamType() {
  return getOrSetType(
    TypeNames.TEAM,
    () => new GraphQLObjectType({
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
    })
  );
}


module.exports = {
  getTeamType,
};
