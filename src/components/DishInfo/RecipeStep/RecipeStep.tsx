import React, {FC, useState} from 'react';
import styles from './styles.module.scss'
import nothing from './../../../assets/img/nothing.png'

interface RecipeStepProps {
    step: any
}

const RecipeStep: FC<RecipeStepProps> = ({step}) => {

    const [showed, setShowed] = useState(false)
    const [showen, setShowen] = useState('Текст')

    //console.log(step)

    const onChangeShowed = () => {
        setShowed(!showed)
        console.log(showed)
    }

    return (
        <div className={styles.step}>
            <div className={styles.stepTitle}>Step {step.number}: <p>{step.step}</p></div>
            {
                step.ingredients.length > 0 ?
                    <>
                        <div className={styles.stepSubtitle}>Required ingredients:</div>
                        <button className={'button button--outline button--add'} onClick={onChangeShowed}>
                            <span>{showed ? 'Hide' : 'Show'}</span></button>

                        {/*{
                showed &&
                <div>  {
                    step.ingredients.length > 0 ?
                        <div className={styles.ingredients}>
                            {step.ingredients.map((ingr: any) =>
                                <div className={styles.ingredientBlock}>
                                    <div className={styles.ingredientImage}>
                                        {ingr.image ?
                                            <img alt={'no'}
                                                 src={`https://spoonacular.com/cdn/ingredients_500x500/${ingr.image}`}/>
                                            : <img src={nothing}/>
                                        }
                                    </div>
                                    <div
                                        className={styles.ingredientTitle}>{ingr.name[0].toUpperCase() + ingr.name.substring(1)}</div>
                                </div>
                            )}
                        </div>
                        :
                        <div className={styles.ingredientEmpty}>No ingredients required</div>
                } </div>

            }*/}
                        <div className={`${styles.overlay} ${styles.animated} ${showed ? styles.show : ''}`}>

                            <div className={styles.ingredients}>
                                {step.ingredients.map((ingr: any) =>
                                    <div key={ingr.id} className={styles.ingredientBlock}>
                                        <div className={styles.ingredientImage}>
                                            {ingr.image ?
                                                <img alt={'no'}
                                                     src={`https://spoonacular.com/cdn/ingredients_500x500/${ingr.image}`}/>
                                                : <img src={nothing}/>
                                            }
                                        </div>
                                        <div className={styles.ingredientTitle}>{ingr.name[0].toUpperCase() + ingr.name.substring(1)}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                    : /*<div className={styles.ingredientEmpty}>No ingredients required</div>*/ null

            }


        </div>
    );
};

export default RecipeStep;