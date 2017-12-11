import React, {Component} from 'react'

import {Router, Route, IndexRedirect, hashHistory} from 'react-router'

import TabBar from '../comment/TabBar'
import Index from '../comment/index'
import read from '../comment/read'
import music from '../comment/music'
import mine from '../comment/mine'
import readDetailed from '../comment/readDetailed'
import make from '../comment/make'
import change from '../comment/change'
import Page404 from '../comment/404'

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={TabBar}>
          <IndexRedirect to="/Index"></IndexRedirect>
          <Route path="Index" component={Index}></Route>
          <Route path="read" component={read}></Route>
          <Route path="readDetailed/:id" component={readDetailed}></Route>
          <Route path="music" component={music}></Route>
          <Route path="mine(/:world)" component={mine}></Route>
          <Route path="make" component={make}></Route>
          <Route path="change/:id" component={change}></Route>
        </Route>
        <Route path="*" component={Page404}></Route>
      </Router>
    )
  }
}

export default Routes
