import React from 'react'
import CommentList from './CommentList'
import FormBox from './FormBox'
import './style.css'

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    // this.handleRecieveData = this.handleRecieveData.bind(this)
  }

  // handleRecieveData(data) {
  //   this.setState({
  //       data: {
  //         id: '' + new Date().getTime(),
  //         title: 'Yangpeng',
  //         desc: data
  //       }
  //     })
  // }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="m-container">
        <h1>Comments</h1>
        <hr/>
        <CommentList />
        <FormBox />
      </div>
    )
  }
}

export default CommentBox
