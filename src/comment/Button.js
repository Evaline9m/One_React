import React from 'react'
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.props.onHandleSubmit()
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>{this.props.children}</button>
      </div>
    )
  }
}

export default Button
