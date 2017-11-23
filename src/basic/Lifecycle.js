import React from 'react'
import VirtualDom from './VirtualDom'
export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor');
    this.state = {
      str: 'hello',
      num: 12
    }
  }

  render() {
    console.log('render');
    return (<div><VirtualDom /></div>)
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // setTimeout(() => {
    //   this.setState({
    //     str: 'world'
    //   })
    // }, 2000)
    // setTimeout(() => {
    //   this.setState({
    //     num: 21
    //   })
    // }, 5000)
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}
