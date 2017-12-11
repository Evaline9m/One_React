import React from 'react'

import { connect } from 'react-redux'
import {Link} from 'react-router'
import '../style/make.css'
class Make extends React.Component {
 constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
        img:'http://image.wufazhuce.com/Fnu7ek6E_22gXXxt-CB4n9rpFScW',
        article:'大部分人都有一个经不起推敲的幻觉，认为只要换换环境，自己的人生就会有起色。 from 李诞《宇宙超度指南》'
    }
  }
  
  handleSubmit(){
  	this.props.submit(document.getElementsByTagName("textarea")[0].value,this.state.img,this.props.save)
  }
  
  render() {
    return (
      <div id='make'>
      	<div id='makeImg'>
	        <img src={this.state.img}  alt='aaa' id='contentImg'></img>
      	</div>
      	<div id='article'>
      		<textarea rows="5" cols="45" defaultValue={this.state.article}>
			</textarea>
      	</div>
      	<Link activeClassName="active" to="/mine">
	        <div id='btnsubmit' onClick={this.handleSubmit}>
	      		提交
	      	</div>
	    </Link>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
		save : state.save
    }
  },

  (dispatch) => { 
    return {
      submit :(article,img,save) => {
      		let add = {
      			'img' : img,
      			"article" : article
      		}
      		save.push(add)
			dispatch({type:'save',payload:save})
      }
    }
  }
)(Make)

