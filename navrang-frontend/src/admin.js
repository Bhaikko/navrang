import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import AdminApp from './AdminApp';

import dashboardReducer from './store/reducer/dashboard';
import formReducer from './store/reducer/form';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    form: formReducer 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <AdminApp />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
