import React, {useEffect} from "react";
//Styles
import {Container} from "../styled/register.styled";
//Utils
import Form from "../components/form";

import usePersistedState from "../utils/usePersistedState";
import {DefaultAppState} from "../store/default.appState";
import blankAppState from "../store/blank.appState";

const Login = () => {
    const [appState] = usePersistedState<DefaultAppState>('appState', blankAppState);
    useEffect(() => {
        if (appState.user.access_token){
            window.location.href = "/";
        }
    })
    return (
        <Container>
            <div className="row">
                <div className="col">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-xl-8">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body">
                                        <Form url={'http://localhost:8000/api/auth/login'} type={1}/>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="">
                                        <h2>
                                            FNSOFTWORKS Content Management System
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login;