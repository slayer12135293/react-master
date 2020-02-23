import React from 'react'

const ArtistResultItem = ({ artistItem }) =>{
    return(
        <div>
            {artistItem === undefined || artistItem === null ?
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> : 
                <div className="border-bottom pb-3">
                    <div className="row">
                        <h3><a href={artistItem.item.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                            {artistItem.item.name}</a>
                        </h3>                                           
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            {artistItem.item.images.length > 0 ? 
                                <img  src={artistItem.item.images[0].url}  className="rounded img-fluid"/> :
                                <img  src="https://i0.wp.com/power2u.org/wp-content/uploads/2018/01/doh-homer-computer700x413-1.jpg"  className="rounded img-fluid"/>  }                                                    
                        </div>
                        <div className=" col-md-6 vlign-middle" >
                            <div>{artistItem.item.genres.map( (gen, index) => { return (<span key={index} className="badge badge-pill badge-info">{gen}</span>  )})}</div> 
                            <h5>Total followers: {artistItem.item.followers.total}</h5>
                            <h5>Popularity: {artistItem.item.popularity}</h5>
                        </div>                                                 
                    </div>                                                
                </div>   
            }
        </div>
              
    )
}

export default ArtistResultItem
