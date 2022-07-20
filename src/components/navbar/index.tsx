import React from "react";
import {Header, Nav} from "./styled";

interface Props {
    swapTheme(): void
    swapLanguage(): void
}

const Navbar:React.FC<Props> = ({swapTheme, swapLanguage}) => {
    return(
        <Header>
            <Nav>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="collapse item-collapse">
                        <ul className="item-center">
                            <li>
                                <a>
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a onClick={swapLanguage}>sadad</a>
                <button onClick={swapTheme}>Swap Theme</button>
            </Nav>

        </Header>
    )
}

export default Navbar;