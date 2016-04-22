import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { version } from '../../../package.json';

class App extends Component {
    render() {
        const styles = require('./App.scss');
        const { children } = this.props;
        return (
            <div>
                <header>
                    <h1>R111eact Starterify {version}</h1>
                    <Link to="/forms">Formulieren</Link>
                    <Link to="/redux-forms">Redux-Forms</Link>
                    <Link to="/about">About</Link>
                    <Link to="/poweredby">Powered by</Link>
                </header>
                <section>
                    {children || 'Welcome to React Starterify'}
                </section>
                Content
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object
};

export default App;
