import * as types from './actionTypes'

const saveSpotifyToken = (token) => {    
    return ( dispatch ) => {
        dispatch({
            type: types.SPOTIFY_SAVE_TOKEN,
            payload: {
                token,
            },
        })
    }

}

export { saveSpotifyToken }
