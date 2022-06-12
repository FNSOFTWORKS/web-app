import React, { useContext } from "react";
import Navbar from "../components/navbar";

import usePersistedState from "../utils/usePersistedState";
import {ThemeProvider, DefaultTheme} from "styled-components";
import light from "../styled/theme/light";
import dark from "../styled/theme/dark";

import GlobalStyle from "../styled/global.styled"


const Dashboard = () => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const swapTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <GlobalStyle/>
                <Navbar swapTheme={swapTheme}/>
            </div>
        </ThemeProvider>
    )
}

export default Dashboard;