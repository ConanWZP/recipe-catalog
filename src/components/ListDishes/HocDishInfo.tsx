import React, {useEffect, useState} from 'react';
import DishInfo from "../DishInfo/DishInfo";
import {Link, NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {instanceRecipes} from "../../api/testApi";
import {clearExtraSubArray, setCurrentPage} from "../../redux/reducers/randomSlice";
import {useAppDispatch} from "../../hooks/reduxHooks";
import stylesHoc from './stylesHoc.module.scss'

const HocDishInfo = () => {

    const {id, name} = useParams()
    console.log(name)
    const [analyzedInstruction, setAnalyzedInstruction] = useState([])
    const [titleRec, setTitleRec] = useState('')
    const [imageRec, setImageRec] = useState('')
    const dispatch = useAppDispatch()
    console.log(useParams())
    console.log(useLocation())
    console.log(id)
    const recipeById = async () => {
        instanceRecipes.get<any>(`${id}/information`)
       /* await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=215c148e5b964cc884199c1bd0b79e5a`)*/
            .then(response => {
                const what = response.data
                setAnalyzedInstruction(what.analyzedInstructions)
                setTitleRec(what.title)
                setImageRec(what.image)
                console.log(what)
            })
    }

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setCurrentPage(1))
        recipeById()
    }, [])

    const BackToCat = () => {
        navigate(-1)
    }

    if (!(analyzedInstruction?.length > 0)) {
        return (
            <div className={stylesHoc.hocWrapper}>
                <div>There isn't recipe <i>😕</i></div>
                <button onClick={() => BackToCat()} className={`button button--outline button--add ${stylesHoc.buttonBack}`}><span>Back to {name}</span></button>
            </div>
        )
    }

    return (
        <div className={stylesHoc.hocWrapper}>
            <button onClick={() => BackToCat()} className={`button button--outline button--add ${stylesHoc.buttonBack}`}><span>Back to {name}</span></button>
            <DishInfo analyzedInstructions={analyzedInstruction} title={titleRec} image={imageRec} />
        </div>

    );
};

export default HocDishInfo;