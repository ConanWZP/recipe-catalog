import React, {FC, useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import { setCurrentPage } from '../../redux/reducers/randomSlice';

interface PaginationProps {
    totalPages: number
}

const Pagination:FC<PaginationProps> = ({totalPages}) => {

    const dispatch = useAppDispatch()
    const {currentPage, extraSubArray} = useAppSelector(state => state.random)
    const [pages, setPages] = useState(1)

    useEffect(() => {
        setPages(Math.ceil(extraSubArray.length))
    }, [extraSubArray])

    return (
        <div>
            <ReactPaginate className={styles.root}
                           breakLabel="..."
                           nextLabel=">"
                           onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
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