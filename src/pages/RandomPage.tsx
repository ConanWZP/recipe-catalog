import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {getRandom, setExtraSubArray, setLoading} from "../redux/reducers/randomSlice";
import DishInfo from "../components/DishInfo/DishInfo";
import DishInfoHoc from "../components/DishInfo/DishInfoHoc";

const RandomPage = () => {
    const {recipes, loading} = useAppSelector(state => state.random)
    const dispatch = useAppDispatch()
  //  const [gotten, setGotten] = useState(false)

    const onClickRandom = async () => {
        dispatch(setLoading(true))
       await dispatch(getRandom())
        dispatch(setLoading(false))
       // console.log(recipes[0].title)
    }

   /* console.log(recipes)
    console.log((recipes.length > 0))*/

    return (
        <div className={'randomPageBlock'}>
           {/* <button onClick={onClickRandom}>Get random recipe</button>*/}
            <div className="buttonMain" onClick={onClickRandom}><span>Get random recipe</span></div>
            {
                loading && !(recipes.length > 0) ?
                    <div style={{fontSize: 40}}>Let's check the random</div>
                    :
                    <DishInfoHoc dishObject={recipes[0]} />
                    // <DishInfo dishObject={recipes[0]} />

            }
        </div>
    );
};

export default RandomPage;