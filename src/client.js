import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import App from './containers/App/App';
import Datalist from './containers/Datalist/Datalist';
import About from './containers/About/About';
import Forms from './containers/Forms/Forms';
import ReduxForms from './containers/Forms/ReduxForms';
import Counter from './containers/Counter/Counter';
import configureStore from './store/configureStore';

if (process.env.NODE_ENV !== 'production') {
    window.React = React;
}
const store = configureStore();

render(
    (<Provider store={store}><Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/forms" component={Forms}/>
            <Route path="/redux-forms" component={ReduxForms}/>
            <Route path="/about" component={About}/>
            <Route path="/datalist" component={Datalist} />
            <Route path="/counter" component={Counter}/>
        </Route>
    </Router></Provider>), document.getElementById('content')
);
