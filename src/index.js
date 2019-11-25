import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './pages/App/index.tsx';
import * as serviceWorker from './serviceWorker';
import reducers from './ducks';
import rootSaga from './ducks/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = {
  ...createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
  ),
  runSaga: sagaMiddleware.run(rootSaga),
};

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
