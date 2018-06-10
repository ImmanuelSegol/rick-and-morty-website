import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const url = 'https://rickandmortyapi.com/api/character';

ReactDOM.render(<App url={url}/>, document.getElementById('root'));
registerServiceWorker();

if(module.hot){
    module.hot.accept();
}
