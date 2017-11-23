import React, {Component} from 'react'
import TabStore from './flux/TabStore'

export default class TabContent extends Component {
  constructor(Props) {
    super(Props)
    this.state = {
      index: TabStore.getDatasource().index
    }
  }

  componentDidMount() {
    TabStore.addChangeListener(() => {
      this.setState({
        index: TabStore.getDatasource().index
      })
    })
  }

  render() {
    let ds = TabStore.getDatasource()
    return (
      <div>{ds.datasource[this.state.index].content}</div>
    )
  }
}
