import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {takeRecipes} from "../redux/reducers/testSlice";

const MainPage = () => {

    const {results} = useAppSelector(state => state.testSlice)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(takeRecipes())
    }, [])

    return (
        <div className={'contentContainer'}>
            {
                results.map(obj => (
                    <div key={obj.id}>
                        <h2>{obj.title}</h2>
                        <img src={obj.image}/>
                    </div>

                ))
            }

        </div>
    );
};

export default MainPage;