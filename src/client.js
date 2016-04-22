import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './containers/App/App';
import PoweredBy from './components/Powered-by';
import About from './containers/About/About';
import Forms from './containers/Forms/Forms';
import configureStore from './store/configureStore';

if (process.env.NODE_ENV !== 'production') {
    window.React = React;
}
/* window.React = React;

let store = createStore(reducer);
console.log(store.getState());

store.dispatch({
    type: 'ADD_TODO',
    text: 'Use Redux'
});
console.log(store.getState());
*/
const store = configureStore();

render(
  (<Provider store={store}><Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/forms" component={Forms} />
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router></Provider>), document.getElementById('content')
);
