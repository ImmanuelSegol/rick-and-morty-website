import React from 'react';

const StateContext = React.createContext(null);
const Consumer = StateContext.Consumer;
const Provider = StateContext.Provider;

export {
    StateContext,
    Consumer,
    Provider
}