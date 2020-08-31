import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import counterReducer from './store/reducers/counterReducer';
import resultsReducer from './store/reducers/resultsReducer';

const rootReducers = combineReducers({
  ctr: counterReducer, res: resultsReducer
})

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action)
      const result = next(action);
      console.log("[Middleware] Next State::", store.getState())
      return result;
    }
  }
}

const store = createStore(rootReducers, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
