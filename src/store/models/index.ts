import { Models } from '@rematch/core';

import global from './global';
import login from './login';

export interface RootModel extends Models<RootModel> {
  global: typeof global;
  login: typeof login;
}

export const models: RootModel = { login, global };
