import React, { useContext } from 'react';
import {Header} from "./styled";
import Button from "../button";

interface Props {
    swapTheme(): void;
}

const Navbar:React.FC<Props> = ({swapTheme}) => {

    return (
        <Header>
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="d-flex order-lg-2 m-lg-auto">
                        <Button className="fa fa-lightbulb-o" onClick={swapTheme} type={0}></Button>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default Navbar;