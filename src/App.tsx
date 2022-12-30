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
import ListDishes from "./components/ListDishes/ListDishes";
import DishInfo from "./components/DishInfo/DishInfo";
import HocDishInfo from "./components/ListDishes/HocDishInfo";
import SearchIngredientsPage from './pages/SearchIngredientsPage';
import IngredientStorePage from "./pages/IngredientStorePage";
import LayoutForStore from "./layout/LayoutForStore";
import RecipesByIngredients from "./pages/RecipesByIngredients";






const App = () => {

    /*const routes = [
        {path: '/',  element: <StartPage/>},
        {path: '/main', element: <MainPage/>},

    ]*/

    return (
        <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<LayoutForOutlet/>}>
                            {/*<Route path={''} element={<MainPage/>}/>*/}
                            <Route path={''} element={<CategoriesPage/>}/>
                            <Route path={'categories'} element={<CategoriesPage/>}/>
                            <Route path={'random'} element={<RandomPage/>}/>
                            <Route path={'categories/:name'} element={<ListDishes/>} />
                            <Route path={'categories/:name/:id'} element={<HocDishInfo/>} />
                            <Route path={'searchIngredients'} element={<SearchIngredientsPage />} />
                            <Route path={'recipesByIngredients'} element={<RecipesByIngredients />} />
                            <Route path={'recipesByIngredients/:id'} element={<HocDishInfo/>} />
                        </Route>
                        <Route path={'/ingredientStore'} element={<LayoutForStore/>}>
                            <Route path={'/ingredientStore'} element={<IngredientStorePage/>} />
                        </Route>


                    </Routes>

        </BrowserRouter>
    )
};

export default App;