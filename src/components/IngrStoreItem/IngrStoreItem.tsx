import React, {FC} from 'react';
import {useAppDispatch} from "../../hooks/reduxHooks";
import { removeItem } from '../../redux/reducers/ingredientsStoreSlice';
import styles from './styles.module.scss'

interface IngrStoreItemProps {
    name: string,
    id: number,
    image: string
}

const IngrStoreItem:FC<IngrStoreItemProps> = ({name, image, id}) => {

    const dispatch = useAppDispatch()

    return (
        <div className={styles.cart__item}>
            <div className={styles.cart__itemImg}>
                <img alt={'no'}
                     src={`https://spoonacular.com/cdn/ingredients_500x500/${image}`}/>
            </div>
            <div className={styles.cart__itemInfo}>
                <h3>{name}</h3>
            </div>
            <div className={styles.cart__itemRemove}>
                <div className={"button button--outline button--circle" + ' ' + styles.removeButton} onClick={() => dispatch(removeItem(id))}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E"></path>
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E"></path>
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default IngrStoreItem;