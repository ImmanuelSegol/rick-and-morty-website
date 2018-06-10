import React from 'react';
import PropTypes from 'prop-types';

import style from './TextInput.css.js';

function TextInput({placeholder,value,func}){
    return(
        <input 
            style={style} 
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => func(e.target.value)}
        />
    );
}

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
}
export default TextInput;