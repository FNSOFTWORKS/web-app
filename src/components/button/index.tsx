import React, {ButtonHTMLAttributes, MouseEventHandler, useState} from "react";
import {CircleButton} from "./styled";

enum Type {
    circle,
    rectangle,
}

interface Props {
    onClick:MouseEventHandler<HTMLButtonElement>
    className:string;
    type:Type;
}

const Button:React.FC<Props> = ({onClick, className, type}) => {

    return (
        <>
        {type == 0 ?
            <CircleButton
                className={className}
                onClick={onClick}
            >

            </CircleButton>
            :
            <>
            </>
        }
        </>
    )
}

export default Button;