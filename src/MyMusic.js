import React from 'react';

class MyMusic extends React.Component{
    
    constructor(){
        super();
        this.state = {
            isMounted : true
        }
        
    }

   
    componentDidMount(){
        let self = this;
        self.props.audio.play();
        
        this.setState({
            isMounted:true
        })
        
            self.props.audio.addEventListener('timeupdate',function(){
               
                if(self.state.isMounted){
                    var pos = self.props.audio.currentTime/self.props.audio.duration;
                    self.updateTime();
                    let fill = document.getElementById("fill");
                  
                    if(fill !== null){
                        fill.style.width = pos*100 + "%";
                    }
                }
            })
            
        
    }


    updateTime = () =>{
       
        this.setState({
            music : this.props.audio
        })
    }

    componentWillUnmount(){
//when component deleted pause audio
        this.setState({
            isMounted:false
        })
        this.props.audio.pause()
        
        
    
    }
    
    //to format time to readable 
    formatTime=( time )=> {
        let minutes = Math.floor( time / 60 )
        let timeForSeconds = time - ( minutes * 60 ) // seconds without counted minutes 
        let seconds = Math.floor( timeForSeconds )
        let secondsReadable = seconds > 9 ? seconds : `0${seconds}` // To change 2:2 into 2:02
        return `${minutes}:${secondsReadable}`
      }

    render(){
         let audio = this.props.audio;
       
        return(
            <div style={styles.myMusicContainer}>
                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img alt='battery' style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/3103/3103446.png"></img>
                </div>

                <div style={styles.info}>
                    <img alt='img' style={styles.image} src="https://images.unsplash.com/photo-1589961393579-f6c707fb9ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8anVzdGluJTIwYmllYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>Despacito</h4>
                        <p style={{marginBottom:'0'}}>By:  Artist name</p>
                        
                    </div>
                    
                </div>

                <div style={styles.statusBar}>
                    <p style={styles.currTime}>{audio !== null ? this.formatTime(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? this.formatTime(audio.duration) : '0 / 0'}</p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between',
        alignItems:'center'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}


export default MyMusic;