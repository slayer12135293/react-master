import React from 'react'
import * as actions from './spotifyActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Api } from '../../../utils/api'

class SpotifyPage extends React.Component {
    state = {
        showLogin: true,
    }

    async componentDidMount() {
        const { saveSpotifyToken, saveSpotifyUserInfo, token } = this.props
        if(token === '' && location.hash === ''){
            this.setState({
                showLogin: true,
            })
        } else {
            this.setState({
                showLogin: false,
            })
            saveSpotifyToken(location.hash.split('&')[0].split('=')[1])
            saveSpotifyUserInfo()
        }
    }
    render() {
        const { showLogin } = this.state
        const { userInfo } = this.props
        return (
            <div>           
                <h1>Logged in Spotify </h1>
                {
                    showLogin === true && 
                    <a className="button" href="https://accounts.spotify.com/authorize?client_id=a6e82c769ba14f1eb0a57eeaed979974&response_type=token&redirect_uri=http://localhost:3000">
                login
                    </a>
                }
                {
                    userInfo && <h2>Welcome {userInfo.display_name} </h2>
                }       
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.spotify.tokenBearer,  
    userInfo: state.spotify.userInfo,
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        actions, 
        dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SpotifyPage)
