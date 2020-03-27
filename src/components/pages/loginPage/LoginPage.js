import React, { useEffect, useState } from 'react'
import * as actions from './loginActions'
import { useSelector, useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import {  useHistory,useLocation } from 'react-router-dom'

import './styles.scss'

const LoginPage = () => {   
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' } }  

    const sucessResponse = (response) => {
        const { tokenId, accessToken, profileObj } = response
        console.log(response)
        dispatch(actions.login({ accessToken,tokenId,profileObj }))
        history.replace(from)
    }

    const imgArray = [
        'https://blog-cdn.everhour.com/blog/wp-content/uploads/2019/09/timesheet-meme-.jpg',
        'https://blog-cdn.everhour.com/blog/wp-content/uploads/2019/09/221-1-768x480.jpg',
        'https://blog-cdn.everhour.com/blog/wp-content/uploads/2019/09/2.0.0.9.jpg',
        'https://blog-cdn.everhour.com/blog/wp-content/uploads/2019/09/please-complete.jpg',
        'https://blog-cdn.everhour.com/blog/wp-content/uploads/2019/09/219.jpg',
        'https://blog-cdn.everhour.com/blog/wp-content/uploads/2019/09/2ktph6-1.jpg',
        'https://blog-cdn.everhour.com/blog/wp-content/uploads/2019/09/4.0.0-2-768x463.jpg',
        'https://blog-cdn.everhour.com/blog/wp-content/uploads/2019/09/success-min.jpg',
    ]

    const randomNum = Math.floor(Math.random() * imgArray.length)
    return (        
        <div className="login-page">
            <div className="center-box shadow-lg p-3 mb-5 bg-white rounded">
                <div className="row d-flex justify-content-center"><img src="http://www.input-consulting.se/img/logo/logo_3.png" alt="logo" /></div>
                <div className="text-center mb-2">
                    <img src={imgArray[randomNum]} width="100%"/>
                </div>
                
                <div className="row d-flex justify-content-center m-4">

                    <GoogleLogin
                        clientId="370800998793-9d00usao27vrmh8p1qu29q3ama2c7rbh.apps.googleusercontent.com"
                        render={renderProps => (
                            <button className="btn btn-primary btn-block" 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}>
                                    Login in with Input account
                            </button>
                        )}
                        buttonText="Login"
                        isSignedIn={true}
                        onSuccess={sucessResponse}
                        cookiePolicy={'single_host_origin'}
                    />
                    
                </div>
            </div>
        </div>        
    )
    
}

export default LoginPage
