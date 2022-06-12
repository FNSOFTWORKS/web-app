import React from "react";
//Styles
import {Container} from "../styled/register.styled";
//Utils
import Form from "../components/form";

const Register = () => {
    return (
        <Container>
            <div className="row">
                <div className="col">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-xl-8">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body">
                                        <Form url={'http://localhost:8000/api/auth/register'} type={0}/>
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

export default Register;