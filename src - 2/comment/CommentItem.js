import React from 'react'
import Button from './Button'

class CommentItem extends React.Component {
  constructor(props) {
    super(props)
    this.data = this.props.commentData
  }
  render() {
    return (
      <div>
        <ul>
          <li><img src="http://placehold.it/100x100" alt=""/></li>
          <li>
            <h3>{this.data.title}</h3>
            <p>{this.data.desc}</p>
          </li>
          <li>
            <Button>Reply</Button>
          </li>
        </ul>
      </div>
    )
  }
}

export default CommentItem
