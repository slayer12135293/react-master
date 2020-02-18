import { combineReducers } from 'redux'
import fuelSavings from './fuelSavingsReducer'
import spotify from './spotifyReducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    fuelSavings,
    spotify,
})

export default rootReducer
