import React from 'react';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MyMusic from './MyMusic';
import Artists from './Artists';

export default function Screen(props) {

    //depending on the props render component
const renderSwitch = (prop) =>{

    switch (prop.activePage) {
        case 'Home':
            return <Home activeItem={prop.activeItem}/>
            
        case 'Music':
            return <Music activeItem={prop.activeItem}/>
            
        case 'Games':
            return <Games />
            
        case 'Settings':
            return <Settings /> 
            
        case 'MyMusic':
            return <MyMusic audio={prop.music} />
            
        case 'Artists':
            return <Artists />
            
    
        default:
            return null
    }
}

  return (
    <div style={styles.screen} id='screen-container'>
        {renderSwitch(props)}
    </div>
  );

  
}
const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'white',
        border : '2px solid black',
        marginTop : '1rem'
    }
}
