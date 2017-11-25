import React from 'react'
import CommentItem from './CommentItem'

import CommentStore from './flux/CommentStore'

class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentData: []
    }
  }

  render() {
    return (
      <div className="list">
        {
          this.state.commentData.map((value, index) => {
            return <CommentItem key={value.id} commentData={value} />
          })
        }
      </div>
    )
  }

  componentWillUnmount() {
    CommentStore.removeChangeListener()
  }

  componentDidMount() {
    CommentStore.addChangeListener(() => {
      // console.log(CommentStore.getComment('title'));
      this.state.commentData.push({
        id: '' + new Date().getTime(),
        title: CommentStore.getComment('title'),
        desc: CommentStore.getComment('content')
      })
      this.setState({})
    })

    fetch('/mock/data.json')
      .then(response => response.json())
      .then((res) => {
        this.setState((prevState) => {
          return {
            commentData: prevState.commentData.concat(res)
          }
        })
      })
  }
}

export default CommentList
