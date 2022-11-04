import React from 'react';
import './styles.scss';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import LayoutForOutlet from "./layout/LayoutForOutlet";
import CategoriesPage from "./pages/CategoriesPage";
import RandomPage from './pages/RandomPage';





const App = () => {

    const routes = [
        {path: '/',  element: <StartPage/>},
        {path: '/main', element: <MainPage/>},

    ]

    return (
        <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<LayoutForOutlet/>}>
                            <Route path={''} element={<MainPage/>}/>
                            <Route path={'categories'} element={<CategoriesPage/>}/>
                            <Route path={'random'} element={<RandomPage/>}/>
                        </Route>


                    </Routes>

        </BrowserRouter>
    )
};

export default App;