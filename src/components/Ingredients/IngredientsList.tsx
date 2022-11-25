import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss'
import nothing from "../../assets/img/nothing.png";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {addItem, removeItem, typeIngredientObject} from "../../redux/reducers/ingredientsStoreSlice";

interface IngredientsList {
    name: string,
    image: string,
    id: number

}

const IngredientsList: FC<IngredientsList> = ({name, image, id}) => {

    const dispatch = useAppDispatch()
    const {items} = useAppSelector(state => state.ingredientsStore)
   // const {} = useAppSelector(state => state.ingredientsStore)
    const [inStore, setInStore] = useState(false)
    useEffect(() => {
        const findStoreItem = items.find(i => i.id === id)
        if (findStoreItem) {
            setInStore(true)
        }
    }, [])

    const addItemOnClick = () => {
        console.log('add')
        const ingrObject = {
            name,
            image,
            id
        }
        dispatch(addItem(ingrObject))
        setInStore(true)
    }

    const removeItemOnClick = () => {
        dispatch(removeItem(id))
        setInStore(false)
    }

    return (
        <div className={styles.block}>
            <div className={styles.ingredientImage}>
                {image ?
                    <img alt={'no'}
                         src={`https://spoonacular.com/cdn/ingredients_500x500/${image}`}/>
                    : <img src={nothing}/>
                }
            </div>
            <div className={styles.title} onClick={() => addItemOnClick()}>{name}</div>
            <div>
                {
                    inStore ?
                        <button className={'button button--outline button--add'} onClick={removeItemOnClick}>
                            <span>Remove from the store</span></button>

                        :
                        <button className={'button button--outline button--add'} onClick={() => addItemOnClick()}>
                            <span>Add to the store</span></button>

                }

            </div>
        </div>
    );
};

export default IngredientsList;