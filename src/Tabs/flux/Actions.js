import AppDispatcher from './AppDispatcher'

export const setIndex = (action) => {
  AppDispatcher.dispatch({
    type: action.type,
    payload: action.payload
  })
}
