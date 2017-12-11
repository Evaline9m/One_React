import React from 'react'

import axios from 'axios'
import '../style/index.css'

class read extends React.Component {
	
	constructor(props) {
    super(props)
    this.state = {
      Img:'',
      content:"",
      maketime:'',
      author:'zuozhe',
      title:'title'
    }
  }
  
  componentDidMount() {
  	
	axios.get("/api/hp/idlist/0")
    .then(res => {

      axios.get(`http://v3.wufazhuce.com:8000/api/hp/detail/`+res.data.data[0])
	    .then(res => {
			this.setState({
				Img : res.data.data.hp_img_original_url,
				content : res.data.data.hp_content,
				maketime : res.data.data.maketime,
				title : res.data.data.hp_title,
				author : res.data.data.hp_author
			});
	    });
    });
  }
  
  render() {
    return (
    	
      <div className='index'>
     
        <div id='index_content'>
        
	       	<div id='index_contentImg'>
	       		<img src={this.state.Img} alt='aaa'/>
	       	</div>
	       	
	       	<div id='index_contentText'>
		       	<div>
			       	<span>{this.state.title}</span>
			       	<span>{this.state.author}</span>
		       	</div>
		       	
		       	<div>
			       	<span>{this.state.content}</span>
		       	</div>
		       	
		       	<div>
			       	<span>{this.state.maketime}</span>
		       	</div>
	       	</div>
	    </div>
      </div>
    )
  }
}

export default read