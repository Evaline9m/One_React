import React from 'react'
import axios from 'axios';
class readDetailed extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      main:'',
	      article:''
	    }
	}
	
    componentDidMount() {
    	
    	const filterContent = (string) => string.replace(/[\r\n]/g, "").replace(/<.*?>/g, "\n")
    	
		axios.get("http://v3.wufazhuce.com:8000/api/essay/"+this.props.params.id)
	    .then(res => {
	       	this.setState({
				article : filterContent(res.data.data.hp_content),
				main : res.data.data
			});
			console.log(this.state.main)
    	});
	}

    render() {
        return (
            <div id='readDetailed'>
           	  <div id='title'>
			    <text id='author'>{this.state.main.auth_it}</text>
			  </div>
			
			  <div id='content'>
			      <div id='article_title'>{this.state.main.hp_title}</div>
			      <div id='article_content'>{this.state.article}</div>
			  </div>
            </div>
        )
    }
}

export default readDetailed
