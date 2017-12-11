import {createStore, applyMiddleware} from 'redux'

import reducer from './reducer'

import thunk from 'redux-thunk'

let initState = {
  img :'',
  article : "",
  save : []
}

export default createStore(reducer, initState, applyMiddleware(thunk))
