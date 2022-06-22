import React from "react";
import {Container} from "./styled";

const Sidebar = () => {
    return (
        <Container>
            <ul className="side-menu">
                <li className="side-item">Main</li>
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li className="side-item">Settings</li>
                <li>
                    <a href="/languages">Languages</a>
                </li>
            </ul>
        </Container>
    )
}

export default Sidebar;