import React from 'react';
const style = {
    maxHeight: 300,
    maxWidth: 600,
    margin: 10,        
}

function Logo({logo}){
    return(
        <img src={logo} alt={'logo'} style={style}/>
    )
}

export default Logo;