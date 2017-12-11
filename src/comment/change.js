import React from 'react'

import { connect } from 'react-redux'
import {Link} from 'react-router'
import '../style/make.css'
class Make extends React.Component {
 constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelate = this.handleDelate.bind(this)
    this.state = {
        img:'http://image.wufazhuce.com/Fnu7ek6E_22gXXxt-CB4n9rpFScW'
    }
  }
  
  handleSubmit(){
  	this.props.submit(document.getElementsByTagName("textarea")[0].value,this.state.img,this.props.save,this.props.params.id);
  }
  
  handleDelate(){
  	this.props.del(this.props.save,this.props.params.id);
  }
  
  render() {
    return (
      <div id='make'>
      	<div id='makeImg'>
	        <img src={this.state.img}  alt='aaa' id='contentImg'></img>
      	</div>
      	<div id='article'>
      		<textarea rows="5" cols="45" defaultValue={this.props.save[this.props.params.id].article}>
			</textarea>
      	</div>
      	<Link to="mine">
	        <div id='btn' onClick={this.handleSubmit}>
	      		提交
	      	</div>
	    </Link>
	    <Link to="mine">
	        <div id='del' onClick={this.handleDelate}>
	      		删除
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
      submit :(article,img,save,id) => {
      		let add = {
      			'img' : img,
      			"article" : article
      		}
      		save[id] = add
			dispatch({type:'save',payload:save})
      },
      del :(save,id) => {
      		save.splice(id, 1);
      }
    }
  }
)(Make)

