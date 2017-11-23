import React from 'react'
import Button from './Button'

import * as Actions from './flux/Actions'
import * as ActionTypes from './flux/ActionTypes'

export default class FormContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChangeValue = this.handleChangeValue.bind(this)
  }
  handleFormSubmit() {

    this.setState({
      value: ''
    })

    Actions.savecomment({
      type: ActionTypes.SAVE_CONTENT,
      payload: this.state.value
    })
  }

  handleChangeValue(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <textarea name="" id="" cols="30" rows="10" onChange={this.handleChangeValue} value={this.state.value}></textarea>
        <Button onHandleSubmit={this.handleFormSubmit}>提交content</Button>
      </div>
    )
  }
}
