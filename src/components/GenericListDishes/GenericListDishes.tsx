import React, {FC} from 'react';
import stylesList from "../ListDishes/stylesList.module.scss";
import Skeleton from "../Skeleton/Skeleton";
import DishItem from "../ListDishes/DishItem";
import {TypeDishesObj} from "../../redux/reducers/typeSlice";
import {useAppSelector} from "../../hooks/reduxHooks";
import {StatusEnum} from "../../types/StatusEnum";
import {useLocation, useParams} from "react-router-dom";


interface GenericListDishesProps {
    name?: string,
    dishObject: TypeDishesObj,
    status: StatusEnum
}


const GenericListDishes: FC<GenericListDishesProps> = ({name, dishObject, status}) => {
    console.log(dishObject)
    //const {status} = useAppSelector(state => state.typeDish)

    const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index}/>)

    const location = useLocation()

    const items = dishObject.results.map(dish =>
        <DishItem key={dish.id} dish={dish} name={name} location={location.pathname}/>
    )

    return (
        <>
            {status === 'error' ?
                <div>Ошибка</div>
                :
                <div>
                    <span className={stylesList.mainTitle}>{name ? name[0].toUpperCase() + name.substring(1) : ''}</span>
                    <div className={stylesList.listItems}>
                        {status === 'loading' ?
                            skeleton
                            :  items
                        }
                    </div>
                </div>

            }
        </>
    );
};

export default GenericListDishes;