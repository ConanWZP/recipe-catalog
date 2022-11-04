import React, {FC} from 'react';

interface RecipeStepProps {
    step: any
}

const RecipeStep: FC<RecipeStepProps> = ({step}) => {
    console.log(step)
    return (
        <div>
            {/*{ step.ingredients.length >0 ?
                step.ingridients.map((ingr: any) => <div><img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingr.image}`}/></div>

                :

                <div>Empty</div>
            )}*/}

            {step.ingredients.length > 0 ?
                step.ingredients.map((ingr: any) =>
                    <div>
                        {ingr.image ?
                            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingr.image}`}/>
                            : <div>There isn't ingr</div>
                        }

                    </div>)
            :
                <div></div>
            }


        </div>
    );
};

export default RecipeStep;