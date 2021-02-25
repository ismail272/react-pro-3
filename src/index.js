import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const initialState = {
    todos: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'start': return {loading: true}
        case 'addTitle': return {todos: action.load}

        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

