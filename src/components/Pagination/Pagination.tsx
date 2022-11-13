import React, {FC, useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";


interface PaginationProps {
    totalPages: number,
    currentPage: number,
    dependency?: any,
    changePage: (e: number) => any
}

const Pagination:FC<PaginationProps> = ({totalPages, currentPage, dependency, changePage}) => {

    const dispatch = useAppDispatch()
   // const {extraSubArray} = useAppSelector(state => state.random)
    const [pages, setPages] = useState(1)

    useEffect(() => {
        if (dependency && dependency.length > 0) {
            setPages(Math.ceil(dependency.length))
        } else {
            setPages(totalPages)
        }


    }, [dependency, totalPages])

    return (
        <div>
            <ReactPaginate className={styles.root}
                           breakLabel="..."
                           nextLabel=">"
                           onPageChange={(e) => dispatch(changePage(e.selected + 1))}
                           pageRangeDisplayed={5}
                           pageCount={pages}
                           forcePage={currentPage-1}
                           previousLabel="<"
                           renderOnZeroPageCount={null || undefined}

            />
        </div>
    );
};

export default Pagination;