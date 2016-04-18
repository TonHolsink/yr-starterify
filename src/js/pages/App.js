import React, {Component, PropTypes} from 'react';
import {selectReddit, fetchPostsIfNeeded, invalidateReddit} from '../actions';
import {connect} from 'react-redux';
import {version} from '../../../package.json';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    componentDidMount() {
        const {dispatch, selectedReddit} = this.props;
        dispatch(fetchPostsIfNeeded(selectedReddit));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const {dispatch, selectedReddit} = nextProps;
            dispatch(fetchPostsIfNeeded(selectedReddit));
        }
    }

    handleChange(nextReddit) {
        this.props.dispatch(selectReddit(nextReddit));
    }

    handleRefreshClick(e) {
        e.preventDefault();

        const {dispatch, selectedReddit} = this.props;
        dispatch(invalidateReddit(selectedReddit));
        dispatch(fetchPostsIfNeeded(selectedReddit));
    }

    render() {
        const {selectedReddit, posts, isFetching, lastUpdated, children} = this.props;
        const isEmpty = posts.length === 0;
        const {location} = this.props;
        const containerStyle = {
            marginTop: "60px"
        };


        return (
            <div>
                <Nav location={location}/>

                <div class="container" style={containerStyle}>

                    <h1>React Starterify {version}</h1>
                    <section>
                        {children || 'Welcome to React Starterify'}
                    </section>
                    <Picker
                        value={selectedReddit}
                        onChange={this.handleChange}
                        options={['reactjs', 'frontend']}
                    />
                    <p>
                        {lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {' '}
                        </span>
                        }
                        {
                            !isFetching &&
                            <a href="#"
                               onClick={this.handleRefreshClick}>
                                Refresh
                            </a>
                        }
                    </p>
                    {isEmpty
                        ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                        : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts}/>
                    </div>
                    }

                </div>

                <Footer/>

            </div>
        );
    }
}

App.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    children: React.PropTypes.object
};

function mapStateToProps(state) {
    const {selectedReddit, postsByReddit} = state.reddit;

    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: []
    };

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    };
}

export default connect(mapStateToProps)(App);
