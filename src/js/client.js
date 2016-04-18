import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './pages/App';
import PoweredBy from './pages/Powered-by';
import About from './pages/About';
import ReactJs from './pages/ReactJs';
import configureStore from './store/configureStore';

window.React = React;

const store = configureStore();

render(
    (<Provider store={store}><Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={About}></IndexRoute>
            <Route path="/poweredby" component={PoweredBy}/>
            <Route path="/reactjs" component={ReactJs}/>
        </Route>
    </Router></Provider>), document.getElementById('content')
);
