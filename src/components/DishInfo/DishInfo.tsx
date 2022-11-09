import React, {FC, useEffect, useState} from 'react';
import RecipeStep from './RecipeStep/RecipeStep';
import styles from './styles.module.scss'
import Pagination from "../Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {setExtraSubArray, setLoading} from "../../redux/reducers/randomSlice";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

export interface DishInfoProps {
    dishObject: {
        title: string,
        image: string,
        analyzedInstructions: any[]
    }
}

const DishInfo: FC<DishInfoProps> = ({dishObject}) => {
    // console.log(dishObject)
    // console.log(dishObject.image)
    /* if (!dishObject) {
         return <div>Loading</div>
     }*/
    /*console.log(dishObject.analyzedInstructions[0].steps[0].ingredients[0].image)
    const ingrTest1 = dishObject.analyzedInstructions[0].steps[0].ingredients[0].image
    let ar2: any
    const ar1 = dishObject.analyzedInstructions.map(analyz => ar2 = analyz)
    if (ar2.length >0) {

    }*/

    //  console.log(ingrTest1)
    const dispatch = useAppDispatch()
    const {currentPage, loading, extraSubArray, recipes} = useAppSelector(state => state.random)
  //  const [newSubArr, setNewSubArr] = useState<any[]>([])
    let a = [] as any
    let subarray = [] as any;

    const [flag, setFlag] = useState(true)

    const allRecipeStep = async () => {

        setFlag(true)
        console.log(dishObject.analyzedInstructions)
       if (dishObject.analyzedInstructions.length > 0) {
            dishObject.analyzedInstructions.map((stage) => {
                    //a.push(stage.steps)
                    // console.log(stage.steps.concat(stage.steps))
                    if (stage.steps.length > 0) {
                        stage.steps.map((step: any) => {
                            a.push(step)
                        })
                    }
                }
            )
            let size = 3; //размер подмассива
            for (let i = 0; i <Math.ceil(a.length/size); i++){
                console.log(a)

                subarray[i] = a.slice((i*size), (i*size) + size);
                await dispatch(setExtraSubArray(subarray[i]))
            }
           console.log(subarray)

           // console.log(newSubArr)
        }
       setFlag(false)



    }



    useEffect( () => {
        //dispatch(setLoading(true))
        allRecipeStep()
        console.log(extraSubArray)
       // dispatch(setLoading(false))
       // console.log(newSubArr)
      //  console.log(currentPage)
       // let i = currentPage - 1
      //  console.log(newSubArr[Number(i)])

    }, [dishObject.analyzedInstructions])


    /*if (loading) {
        return (
            <div>загрузка</div>
        )
    }*/

    if (!dishObject) {
        return <div>Something was wrong</div>
    }

    if (!(extraSubArray.length > 0)) {
        return <div>Click new recipe</div>
    }

    let stages = extraSubArray[currentPage-1].filter((obj: any) => {
        return obj.number === 1;
    })
    console.log(stages)

  // const [count, setCount] = useState<number>(0)
    let count = 1
    /*const changeCount = () => {
        setCount(count+1)
    }*/

    let isName = dishObject.analyzedInstructions[count].name ? dishObject.analyzedInstructions[count].name : '';
    console.log(dishObject.analyzedInstructions[count])
    console.log(isName)
    console.log(extraSubArray[currentPage-1])

    return (
        <div className={styles.dishWrapper}>
            <div className={styles.mainTitle}>{dishObject.title}</div>
            <img className={styles.mainImage} src={dishObject.image}/>
            {/*<h2>Recipe</h2>*/}
            <div className={styles.recipeBlock}>
                {/*{(dishObject.analyzedInstructions.length > 0 && dishObject.analyzedInstructions[0].steps.length >0) ?
                    dishObject.analyzedInstructions[0].steps.map((step: any) =>
                        <RecipeStep step={step} />
                    )

                    : <div>There is no recipe</div>
                }*/}
                {/*{
                    dishObject.analyzedInstructions.length > 0 && dishObject.analyzedInstructions.map((stage, index) =>
                        <div key={index} className={styles.stageTitle}>Stage{<p>{stage.name}</p>} {stage.steps.length > 0 ?
                            stage.steps.map((step: any) =>
                                <RecipeStep key={String(index) + String(step.number)} step={step}/>
                            )
                            : <div>There is no recipe</div>
                        }</div>
                    )
                }*/}



                {/*{
                    dishObject.analyzedInstructions.length > 0 && stages.length > 0 && dishObject.analyzedInstructions.map((stage, index) =>
                        <div key={index} className={styles.stageTitle}>
                           Stage{<p>{stage.name ? stage.name : 'Emptyyyyyyyyyyyyyyyyyyyyyyyyy'}</p>}

                        </div>
                    )
              }*/}

                { (!flag && extraSubArray.length > 0) ?
                    extraSubArray[currentPage-1].map((step: any, index: number) =>
                        <div key={index}>
                            {step.number === 1 && <div style={{fontSize: 40}}>Stage {dishObject.analyzedInstructions[index]?.name}</div>}
                            <RecipeStep key={String(index) + String(step.number)} step={step}/>
                        </div>
                    )
                    : <div>No one stage</div>
                }


                <Pagination totalPages={Math.ceil(extraSubArray.length/3)}/>

            </div>


        </div>
    );
};

export default DishInfo;

function setNewSubArr(subarray: any): any {
    throw new Error('Function not implemented.');
}
