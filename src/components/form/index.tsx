import React, {useEffect} from "react";

//Utils
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import usePersistedState from "../../utils/usePersistedState";

import {DefaultAppState} from "../../store/default.appState";
import blankAppState from "../../store/blank.appState"
import {useNavigate} from "react-router-dom";
import Input from "./input";

enum Type {
    login,
    register,
    content
}

type Inputs = {
    name?: string,
    email?: string,
    password?: string,
    password_confirmation?: string
    code?: string;
};

interface Props {
    url:string,
    type:Type
}

const Form:React.FC<Props> = ({url,type}) => {
    const navigate = useNavigate();

    const goToDashboardPage = () => navigate('/');
    const goToLoginPage = () => navigate('/login');

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const [appState, setAppState] = usePersistedState<DefaultAppState>('appState', blankAppState);

    const onSubmitRegister: SubmitHandler<Inputs> = (data) => {
        axios.post(url, {...data})
            .then((res) => {
                if(res.data.success){
                    const userData = {
                        id:res.data.id,
                        name:res.data.name,
                        email:res.data.email,
                        access_token:res.data.access_token
                    };
                    const appState = {
                        isLoggedIn:true,
                        user:userData
                    };
                    console.log(appState);
                    setAppState(appState);
                    goToLoginPage();
                    alert('Kayıt Tamamlandı');
                }
                else {
                    alert('Giriş Yapamadınız');
                }
            })
            .catch(error => {
                if(error.request){
                    let err = error.request;
                    alert(err.response)
                }
            });
    }

    const onSubmitLogin: SubmitHandler<Inputs> = (data) => {
        axios.post(url, {...data})
            .then((res) => {
                if(res.data.success){
                    const userData = {
                        id:res.data.id,
                        name:res.data.name,
                        email:res.data.email,
                        access_token:res.data.access_token
                    };
                    const appState = {
                        isLoggedIn:true,
                        user:userData
                    };
                    console.log(appState);
                    setAppState(appState);
                    window.location.href = "/";
                    alert('Kayıt Tamamlandı');
                }
                else {
                    alert('Giriş Yapamadınız');
                }
            })
            .catch(error => {
                if(error.request){
                    let err = error.request;
                    alert(err.response)
                }
            });
    }

    const config = {
        headers:{
            'Accept':'application/json',
            'content-type':'multipart/form-data',
            'Authorization':'Bearer '+  appState.user.access_token
        }
    }

    const onSubmitLanguages: SubmitHandler<Inputs> = (data) => {
        axios.post(url,{...data},config).then((res) => {
            if (res.data.success){
                console.log("Ürün Eklendi");
                window.location.reload();
            }
        }).catch(e => console.log(data))
    }

    switch (type) {
        case Type.login:
            return (
                <form onSubmit={handleSubmit(onSubmitRegister)}>
                    <input type="text" defaultValue="test" {...register("name")} />
                    <input type="email" {...register("email", { required: true })} />
                    <input type="password" {...register("password", { required: true })} />
                    <input type="password" {...register("password_confirmation", { required: true })} />
                    <button className="btn btn-primary btn-block px-4" type="submit">
                        Register
                    </button>
                </form>
            )
        case Type.register:
            return (
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <input type="email" {...register("email", { required: true })} />
                    <input type="password" {...register("password", { required: true })} />
                    <button className="btn btn-primary btn-block px-4" type="submit">
                        Login
                    </button>
                </form>
            )
        case Type.content:
            return (
                <form onSubmit={handleSubmit(onSubmitLanguages)}>
                    <input type="name" {...register("name", { required: true })} />
                    <input type="code" {...register("code", { required: true })} />
                    <button className="btn btn-primary btn-block px-4" type="submit">
                        Login
                    </button>
                </form>
            )
        default:
            return (
                <>
                </>
            )
    }
}

export default Form;