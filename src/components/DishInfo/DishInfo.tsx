import React, {FC} from 'react';
import RecipeStep from './RecipeStep/RecipeStep';
import styles from './styles.module.scss'

export interface DishInfoProps {
    dishObject: {
        title: string,
        image: string,
        analyzedInstructions: any[]
    }
}

const DishInfo: FC<DishInfoProps> = ({dishObject}) => {

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
    return (
        <div className={styles.dishWrapper}>
            <div>{dishObject.title}</div>
            <img width={600} src={dishObject.image}/>
            {(dishObject.analyzedInstructions.length > 0 && dishObject.analyzedInstructions[0].steps.length >0) ?
                dishObject.analyzedInstructions[0].steps.map((step: any) =>
                    <RecipeStep step={step} />
                )

                : <div>There is no recipe</div>
            }

        </div>
    );
};

export default DishInfo;