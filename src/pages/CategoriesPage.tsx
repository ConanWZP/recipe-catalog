import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {getCategories} from "../redux/reducers/caregoriesSlice";
import {ICategory} from "../types/types";
import Categories from "../components/Categories/Categories";

const CategoriesPage = () => {

    const {categoriesList} = useAppSelector(state => state.categories)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
            <div className={'categoriesPage__items'}>
                {
                    categoriesList.map((cat: ICategory) =>
                        <Categories key={cat.name} name={cat.name} url={cat.url} />
                    )
                }
           {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem eligendi excepturi hic ratione totam velit voluptatum! Adipisci aspernatur dolore esse, excepturi mollitia numquam, odit omnis quasi veniam veritatis voluptatem!

            </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem eligendi excepturi hic ratione totam velit voluptatum! Adipisci aspernatur dolore esse, excepturi mollitia numquam, odit omnis quasi veniam veritatis voluptatem!

        </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem eligendi excepturi hic ratione totam velit voluptatum! Adipisci aspernatur dolore esse, excepturi mollitia numquam, odit omnis quasi veniam veritatis voluptatem!

        </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem eligendi excepturi hic ratione totam velit voluptatum! Adipisci aspernatur dolore esse, excepturi mollitia numquam, odit omnis quasi veniam veritatis voluptatem!

        </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem eligendi excepturi hic ratione totam velit voluptatum! Adipisci aspernatur dolore esse, excepturi mollitia numquam, odit omnis quasi veniam veritatis voluptatem!

        </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem eligendi excepturi hic ratione totam velit voluptatum! Adipisci aspernatur dolore esse, excepturi mollitia numquam, odit omnis quasi veniam veritatis voluptatem!

        </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem eligendi excepturi hic ratione totam velit voluptatum! Adipisci aspernatur dolore esse, excepturi mollitia numquam, odit omnis quasi veniam veritatis voluptatem!

        </p><p style={{paddingBottom: 200}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem eligendi excepturi hic ratione totam velit voluptatum! Adipisci aspernatur dolore esse, excepturi mollitia numquam, odit omnis quasi veniam veritatis voluptatem!

        </p>*/}
        </div>
    );
};

export default CategoriesPage;