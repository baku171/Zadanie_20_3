import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store/index';
// import DevTools from './DevTools';
// import { getCountries } from './actions/actions-countries';
import routes from './routes';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// store.dispatch(getCountries());
