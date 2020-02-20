/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom'

import AboutPage from './AboutPage'
import FuelSavingsPage from './containers/FuelSavingsPage'
import HomePage from './HomePage'
import SpotifyPage from './pages/spotifyPage/SpotifyPage'
import SpotifyHooksPage  from './pages/spotifyHooksPage/SpotifyHooksPage'
import NotFoundPage from './NotFoundPage'
import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
    render() {
        const activeStyle = { fontWeight:'bold' }
        return (
            <div className="container-fluid">
                <div className="nav nav-pills nav-fill">
                    <NavLink exact to="/" activeStyle={activeStyle} className="nav-item nav-link" >Spotify Hooks</NavLink>                    
                    <NavLink exact to="/spotify" activeStyle={activeStyle} className="nav-item nav-link" >Spotify Class</NavLink>                    
                    <NavLink to="/fuel-savings" activeStyle={activeStyle}  className="nav-item nav-link">Demo App</NavLink>                    
                    <NavLink to="/about" activeStyle={activeStyle}  className="nav-item nav-link">About</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" component={SpotifyHooksPage} />
                    <Route path="/spotify" component={SpotifyPage} />
                    <Route path="/fuel-savings" component={FuelSavingsPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.element,
}

export default hot(module)(App)
