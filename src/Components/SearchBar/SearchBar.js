import React from 'react';
import {StateContext} from '../Wrapper/StateContext';

import style from './SearchBar.css.js';

import DropDown from '../Input_Components/DropDownMenu/DropDown.js';
import TextInput from '../Input_Components/TextInput/TextInput.js';
import SearchButton from '../Input_Components/SearchButton/SearchButton.js';


function SearchBar(){
    return(
        <StateContext.Consumer>
            {
                ({submitSearch,searchTerm,onChangeSearchTerm,status,onChangeStatus}) => 
                    <div style={style.inputZone}>
                        <SearchButton onSearch={submitSearch}/>
                        <TextInput value={searchTerm} func={onChangeSearchTerm} placeholder='Enter name of character'/>
                        <DropDown status={status} onChangeStatus={onChangeStatus} options={['Alive','Dead','unknown','All']}/>
                    </div>
            }
        </StateContext.Consumer>
    );
}

export default SearchBar;