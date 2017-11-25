import React from 'react'
import {Link} from 'react-router'


import '../style/tab.css'
import '../style/style.css'


class Index extends React.Component {
  
  render() {
    return (

			<div id='index'>
				
				<div className='head'>一个</div>
			
				<div id='content'>
					{this.props.children}
				</div>
			
				<ul id='nav'>
					<li>
						<Link activeClassName="active" to="/Index">
	            <b>首页</b>
	          </Link>
	        </li>
	        
					<li>
						<Link activeClassName="active" to="/read">
	            <b>阅读</b>
	          </Link>
	        </li>
	        
	        <li>
						<Link activeClassName="active" to="/music">
	            <b>音乐</b>
	          </Link>
	        </li>
	        
	        <li>
						<Link activeClassName="active" to="/mine">
	            <b>电影</b>
	          </Link>
	        </li>
	        
				</ul>
			</div>
    )
  }
  
}

export default Index