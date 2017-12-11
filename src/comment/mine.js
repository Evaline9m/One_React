import React from 'react'
import '../style/mine.css'

import { connect } from 'react-redux'
import axios from 'axios';
import {Link} from 'react-router'

class mine extends React.Component {
	
	constructor(props) {
	    super(props)
	    this.change = this.change.bind(this)
	    this.state = {
	      Img:'',
	      content:""
	      
	    }
    }
	
	change(){
		console.log("aaa")
	}
	
	componentDidMount() {
		axios.get("http://v3.wufazhuce.com:8000/api/hp/idlist/0")
	    .then(res => {
	      axios.get(`http://v3.wufazhuce.com:8000/api/hp/detail/`+res.data.data[0])
		    .then(res => {
				this.setState({
					Img : res.data.data.hp_img_url,
					content : res.data.data.hp_content
				})
			});
	    });
    }
  
  render() {
    return (
      <div className='mine'>
        <div id='head'>
        	<img src='http://image.wufazhuce.com/FjSCn2zrwoeJc4dYTp9x971YmbAv'  alt='aaa' id='headImg'></img>
        </div>
        
        <ul id='content'>
        	<li>
	        	<img src={this.state.Img}  alt='aaa' id='contentImg'></img>
        		<Link activeClassName="active" to="/make">
	            <span>制作小记</span>
	          </Link>
        		<p>{this.state.content}</p>
        	</li>
        	
        	{
        		this.props.save.map((item, index)=>{
        			return (<Link to={`/change/${index}`}>
	        			<li onClick={this.change} key='index'>
				        	<img src={item.img}  alt='aaa' id='contentImg'></img>
			        		<p>{item.article}</p>
			        	</li>
        			</Link>)
        		})
        	}
        </ul>
      </div>
    )
  }
}

export default connect(
	function(state){
		return {
			save : state.save
	   }
	}
  
)(mine)