import React, { useState, useEffect } from 'react'
import * as actions from './spotifyActions'
import { useSelector, useDispatch } from 'react-redux'

const SpotifyHooksPage = ()=> {
   
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.spotify.userInfo)
    useEffect(() => {
        if( location.hash !== ''){           
            dispatch(actions.saveSpotifyToken(location.hash.split('&')[0].split('=')[1]))
            dispatch(actions.saveSpotifyUserInfo())            
        }
    },[])
    
    const logout = ()=>{
        dispatch(actions.loout)
    }

    return (        
        <div>           
            <h1>Logged in Spotify </h1>
            {
                userInfo === null && 
                <a className="button" href="https://accounts.spotify.com/authorize?client_id=a6e82c769ba14f1eb0a57eeaed979974&response_type=token&redirect_uri=http://localhost:3000">
            login
                </a>
            }
            {
                userInfo &&
                <div>
                    <h2>Welcome {userInfo.display_name} </h2> 
                    <button onClick={()=>dispatch(actions.logOutSpotify())} > logout </button>
                </div>
            }       
            
        </div>
    )
    
}

export default SpotifyHooksPage
