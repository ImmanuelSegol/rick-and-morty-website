import React from 'react';

import style from './Header.css.js';
import mainLogo from '../../imges/Rick_and_Morty_logo.png';

import Logo from '../Logo/Logo.js';
import SearchBar from '../SearchBar/SearchBar.js';

const Header = () => {
    return(
        <div style={style.header}>
                <Logo logo={mainLogo}/>
                <SearchBar/>
        </div>

    );
}


export default Header;