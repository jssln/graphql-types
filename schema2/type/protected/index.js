import { TypeNames } from './typeNames';

import type { GraphQLObjectType } from 'graphql';
type TypeNameValue = $Values<typeof TypeNames>;


const typeNameToGraphQLObject = {};

function getOrSetType(typeName: TypeNameValue, createType: () => GraphQLObjectType) {
  if (!typeNameToGraphQLObject[typeName]) {
    typeNameToGraphQLObject[typeName] = createType();
  }
  return typeNameToGraphQLObject[typeName];
}

function getType(typeName: TypeNameValue) {
  return typeNameToGraphQLObject[typeName];
}


module.exports = {
  getOrSetType,
  getType,
  TypeNames,
};
