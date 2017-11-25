import AppDispatcher from './AppDispatcher'

import * as ActionTypes from './ActionTypes'

import {EventEmitter} from 'events'

let comment = {
  title: '',
  content: ''
}

const CommentStore = Object.assign({}, EventEmitter.prototype, {
  getComment(type) {
    return comment[type]
  },

  addChangeListener(callback) {
    this.on('change', callback)
  },

  removeChangeListener() {
    this.removeListener('change')
  },

  emitChange() {
    this.emit('change')
  }
})

AppDispatcher.register((action) => {
  if (action.type === ActionTypes.SAVE_CONTENT) {
    comment.content = action.payload
    CommentStore.emitChange()
  } else if (action.type === ActionTypes.SAVE_TITLE) {
    comment.title = action.payload
    CommentStore.emitChange()
  }
})

export default CommentStore
