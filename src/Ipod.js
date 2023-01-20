import React, { Component } from 'react';
import Screen from './Screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBackward, faForward, faPlay, faPause ,faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import music from './assets/music/Despacito.mp3'


import ZingTouch from 'zingtouch'
class Ipod extends Component {
    constructor() {
        super();
        //as constructor is firstone called loading states here
        this.state = {
            activeItem: 'NowPlaying',
            activePage: 'Home',
            enter: 0,
            play: true
        }

    
    }

    //below function defines the rotate gesture to change options by using zingtouch
    rotateWheel = () => {

        var containerElement = document.getElementById('inner-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
        
        //will use change variable to be breakpoint for change menu because zingtouch event emitted is in decimal and hard to track
        if(self.state.enter < 2){
            activeRegion.bind(containerElement, 'rotate', function(event){
                //The change of angle between the last position and the current position.
                // Positive denotes a counter-clockwise motion, while negative denotes a clockwise motion
                var angleChange = event.detail.distanceFromLast;
                // var angDistance = event.detail.distanceFromOrigin
        
                if(angleChange < 0){
                    
                    change++;
                    if(change === 15){
                       
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }else{
                  
                    change++;
                    if(change === 15){
                        
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }
                }
                );
        }else{
            console.log("click, hold and rotate ")
        }
        
    }

    //to enter to sub page
    changePage = () => {

        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : this.state.activeItem
            })
        }else if(this.state.activeItem === 'NowPlaying'){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'MyMusic'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }
        
        
    }
//on click of menu button open the homescreen
    changePageToHomeScreen = () => {

        if(this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists'){
            this.setState({
                activeItem : 'Music',
                activePage : 'Home'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'Home'
            })
        }
        
    }

    //toggle audio b/w play &pause
    toggle = () =>{
       
        if(this.state.activePage === 'MyMusic'){
            if(this.state.play === true){
               
                this.state.music.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.music.play();
                this.setState({
                    play : true
                })
            }
            console.log("toggled")
        }
    }

    componentDidMount(){
        let music = document.getElementsByClassName("audio-element")[0];
        this.setState({
            music : music,
        })
    
    }
    
render(){
    return (
        <div style={styles.ipodContainer}>

            <audio className="audio-element">
                <source src={music}></source>
            </audio>

            <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} music={this.state.music} />

            <div id='inner-container' style={styles.wheel} onMouseOver={this.rotateWheel}>
                <div style={styles.buttonContainer}>
                    <div style={styles.menuButton}>
                        
                        <FontAwesomeIcon onClick={this.changePageToHomeScreen} style={styles.image} icon={faBars} />

                    </div>

                </div>
                <div style={styles.buttonContainer}>
                    <div style={styles.middleButtons}>


                        <FontAwesomeIcon style={styles.image} icon={faBackward} />
                        <div onClick={this.changePage} style={{ backgroundImage: 'linear-gradient(45deg, #8c8181, transparent)', width: '5rem', height: '5rem', borderRadius: '50%' }}></div>

                        <FontAwesomeIcon style={styles.image} icon={faForward} />

                    </div>
                </div>
                <div style={styles.buttonContainer}>
                    <div onClick={this.toggle} style={styles.playButton}>
                        <FontAwesomeIcon onClick={this.toggle} style={styles.image} icon={faPlay} />
                        <FontAwesomeIcon onClick={this.toggle} style={styles.image} icon={faPause} />
                    </div>
                </div>
            </div>
        </div>
    );
}
    
}

const styles = {
    ipodContainer: {
        height: '33rem',
        width: '20rem',
        backgroundColor: 'lightGrey',
        margin: '4rem auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderRadius: '24px'

    },
    wheel: {
        width: '75%',
        height: '40%',
        margin: '1rem auto',
        backgroundColor: 'ghostwhite',
        borderRadius: '48%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: '85%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuButton: {
        alignSelf: 'center'
    },
    playButton: {
        alignSelf: 'center'
    },
    middleButtons: {
        alignSelf: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        alignSelf: 'center',
        fontSize: '1rem',

    },
}

export default Ipod;