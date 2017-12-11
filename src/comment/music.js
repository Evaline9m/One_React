import React from 'react'

import '../style/music.css'
import axios from 'axios'
class read extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      main:'',
      time:''
    }
  }
  
  componentDidMount() {
  	
	  const formatMakettime = (dateString) => {return (new Date(dateString)).toString().split(' ', 4).slice(1, 4).join(' ')}
	  	
		axios.get("http://v3.wufazhuce.com:8000/api/music/idlist/0")
	    .then(res => {
	
	      axios.get(`http://v3.wufazhuce.com:8000/api/music/detal/`+res.data.data[0])
		    .then(res => {
					this.setState({
						main : res.data.data,
						time : formatMakettime(res.data.data.maketime)
					})
					
					console.log(this.state.main);
		    });
	    });
  }
  
  render() {
    return (
	      <div id='music'>
          <div id='fixed'>
            <img src={this.state.main.cover} alt='aaa'></img> 
            <div id='absolute'>
            <audio poster='http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000' src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46" id="myAudio" controls loop></audio>
              <div id='left'>
                <img src='http://image.wufazhuce.com/FjSCn2zrwoeJc4dYTp9x971YmbAv' alt='aaa'></img> 
                <text id='author_name'>user_name</text>
                <text>desc</text>
              </div>
              <div id='right'>
                <img src='../resources/music_play.png'  alt='aaa'></img>
                <img src='../resources/audio_pause.png'  alt='aaa'></img>
                <text>{this.state.time}</text>
              </div>
            </div>
          </div>

          <div id='change'>
            <import src="./template/change.wxml"/>
            <template is="change" data='{{type,item,story,index}}'/>
          </div>
      </div>
    )
  }
}

export default read