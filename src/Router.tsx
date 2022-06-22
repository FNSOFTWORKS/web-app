import React, { Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider  } from 'react-redux';

import store from './store';

import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Login from './pages/login'
import LanguagesIndex from "./pages/languages/index";
import LanguagesCreate from "./pages/languages/create";

import PrivateRoute from "./PrivateRouter";

const Home = () => (
    <Suspense fallback="">
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<PrivateRoute component={Dashboard} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/languages' element={<PrivateRoute component={LanguagesIndex} />} />
                    <Route path='/languages/add' element={<PrivateRoute component={LanguagesCreate} />} />
                </Routes>
            </Provider>
        </Router>
    </Suspense>
);

export default Home;