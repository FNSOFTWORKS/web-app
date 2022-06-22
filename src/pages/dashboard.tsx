import React, { useContext } from "react";
import Navbar from "../components/navbar";

import usePersistedState from "../utils/usePersistedState";
import {ThemeProvider, DefaultTheme} from "styled-components";
import light from "../styled/theme/light";
import dark from "../styled/theme/dark";

import GlobalStyle from "../styled/global.styled"
import Sidebar from "../components/sidebar";

interface Props {
    children?: JSX.Element,
}
const Dashboard:React.FC<Props> = ({children}) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const swapTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="container-fluid">
                <GlobalStyle/>
                <Sidebar/>
                <Navbar swapTheme={swapTheme}/>
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Dashboard;