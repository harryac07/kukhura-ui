import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'

import rootReducer from 'store/reducers'
import saga from 'store/sagas'
import './index.css';
import App from 'components/Main';
import * as serviceWorker from './serviceWorker';

/* react loader spinner CSS */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const history = createBrowserHistory()
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(history), // root reducer with router state
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware,
      // ... other middlewares ...
    )
  )
);

// run the saga
sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
