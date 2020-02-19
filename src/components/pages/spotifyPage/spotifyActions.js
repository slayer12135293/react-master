import * as types from './actionTypes'
import { Api } from '../../../utils/api'

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

const saveSpotifyUserInfo = () => async (dispatch) => {
    try{
        const userInfo = await Api.get(Api.ENDPOINTS.getUserProfile)
        dispatch({
            type: types.SPOTIFY_SAVE_USERINFO,
            payload: userInfo,
        })
    }
    catch (e) {
        console.log(e)
    }    
}

export { saveSpotifyToken, saveSpotifyUserInfo }
