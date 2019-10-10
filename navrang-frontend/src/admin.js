import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

import './index.css';
import AdminApp from './AdminApp';
import * as serviceWorker from './serviceWorker';

const app = (
    <AdminApp />
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
