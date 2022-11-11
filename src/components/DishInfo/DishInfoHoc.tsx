import React, { FC } from 'react';
import DishInfo from "./DishInfo";

export interface DishInfoProps {
    dishObject: {
        title: string,
        image: string,
        analyzedInstructions: any[]
    }
}

const DishInfoHoc:FC<DishInfoProps> = ({dishObject}) => {
    return (
        <div>

            <DishInfo title={dishObject.title} image={dishObject.image} analyzedInstructions={dishObject.analyzedInstructions} />
        </div>
    );
};

export default DishInfoHoc;