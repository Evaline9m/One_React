import AppDispatcher from './AppDispatcher'

export const savecomment = (action) => {
  AppDispatcher.dispatch({
    type: action.type,
    payload: action.payload
  })
}
