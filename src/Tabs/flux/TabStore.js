import AppDispatcher from './AppDispatcher'
import * as ActionTypes from './ActionTypes'
import {EventEmitter} from 'events'

let tabdata = {
  datasource: [{
    id: 'id1',
    item: '项目一',
    content: '内容一'
  },{
    id: 'id2',
    item: '项目二',
    content: '内容二'
  },{
    id: 'id3',
    item: '项目三',
    content: '内容三'
  }],
  index: 0
}

const CHANGE_EVENT = 'change'

const TabStore = Object.assign({}, EventEmitter.prototype, {
  getDatasource() {
    return {
      index: tabdata.index,
      datasource: tabdata.datasource
    }
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  removeChangeListener() {
    this.removeListener(CHANGE_EVENT)
  }
})

AppDispatcher.register((action) => {
  if (action.type === ActionTypes.SETINDEX) {
    tabdata.index = action.payload
    TabStore.emitChange()
  }
})

export default TabStore
