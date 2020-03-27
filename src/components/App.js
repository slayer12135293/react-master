/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'

import AboutPage from './AboutPage'
import SpotifyPage from './pages/spotifyPage/SpotifyPage'
import SpotifyHooksPage  from './pages/spotifyHooksPage/SpotifyHooksPage'
import NotFoundPage from './NotFoundPage'
import LoginPage from './pages/loginPage/LoginPage'
import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'
import { useSelector } from 'react-redux'
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const PrivateRoute = ({ children, ...rest }) => {
    const isLoggedIn = useSelector(state => state.login.isLoggedIn)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}

class App extends React.Component {
    render() {
        const activeStyle = { fontWeight:'bold' }
        return (
            <div>
                {/* <div className="nav nav-pills nav-fill">
                    <NavLink exact to="/" activeStyle={activeStyle} className="nav-item nav-link" >Spotify Hooks</NavLink>                    
                    <NavLink exact to="/spotify" activeStyle={activeStyle} className="nav-item nav-link" >Spotify Class</NavLink>                    
                    <NavLink to="/fuel-savings" activeStyle={activeStyle}  className="nav-item nav-link">Demo App</NavLink>                    
                    <NavLink to="/about" activeStyle={activeStyle}  className="nav-item nav-link">About</NavLink>
                </div> */}
                <Switch>
                    <Route path="/login" component={LoginPage} />                    
                    
                    {/* <Route path="/about" component={AboutPage} />                   */}
                    <PrivateRoute path="/about">
                        <AboutPage/>                        
                    </PrivateRoute> 
                    <PrivateRoute path="/">
                        <SpotifyHooksPage/>                        
                    </PrivateRoute>  
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
