import React, {Component} from 'react'
import * as Actions from './flux/Actions'
import * as ActionTypes from './flux/ActionTypes'
import TabStore from './flux/TabStore'

export default class TabsItem extends Component {
  constructor(Props) {
    super(Props)
    this.sendIndex = this.sendIndex.bind(this)
    this.data = {
      tabitem: TabStore.getDatasource().datasource
    }
  }

  sendIndex(index) {
    Actions.setIndex({
      type: ActionTypes.SETINDEX,
      payload: index
    })
  }

  componentDidMount() {
    TabStore.addChangeListener(() => {
      
    })
  }

  render() {
    return (
      this.data.tabitem.map((value, index) => {
        return <div onClick={() => {
          this.sendIndex(index)
        }} key={value.id}>{value.item}</div>
      })
    )
  }
}
