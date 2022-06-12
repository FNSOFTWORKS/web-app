import React, {Component} from 'react';
import { Navigate  } from 'react-router-dom';
import usePersistedState from "./utils/usePersistedState";
import {DefaultAppState} from "./store/default.appState";
import blankAppState from "./store/blank.appState";


interface PropType {
    component: React.FC;
}

const PrivateRoute:React.FC<PropType> = ({ component: Component }) => {
    const [appState] = usePersistedState<DefaultAppState>('appState', blankAppState);
    if (appState.isLoggedIn) return <Component />;
    return <Navigate to='/login' />;
};

export default PrivateRoute;
