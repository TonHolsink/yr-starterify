import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const aboutClass = location.pathname === "/" ? "active" : "";
        const poweredByClass = location.pathname.match(/^\/poweredby/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"/>
                            <span class="icon-bar"/>
                            <span class="icon-bar"/>
                        </button>
                    </div>
                    <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class={aboutClass}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>About</IndexLink>
                            </li>
                            <li class={poweredByClass}>
                                <Link to="/poweredby" onClick={this.toggleCollapse.bind(this)}>Powered by</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
