import React, {useEffect} from "react";
import axios from "axios";
import usePersistedState from "../../utils/usePersistedState";
import {DefaultAppState} from "../../store/default.appState";
import blankAppState from "../../store/blank.appState";
import Dashboard from "../dashboard";
import Content from "../../components/content/index"
const Index = () => {
    const [appState] = usePersistedState<DefaultAppState>('appState', blankAppState);

    /*useEffect(()=> {
        axios.get('http://localhost:8000/api/language',{
            headers:{
                Authorization: 'Bearer ' + appState.user.access_token
            }
        }).then((res) => {
                console.log(res)
        }).catch(e => console.log(e))

    },[])*/
    return(
        <>
            <Dashboard>
                <Content url={"http://localhost:8000/admin/api/language"}/>
            </Dashboard>
        </>
    )
}

export default Index;