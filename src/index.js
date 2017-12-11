import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './basic/Routes'
import {Provider} from 'react-redux'
import store from './comment/redux/store'
//import './style/app.scss'


ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'))
