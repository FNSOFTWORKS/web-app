import React from "react";
import {Container, Header} from "./index.styled";
import Form from "../form";

interface Props {
    url?:any;
}

const Content:React.FC<Props> = ({url}) => {
    return (
        <Container>
            <Header>
                <h4>Languages</h4>
            </Header>
            <Form url={url} type={2}/>
        </Container>
    )
}

export default Content;