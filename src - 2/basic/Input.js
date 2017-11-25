import React from 'react'

class Input extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   value: ''
    // }
    // this.handleChangevalue = this.handleChangevalue.bind(this)
    this.handleInputEnter = this.handleInputEnter.bind(this)
  }

  // handleChangevalue(e) {
  //   this.setState({
  //     value: e.target.value
  //   })
  // }

  handleInputEnter(e) {
    if (e.keyCode === 13) {
      // setState方法执行时收集state所有的变化，
      // state修改可以在setState外边，也可以在里边
      // this.state.working.push({
      //   id: '' + new Date().getTime(),
      //   item: this.state.value
      // })
      // this.setState((prevState) => {
      //   return {
      //     value: ''
      //     // working: prevState.working.concat([
      //     //   {
      //     //     id: '' + new Date().getTime(),
      //     //     item: prevState.value
      //     //   }
      //     // ])
      //   }
      // })

      let value = this.refs.keywords.value
      this.refs.keywords.value = ''
      this.props.onChangeWorking(value)
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="keywords"></label>
        <input id="keywords" ref="keywords" type="text" onKeyUp={this.handleInputEnter}/>
      </div>
    )
  }
}

export default Input
