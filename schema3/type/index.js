import { TypeNames } from './createType/typeNames';
import { TypeNameToCreateMethod } from './createType/typeNameToCreateMethod';

import type { GraphQLObjectType } from 'graphql';
type TypeNameValue = $Values<typeof TypeNames>;


const typeNameToGraphQLObject = {};

function getType(typeName: TypeNameValue): GraphQLObjectType {
  if (!typeNameToGraphQLObject[typeName]) {
    typeNameToGraphQLObject[typeName] = TypeNameToCreateMethod[typeName](getType);
  }
  return typeNameToGraphQLObject[typeName];
}


// Public methods

function getTeamType() {
  return getType(TypeNames.TEAM);
}

function getUserType() {
  return getType(TypeNames.USER);
}


module.exports = {
  getTeamType,
  getUserType,
};
