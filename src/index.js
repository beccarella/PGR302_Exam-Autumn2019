import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';
import App from './App';

const emailStore = createStore(allReducers);


ReactDOM.render(
    <Provider store={emailStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
