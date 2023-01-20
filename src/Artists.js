import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMusic } from '@fortawesome/free-solid-svg-icons'

class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>

                 <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img alt='battery' style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/3103/3103446.png"></img>
                    </div>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>
                    
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}> IPod.js <FontAwesomeIcon icon={faMusic}/></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made by : Manraj Singh</p>
                    </div>
                    
                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thanks for visiting the app !!</h5>
                </div>
            </div>
        );
    }
    
}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url('data:image/jpeg;base64,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')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
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

export default Artists;