import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from '../components/pages/loginPage/actionTypes'

const initialState = {
    isLoggedIn: false,
    user: null,
    tokenId: null,
    accessToken: null,
}

const loginReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GOOGLE_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                accessToken: payload.accessToken,
                tokenId: payload.tokenId,
                user: payload.profileObj,
            }
        case GOOGLE_LOGOUT:
            return initialState
        default:
            return state
    }
}

export default loginReducer
