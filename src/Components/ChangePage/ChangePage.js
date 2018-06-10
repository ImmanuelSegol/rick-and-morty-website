import React from 'react';
import PropTypes from 'prop-types';

import changePageStyle from './ChangePage.css.js';

import NextPage from './NextPage/NextPage.js';

function ChangePage(props){
    const {pageNumber,loadNext} = props;
    return(
        <div style={changePageStyle}>
            <NextPage back loadNext={loadNext} />
            {pageNumber}
            <NextPage loadNext={loadNext}/>
        </div>
    );
}


ChangePage.propTypes = {
    pageNumber: PropTypes.any.isRequired,
}

export default ChangePage;