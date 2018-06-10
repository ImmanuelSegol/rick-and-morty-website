import React from 'react';
import {Consumer} from '../Wrapper/StateContext.js';

import style from './DataZone.css.js';

import NoResults from '../NoResults/NoResults';
import Card from '../Card/Card.js';

const DataZone = ({dataIsLoaded}) => {
    return(
        <Consumer>
            {
                ({data}) => { 
                return <div style={style}>
                        { data ? 
                                data.results.map((obj) => {
                                    return <Card 
                                    name={obj.name}
                                    profile={obj.image} 
                                    status={obj.status}
                                    species={obj.species}
                                    gender={obj.gender}
                                    origin={obj.origin.name}
                                    location={obj.location.name}
                                    />
                                }) : <NoResults title='Nothing was found'/>
                            }
                    </div>
                }
            }
        </Consumer>
    );
}


export default DataZone;
