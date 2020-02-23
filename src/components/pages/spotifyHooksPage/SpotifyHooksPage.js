import React, { useEffect, useState } from 'react'
import * as actions from './spotifyActions'
import { useSelector, useDispatch } from 'react-redux'
import { Api } from '../../../utils/api'
import './styles.scss'
import  ArtistResultItem  from '../staticComponents/ArtistResultItem'
import TrackResultItem from '../staticComponents/TrackResultItem'

const SpotifyHooksPage = () => {   
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.spotify.userInfo)
    const [ searchQuery, setSearchQuery ] = useState('') 
    const [ artistResult, setArtistResult ] = useState(null)
    const [ trackResult, setTrackResult ] = useState(null)
    useEffect(() => {     
        if( location.hash !== ''){           
            dispatch(actions.saveSpotifyToken(location.hash.split('&')[0].split('=')[1]))
            dispatch(actions.saveSpotifyUserInfo())            
        }

    },[])
    
    useEffect(() => {
        const listener = event => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                searchArtist()
            }
        }
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown', listener)
        }
    })

    const searchArtist = async () => {
        const artistsResponse = await Api.get(Api.ENDPOINTS.searchArtist(searchQuery))
        const trackResponse = await Api.get(Api.ENDPOINTS.searchTrack(searchQuery))
        
        setArtistResult(artistsResponse.artists.items)
        setTrackResult(trackResponse.tracks.items)
        console.log(artistsResponse.artists.items)
    }

    return (        
        <div>           
            <h1> Spotify Demo </h1>
            {
                userInfo === null && 
                <a className="button" href="https://accounts.spotify.com/authorize?client_id=a6e82c769ba14f1eb0a57eeaed979974&response_type=token&redirect_uri=http://localhost:3000">
            login
                </a>
            }
            {
                userInfo &&
                <div >
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="float-left">Welcome {userInfo.display_name} </h2> 
                            <button className="float-right" onClick={()=>dispatch(actions.logOutSpotify())} > logout </button>    
                        </div>                                  
                    </div>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={e => setSearchQuery(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <button type="button" className="btn btn-primary btn-block" onClick={searchArtist}>Search</button>
                            </div>
                        </div>  
                        <div className="row">
                            {artistResult && <div className="col-md-6">
                                <h3>By artists <span className="badge badge-secondary">{artistResult.length}</span></h3>
                                
                                <div className="bolder shadow-sm p-3 mb-5 bg-white rounded">
                                    {artistResult.map( (item, index) => { 
                                        return(
                                            <ArtistResultItem 
                                                key={index} 
                                                artistItem={ { item }  } />                                            
                                        )                                        
                                    })}
                                </div>
                            </div>}
                            
                            {trackResult && 
                            <div className="col-md-6">
                                <h3>By tracks <span className="badge badge-secondary">{trackResult.length}</span></h3>
                                <div className="bolder shadow-sm p-3 mb-5 bg-white rounded">
                                    {trackResult.map( (track, index) => {
                                        return(
                                            <TrackResultItem 
                                                key={index} 
                                                title={track.name} 
                                                titleUrl={track.external_urls.spotify} 
                                                album={track.album}/>
                                        )
                                    } )}
                                </div>                            
                            </div>}                            
                        </div>

                    </div>
                </div>
            }      
            
        </div>
    )
    
}

export default SpotifyHooksPage
