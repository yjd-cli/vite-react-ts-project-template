import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import history from './history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { models, RootModel } from './models';

type FullModel = ExtraModelsFromLoading<RootModel>

export type Store = typeof store;
export type RootState = RematchRootState<RootModel>;
export type RootDispatch = RematchDispatch<RootModel>;

// https://rematchjs.org/docs/recipes/redux-plugins/
const store = init<RootModel, FullModel>({
  models,
  plugins: [immerPlugin(), loadingPlugin()],
  redux: {
    middlewares: [routerMiddleware(history)],
    reducers: {
      router: connectRouter(history),
    },
  },
});

export default store;
