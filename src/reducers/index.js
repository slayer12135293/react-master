import { combineReducers } from 'redux'
import spotify from './spotifyReducer'
import login from './loginReducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    spotify,
    login,
})

export default rootReducer
