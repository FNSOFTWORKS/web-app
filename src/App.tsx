import React, {Suspense} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import * as ROUTES from "../src/contants/routes";
import usePersistedState from "./utils/usePersistedState";
import {ThemeProvider, DefaultTheme} from "styled-components";
import light from "./styled/theme/light";
import dark from "./styled/theme/dark";
import {LanguageModel} from "./utils/language.model";
import defaultLanguage from "./utils/language.default";
import Navbar from "./components/navbar";
import BlogPage from "./pages/blog/index";

function App() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
    const [language, setLanguage] = usePersistedState<LanguageModel>('languageState', defaultLanguage)

    const swapTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    const swapLanguage = () => {
        const en = { code:1 }
        const tr = { code:2 }
        setLanguage(language.code === 1 ? tr : en )
    }

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Navbar swapTheme={swapTheme} swapLanguage={swapLanguage}/>
                <Routes>
                    <Route path={ROUTES.BLOG}  element={<BlogPage />}/>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
  );
}

export default App;
