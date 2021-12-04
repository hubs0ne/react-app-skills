import React from 'react';
import { getPagesArray } from '../../../utils/posts';

const Pagination = ({ totalPages, page, setPage, visible=true }) => {
    const pagesArray = getPagesArray(totalPages)
    
    if (!visible) {
        return <div className="lastElement"></div>
    }

    return (
        <div className="page-wrapper">
            {pagesArray.map(p =>
                <span
                    className={p === page ? "page page-current" : "page"}
                    onClick={() => setPage(p)}
                    key={p}
                >{p}</span>)}
        </div>
    );
}

export default Pagination;
