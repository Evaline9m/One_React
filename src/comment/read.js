import React from 'react'
import {Link} from 'react-router'
import axios from 'axios';
import '../style/read.css'

class Index extends React.Component {

	constructor(props) {
	    super(props)
	    this.state = {
	      arr:[1,2,3]
	    }
	}

	componentDidMount() {
		axios.get("http://v3.wufazhuce.com:8000/api/reading/index")
	    .then(res => {
	       	this.setState({
				arr : res.data.data.essay
			});
			
    	});
    	
	}
  
  render() {
    return ( 
      	<div className='read'>
      		
        	<div className='swiper'>
	        	<img src='http://image.wufazhuce.com/FgUR18YWpOjS1p9t0ey_RxDSKzR3' alt='aaa'/>
	        </div>
       
	        <div className="articles-swiper">
			    <ul>
			     {
			        this.state.arr.map(function (item) {
			            return (
						      <li key={item.content_id}>
							      <Link activeClassName="active" to={"/readDetailed/"+item.content_id}>
							        <div className='title'>{item.hp_title}</div>
							        <div className='type'>阅读</div>
							        <div className='guide'>{item.guide_word}</div>
						          </Link>
						      </li>    
						 )})
	    		}     
			    </ul>
			</div>
      </div>
    )
  }
}

export default Index


