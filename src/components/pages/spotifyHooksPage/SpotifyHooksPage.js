import React, { useEffect, useState } from 'react'
import * as actions from './spotifyActions'
import { useSelector, useDispatch } from 'react-redux'
import { Api } from '../../../utils/api'
import './styles.scss'

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
    
    const searchArtist = async () => {
        const artistsResponse = await Api.get(Api.ENDPOINTS.searchArtist(searchQuery))
        const trackResponse = await Api.get(Api.ENDPOINTS.searchTrack(searchQuery))
        
        setArtistResult(artistsResponse.artists.items)
        setTrackResult(trackResponse.tracks.items)
        console.log(trackResponse.tracks.items)
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
                                            <div key={index} className="border-bottom pb-3">
                                                <div className="row">
                                                    <h3>{item.name}</h3>                                                    
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        {item.images.length > 0 ? 
                                                            <img  src={item.images[0].url}  className="rounded img-fluid"/> :
                                                            <img  src="https://lh3.googleusercontent.com/proxy/i8Z2ZFFAq-62OLe0nVJubrly17gJEwuXPKgrvU3HatZ67uA4tkQvM75bLUFU6OwYk8AX-x65VPszPUS42DDMqbPuzcSHqQehTF3jGCDxaNYiTAvDv9rRIsng3zMqHq5R"  className="rounded img-fluid"/>  }                                                    
                                                    </div>
                                                    <div className=" col-md-6 vlign-middle" >
                                                        <div>{item.genres.map( (gen, index) => { return (<span key={index} className="badge badge-pill badge-info">{gen}</span>  )})}</div> 
                                                        <h5>Total followers: {item.followers.total}</h5>
                                                        <h5>Popularity: {item.popularity}</h5>
                                                    </div>                                                                                 
                                                </div>                                                
                                            </div>
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
                                            <div key={index} className="border-bottom pb-3">
                                                <div className="row">
                                                    <h3>{track.name}</h3>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        {track.album && track.album.images && 
                                                        <img width="80" src={track.album.images[1].url} className="rounded" /> }
                                                        
                                                    </div>
                                                    <div className="col-md-10">
                                                        <span>Album name: {track.album.name}</span> <br/>
                                                        <span>Artist name: {track.album.artists[0].name}</span>
                                                    </div>
                                                    
                                                </div> 
                                            </div>
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
