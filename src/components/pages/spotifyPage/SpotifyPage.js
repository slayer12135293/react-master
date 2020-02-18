import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { Api, LoginToSpotify } from '../../../utils/api'
import * as actions from './spotifyActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// const SpotifyPage = () => {
//     const [ showLogin, setLoginStatus ] = useState(true)
    
//     useEffect(() => {
//         if(location.hash === ''){
//             setLoginStatus(true)
//         } else {
//             setLoginStatus(location.hash.split('&')[0].split('=')[1]) 
//         }
        
//     })

//     return (
//         <div>           
//             <h1>Logged in Spotify </h1>
//             {showLogin === true && <a className="button" href="https://accounts.spotify.com/authorize?client_id=a6e82c769ba14f1eb0a57eeaed979974&response_type=token&redirect_uri=http://localhost:3000">
//                 login
//             </a>}
                       
//         </div>
//     )
// }

class SpotifyPage extends React.Component {
    state = {
        showLogin: true,
    }

    componentDidMount() {
        const { saveSpotifyToken } = this.props
        if(location.hash === ''){
            this.setState({
                showLogin: true,
            })
        } else {
            this.setState({
                showLogin: false,
            })
            saveSpotifyToken(location.hash.split('&')[0].split('=')[1])
        }
    }
    render() {
        const { showLogin } = this.state
        return (
            <div>           
                <h1>Logged in Spotify </h1>
                {showLogin === true && <a className="button" href="https://accounts.spotify.com/authorize?client_id=a6e82c769ba14f1eb0a57eeaed979974&response_type=token&redirect_uri=http://localhost:3000">
                login
                </a>}
                       
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.spotify.tokenBearer,  
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        actions, 
        dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SpotifyPage)
