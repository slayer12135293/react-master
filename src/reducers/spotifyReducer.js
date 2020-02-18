import { SPOTIFY_SAVE_TOKEN } from '../components/pages/spotifyPage/actionTypes'
const initialState = {
    tokenBearer: '',
}
const spotifyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SPOTIFY_SAVE_TOKEN:
            return {
                ...state,
                tokenBearer: payload.token,
            }        

        default:
            return state
    }
}

export default spotifyReducer
