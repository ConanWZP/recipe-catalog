import React, {useEffect, useState} from 'react';
import DishInfo from "../DishInfo/DishInfo";
import {useParams} from "react-router-dom";
import axios from "axios";
import {instanceRecipes} from "../../api/testApi";
import {clearExtraSubArray, setCurrentPage} from "../../redux/reducers/randomSlice";
import {useAppDispatch} from "../../hooks/reduxHooks";

const HocDishInfo = () => {

    const {id} = useParams()
    const [analyzedInstruction, setAnalyzedInstruction] = useState([])
    const [titleRec, setTitleRec] = useState('')
    const [imageRec, setImageRec] = useState('')
    const dispatch = useAppDispatch()

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



    useEffect(() => {
        dispatch(setCurrentPage(1))
        recipeById()
    }, [])

    if (!(analyzedInstruction?.length > 0)) {
        return <div>Грузимся</div>
    }

    return (
        <div>
            <DishInfo analyzedInstructions={analyzedInstruction} title={titleRec} image={imageRec} />
        </div>

    );
};

export default HocDishInfo;