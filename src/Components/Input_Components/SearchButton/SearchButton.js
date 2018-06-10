import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import './SearchButton.css';

const style ={
    fontSize: 40, 
    color: '#4CDEB1',
}

function SearchButton({onSearch}){
    return(
        <div className='searchButton'>
            <FontAwesomeIcon style={style} icon={faSearch} onClick={() => onSearch()}/>
        </div>
    );
}

SearchButton.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchButton;