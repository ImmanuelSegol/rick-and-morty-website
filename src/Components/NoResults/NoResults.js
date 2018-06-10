import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

import style from './NoResults.css.js';

function NoResults(props) {
    const{title}=props;
    return(
        <div style={style.root}>
            <FontAwesomeIcon icon={faSearch} style={style.icon}/>
            <h1>{title}</h1>
            </div>
    );
}

export default NoResults;