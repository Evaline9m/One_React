export default (state, action) => {
  switch(action.type) {
  	case 'img' :
  			return {...state, img: action.payload}
  	case 'article' :
  			return {...state, article: action.payload}
  	case 'setLoginStatus' :
  			return {...state, article: action.payload}
    default :
      	return state
  }
}
