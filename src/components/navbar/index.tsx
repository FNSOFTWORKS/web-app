import React, { useContext } from 'react';
import {Container} from "./styled";
import { ThemeContext } from 'styled-components';

interface Props {
    swapTheme(): void;
}

const Navbar:React.FC<Props> = ({swapTheme}) => {

    return (
        <Container>
            <div>
                <button
                    onClick={swapTheme}
                >

                </button>
            </div>
        </Container>
    )
}

export default Navbar;