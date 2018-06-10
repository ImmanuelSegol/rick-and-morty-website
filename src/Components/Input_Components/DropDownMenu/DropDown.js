import React from 'react';
import PropTypes from 'prop-types';
import style from './DropDown.css.js';

const DropDown = ({status,onChangeStatus,options}) => {
    return(
        <select value={status} style={style} onChange={(e) => onChangeStatus(e.target.value)}>
            {
                options.map(option => option === 'All' ? <option value=''>{option}</option> : <option value={option}>{option}</option>)
            }
        </select>
    );
}

DropDown.prototype = {
    status: PropTypes.string.isRequired,
    onChangeStatus: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}

export default DropDown;