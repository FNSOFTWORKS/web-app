import React from "react";

//Utils
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import usePersistedState from "../../utils/usePersistedState";

import {DefaultAppState} from "../../store/default.appState";
import blankAppState from "../../store/blank.appState"
import {useNavigate} from "react-router-dom";

enum Type {
    login,
    register,
    mail
}

type RegisterInputs = {
    name?: string,
    email: string,
    password: string,
    password_confirmation?: string
};

type LoginInputs = {
    email: string,
    password: string,
};

interface Props {
    url:string,
    type:Type
}

const Form:React.FC<Props> = ({url,type}) => {
    const navigate = useNavigate();
    const goToLoginPage = () => navigate('/');

    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterInputs>();


    const [appState, setAppState] = usePersistedState<DefaultAppState>('appState', blankAppState);

    const onSubmitRegister: SubmitHandler<RegisterInputs> = (data) => {
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

                    setAppState(appState);
                    goToLoginPage();
                    //alert('Kayıt Tamamlandı');
                }
                else {
                    //alert('Giriş Yapamadınız');
                }
            })
            .catch(error => {
                if(error.request){
                    let err = error.request;
                    alert(err.response)
                }
            });
    }


    return (
        <div>
            {type == 0 ?
                <form onSubmit={handleSubmit(onSubmitRegister)}>
                    <input type="text" defaultValue="test" {...register("name")} />
                    <input type="email" {...register("email", { required: true })} />
                    <input type="password" {...register("password", { required: true })} />
                    <input type="password" {...register("password_confirmation", { required: true })} />
                    <button className="btn btn-primary btn-block px-4" type="submit">
                        Register
                    </button>
                </form>
                :
                <form onSubmit={handleSubmit(onSubmitRegister)}>
                    <input type="email" {...register("email", { required: true })} />
                    <input type="password" {...register("password", { required: true })} />
                    <button className="btn btn-primary btn-block px-4" type="submit">
                        Login
                    </button>
                </form>
            }

        </div>
    )
}

export default Form;