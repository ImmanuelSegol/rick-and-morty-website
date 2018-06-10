import React from 'react';
import PropTypes from 'prop-types';

import cardstyle from './Card.css.js';
import Logo from '../Logo/Logo.js';
//Can be improved by makeing the card more moduler.
//TODO: 1.make local style 

const Card = (props) => {
    const {profile,name,status,species,gender,origin,location} = props;
    return(
        <div style={cardstyle.card}>
        <Logo logo={profile} alt={name} style={cardstyle.cardImg}/>
        <span style={cardstyle.cardName}>{name}</span>
            <ul style={cardstyle.cardInfo}>
                <li style={cardstyle.infoItem}>
                <span>STATUS</span>
                <span>{status}</span>
                </li>
                <li style={cardstyle.infoItem}>
                <span>SPECIES</span>
                <span>{species}</span>
                </li>
                <li style={cardstyle.infoItem}>
                <span>GENDER</span>
                <span>{gender}</span>
                </li>
                <li style={cardstyle.infoItem}>
                <span>ORIGIN</span>
                <span>{origin}</span>
                </li>
                <li style={cardstyle.infoItem}>
                    <span>LAST LOCATION</span>
                    <span>{location}</span>
                </li>
            </ul>
      </div>
    );
}

Card.propTypes = {
    style: PropTypes.object.isRequired,
    profile: PropTypes.any.isRequired,
};

export default Card;