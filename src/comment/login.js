import React from 'react'
import { connect } from 'react-redux'
import * as actions from './redux/actions'
import { hashHistory } from 'React-router'

class Mine extends React.Component {
	constructor (props){
		super(props)
		this.handleLogin = this.handleLogin.bind(this)
	}
	handleLogin() {
		this.props.login();
		hashHistory.push('mine')
	}
  render() {
    return (
			<div className="login">
				 <header className="common-header">
					 <i className="yo-ico">&#xe779;</i>
					 <span>登录</span>
				</header>
				<div className="login-form">
					<div className="login-input">
						<i className="yo-ico">&#xe788;</i>
						<input placeholder="请输入用户名" /> 
					</div>
					<div className="login-input">
						<i className="yo-ico">&#xe6c2;</i>
						<input type="password" placeholder="请输入密码" />
					</div>
					
				</div>
				<div className="login-submit">
					<span onClick = {this.handleLogin}>登录</span>
					<a href="javascript:;">忘记密码？</a>
				</div>
			</div>
    )
  }

  componentDidMount() {
  	console.log(hashHistory)
  }

  componentWillUnmount() {
  }
}

export default connect(
  

  (dispatch) => {
    return {
      login: () => {
          actions.setLoginStatus(dispatch,{type:'setLoginStatus',payload:true})
      }
    }
  }
)(Mine)
