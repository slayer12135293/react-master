import { SPOTIFY_SAVE_TOKEN, SPOTIFY_SAVE_USERINFO } from '../components/pages/spotifyPage/actionTypes'
const initialState = {
    tokenBearer: '',
    userInfo: null,
}
const spotifyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SPOTIFY_SAVE_TOKEN:
            return {
                ...state,
                tokenBearer: payload.token,
            }  
        case SPOTIFY_SAVE_USERINFO:
            return {
                ...state,
                userInfo: payload,                
            }      

        default:
            return state
    }
}

export default spotifyReducer
