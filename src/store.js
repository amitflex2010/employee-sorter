import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import logger from 'redux-logger';
import { watcherSaga } from './sagas/rootsaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
