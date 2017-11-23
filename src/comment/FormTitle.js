import React from 'react'
import Button from './Button'

import * as Actions from './flux/Actions'
import * as ActionTypes from './flux/ActionTypes'

export default class FormContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
  }
  handleFormSubmit() {

    this.setState({
      title: ''
    })

    Actions.savecomment({
      type: ActionTypes.SAVE_TITLE,
      payload: this.state.title
    })
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChangeTitle} value={this.state.value} />
        <Button onHandleSubmit={this.handleFormSubmit}>提交title</Button>
      </div>
    )
  }
}
