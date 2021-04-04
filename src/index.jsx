import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux';
import getStockInfo from './store/reducers/getStockInfo';

const rootReducer = combineReducers({
  stockInf:getStockInfo
})

const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
       <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
