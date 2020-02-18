import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { Api, LoginToSpotify } from '../utils/api'

const HomePage = () => {
    const [ showLogin, setLoginStatus ] = useState(true)
    
    useEffect(() => {
        if(location.hash === ''){
            setLoginStatus(true)
        } else {
            setLoginStatus(location.hash.split('&')[0].split('=')[1]) 
        }
        
    })

    return (
        <div>           
            <h1>Logged in Spotify </h1>
            {showLogin === true && <a className="button" href="https://accounts.spotify.com/authorize?client_id=a6e82c769ba14f1eb0a57eeaed979974&response_type=token&redirect_uri=http://localhost:3000">
                login
            </a>}
                       
        </div>
    )
}

export default HomePage
