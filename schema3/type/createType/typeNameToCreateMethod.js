import { TypeNames } from './typeNames';

import { createTeamType } from './team';
import { createUserType } from './user';


const TypeNameToCreateMethod = {
  [TypeNames.TEAM]: createTeamType,
  [TypeNames.USER]: createUserType,
};

module.exports = {
  TypeNameToCreateMethod,
};
