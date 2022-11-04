import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {getRandom, setLoading} from "../redux/reducers/randomSlice";
import DishInfo from "../components/DishInfo/DishInfo";

const RandomPage = () => {
    const {recipes, loading} = useAppSelector(state => state.random)
    const dispatch = useAppDispatch()
  //  const [gotten, setGotten] = useState(false)

    const onClickRandom = async () => {
        dispatch(setLoading(true))
     await   dispatch(getRandom())
        dispatch(setLoading(false))
       // console.log(recipes[0].title)
    }

    return (
        <div className={'randomPageBlock'}>
           {/* <button onClick={onClickRandom}>Get random recipe</button>*/}
            <div className="button" onClick={onClickRandom}><span>Get random recipe</span></div>
            {
                loading ?
                    <div style={{fontSize: 40}}>Loading.....</div>
                    :
                    <DishInfo dishObject={recipes[0]} />

            }
        </div>
    );
};

export default RandomPage;