import React from 'react';
import {style} from "./app.css.js";


import withState from './Wrapper/withState.js'; 

import Header from './Header/Header.js';
import DataZone from './DataZone/DataZone.js';
import ChangePage from './ChangePage/ChangePage.js';

const App = ({loadNextPage}) => {
    return (
      <div style={style.appWrapper}>
            <Header/>
            <DataZone/> 
            <ChangePage loadNext={loadNextPage}/>
      </div>
    );
}

export default withState(App);
