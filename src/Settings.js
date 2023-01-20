import React from 'react';

class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >

                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img alt='battery' style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/3103/3103446.png"></img>
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'column' , justifyContent: 'center'}}>
                    <p>Settings</p>
                    <img alt='settings' style={styles.image} src="https://images.unsplash.com/photo-1526897515823-424cd784315f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2V0dGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </div>
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'95%',
        height:'65%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
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

export default Settings;