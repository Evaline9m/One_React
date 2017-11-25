import React, {Component} from 'react'

import {Router, Route, IndexRedirect, hashHistory} from 'react-router'

import TabBar from '../comment/TabBar'
import Index from '../comment/Index'
import read from '../comment/read'
import music from '../comment/music'
import mine from '../comment/mine'
import Page404 from '../comment/404'

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={TabBar}>
          <IndexRedirect to="/Index"></IndexRedirect>
          <Route path="Index" component={Index}></Route>
          <Route path="read" component={read}></Route>
          <Route path="music" component={music}></Route>
          <Route path="mine" component={mine}></Route>
        </Route>
        <Route path="*" component={Page404}></Route>
      </Router>
    )
  }
}

export default Routes
