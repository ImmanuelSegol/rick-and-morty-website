import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

import nextPageStyle from './NextPage.css.js';

function NextPage(props){
    const {back,loadNext} = props;
    return(
        <div style={nextPageStyle} onClick={() => loadNext(back)}>
            {
                back ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight}/>
            }
        </div>
    );
}

NextPage.propTypes = {
    back: PropTypes.bool.isRequired,
}

export default NextPage;