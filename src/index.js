import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'; //Named export and a Component, therefore P in caps
import {createStore } from 'redux'; //Named export but a func =
import reducers from './reducers'; //Our defined reducers in index.js

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
    );