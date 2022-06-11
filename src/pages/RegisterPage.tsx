import React, {useState} from "react";
import axios from "axios";
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {UPDATE_USER, userState} from "../store"
import { type } from "os";

type Inputs = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
};

const Register = () => {
    const dispatch = useDispatch();

    const [_errors,_setErrors] = useState('');
    const [error,setError] = useState('');

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    
    const state = useSelector<userState,userState['userData']>(state=>state.userData);


    console.log("state", state);


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

                dispatch({type:UPDATE_USER,payload:appState})
                
                /*if(!localStorage.getItem("accessToken")){
                   
                }
                else {
            
                    dispatch({type:UPDATE_USER,payload:localStorage.getItem("accessToken")})
                }*/
               
                
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
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue="test" {...register("name")} />
        <input type="email" {...register("email", { required: true })} />
        <input type="password" {...register("password", { required: true })} />
        <input type="password" {...register("password_confirmation", { required: true })} />

        {/* errors will return when field validation fails  */}
        {errors.email && <span>This field is required</span>}
        {errors.password && <span>This field is required</span>}
        {errors.password_confirmation && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
      </div>
    )
}

export default Register;