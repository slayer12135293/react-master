/* eslint-disable import/default */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import store, { persistor,  history } from './store/configureStore'
import Root from './components/Root'
import './styles/styles.scss'
require('./favicon.ico') 

render(
    <AppContainer>
        <Root store={store} history={history} persistor={persistor} />
    </AppContainer>,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default
        render(
            <AppContainer>
                <NewRoot store={store} history={history}  persistor={persistor} />
            </AppContainer>,
            document.getElementById('app')
        )
    })
}
