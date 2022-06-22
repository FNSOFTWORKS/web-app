import React from "react";

interface Props {
    className?:string,
    type:string,
    placeholder:string,
    name:string,
    required:boolean,
}

const Input:React.FC<Props> = (
    {
        className ="form-control mb-4",
        type,
        placeholder,
        name,
        required}) => {
    return (
        <input
            autoComplete="off"
            type={type}
            className={className}
            placeholder={placeholder}
            name={name}
            required={required}

        />
    )
}

export default Input;
