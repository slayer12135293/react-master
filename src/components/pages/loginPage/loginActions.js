import * as types from './actionTypes'

const login = ({ accessToken,tokenId,profileObj }) => dispatch => {
    dispatch({
        type: types.GOOGLE_LOGIN,
        payload: {
            accessToken,
            tokenId,
            profileObj,
        },
    })
}
const logout = () => dispatch => {
    dispatch({
        type: types.GOOGLE_LOGOUT,
    })
}

export { login, logout }
