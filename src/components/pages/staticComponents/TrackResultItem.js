import React from 'react'

const TrackResultItem = ({ title, titleUrl, album }) => {
    return(
        <div className="border-bottom pb-3">
            <div className="row">
                <h3><a href={titleUrl} target="_blank" rel="noopener noreferrer">{title}</a> </h3>
            </div>
            <div className="row">
                <div className="col-md-2">
                    {album && album.images && 
                    <img width="80" src={album.images[1].url} className="rounded" /> }
                                                        
                </div>
                <div className="col-md-10">
                    <div>Album name: <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer"> {album.name}</a> </div>
                    <span>Artist name: {album.artists[0].name}</span>
                </div>                                                    
            </div> 
        </div>
    )
}
export default TrackResultItem
