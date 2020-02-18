
import configureStore from '../store/configureStore'

const LoginToSpotify = async () => {

    const url = `https://accounts.spotify.com/authorize?client_id=a6e82c769ba14f1eb0a57eeaed979974&response_type=token&redirect_uri=http://localhost:3000/`

    const response = await fetch(url, { // eslint-disable-line
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    })
    console.log('login.response', response)

    // if (response.ok) {
    //     const responseJson = await response.json()
    //     const decodedJwt = jwtDecode(responseJson.JwtToken)
    //     return {
    //         id: decodedJwt.number && decodedJwt.number.Value,
    //         username: decodedJwt.name && decodedJwt.name.Value,
    //         jwtToken: responseJson.JwtToken,
    //         jwtExpiry: decodedJwt.exp,
    //         unitType: decodedJwt.unittype,
    //         prefferedCountry: decodedJwt.prefcountry,
    //         language: decodedJwt.culture.substring(0, 2),
    //         locale: decodedJwt.culture,
    //     }
    // }
    
    // throw response
}

// Lei added
const Api = {
    ENDPOINTS: {
        getPropertyDetails: estateKey => `/estate/GetEstateDetails?estateKey=${estateKey}`,
        getPropertyPreivew: (latitude, longitude) => `/map/EstateByCoordinate?latitude=${latitude}&longitude=${longitude}`,
        getPropertyPreivewByEstateKey: estateKey => `/estate/EstatePreview?id=${estateKey}`,
        estateSearch: `/search/EstateSearch`,
        cameraSearch: `/search/CameraSearch`,
        estateBorders: estateKey => `/map/EstateBorders/${estateKey}`,
        spotifyAuth: 'https://accounts.spotify.com/authorize?client_id=a6e82c769ba14f1eb0a57eeaed979974&response_type=token&redirect_uri=http://localhost:3000/&state=123',

    },
    async get(path) {
        return apiRequest(path, 'GET', null)
    },

    async post(path, payload) {
        return apiRequest(path, 'POST', payload)
    },

    async put(path, payload) {
        return apiRequest(path, 'PUT', payload)
    },

    async patch(path, payload) {
        return apiRequest(path, 'PATCH', payload)
    },

    async delete(path, payload) {
        return apiRequest(path, 'DELETE', payload)
    },
}

const apiRequest = async (path, method = 'GET', payload) => {
    //const url = `${configureStore.getState().app.apiBaseURL}${path.replace('//', '/')}`
    const url = `${path.replace('//', '/')}`

    //const { jwtToken } = configureStore.getState().user
    // const refreshToken = user.refreshToken

    // // Check if token needs to be updated or use as is.
    // // This will return null on error, which will generate a 401 (see 401 handling below).
    // token = await AuthTokenUtil.checkAndUpdateToken(token, refreshToken)

    const requestParams = {
        method,
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            //Authorization: `Bearer ${jwtToken}`,
        },
        
    }

    if (method !== 'GET') {
        requestParams.body = JSON.stringify(payload)
    }

    console.log(
        `%c${method} %c${url}%c with payload: `,
        'color: #c242f4',
        'color: blue',
        'color: black',
        payload,
        ' and headers',
        requestParams.headers
    )
    //try{
    const response = await fetch(url, requestParams)

    if (response.ok) {
        if (response.status === 204) {
            return {}
        }
        try {
            const result = await response.json()
            return result
        } catch (error) {
            return
        }
    }        
    throw response 

}

export { Api, LoginToSpotify }
