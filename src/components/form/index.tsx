import React from "react";

//Utils
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import usePersistedState from "../../utils/usePersistedState";

import {DefaultAppState} from "../../store/default.appState";
import blankAppState from "../../store/blank.appState"

type Inputs = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
};

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const [appState, setAppState] = usePersistedState<DefaultAppState>('appState', blankAppState);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        axios.post('http://localhost:8000/api/auth/register', {...data})
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" defaultValue="test" {...register("name")} />
            <input type="email" {...register("email", { required: true })} />
            <input type="password" {...register("password", { required: true })} />
            <input type="password" {...register("password_confirmation", { required: true })} />

            {/* errors will return when field validation fails  */}
            <button className="btn btn-primary btn-block px-4" type="submit">Register</button>
        </form>
    )
}

export default Form;