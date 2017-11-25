import React from 'react'

import PropTypes from 'prop-types'

export default class VirtualDom extends React.Component {
  constructor(props) {
    console.log('child constructor');
    super(props)
    console.log(this.props.attr);
  }
  render() {
    return (
      <div name="abc">
        <span>test</span>
      </div>
    )
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  componentDidMount() {
    console.log('child componentDidMount');
  }
}

VirtualDom.propTypes = {
  attr: PropTypes.string.isRequired
}
