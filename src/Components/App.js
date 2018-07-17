import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {style} from "./app.css.js";


import withState from './Wrapper/withState.js'; 

import Header from './Header/Header.js';
import DataZone from './DataZone/DataZone.js';
import ChangePage from './ChangePage/ChangePage.js';

const App = ({loadNextPage}) => {
    return (
    <Provider store={store}>
        <div style={style.appWrapper}>
              <Header/>
              <DataZone/> 
              <ChangePage loadNext={loadNextPage}/>
        </div>
    </Provider>
    );
}

export default withState(App);
