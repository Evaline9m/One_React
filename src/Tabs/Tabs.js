import React, {Component} from 'react'
import TabItem from './Tabitem'
import TabContent from './TabContent'
export default class Tabs extends Component {
  // constructor(Props) {
  //   super(Props)
  //   this.tabitem = [{
  //     id: 'id1',
  //     item: '项目一',
  //     content: '内容一'
  //   },{
  //     id: 'id2',
  //     item: '项目二',
  //     content: '内容二'
  //   },{
  //     id: 'id3',
  //     item: '项目三',
  //     content: '内容三'
  //   }]
  //
  //   this.state = {
  //     index: 0
  //   }
  //
  //   this.getIndex = this.getIndex.bind(this)
  // }

  // getIndex(index) {
  //   this.setState({
  //     index: index
  //   })
  // }

  render() {
    return (
      <div>
        <TabItem />
        <TabContent />
      </div>
    )
  }
}
