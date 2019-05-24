import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Index from './view/index/index'
import './plugin/flex.css'
import 'antd/dist/antd.css';
import { Provider} from 'react-redux'
import store from './store'
import {GrobalStyle} from './reset'


/* eslint-disable */
ReactDOM.render(
    <Fragment>
        <GrobalStyle />
            <Provider store={store}>
                <Index />
            </Provider>
    </Fragment>,
    document.getElementById('root')
)