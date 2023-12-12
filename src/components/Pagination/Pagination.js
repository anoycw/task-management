import React from 'react'

const Pagination = (props) => {
    const {
        total,
        currentPage,
        onPageChange,
        size,
        setSize
    } = props;


    return (
        <>
            <nav className="Page navigation example d-flex flex-row justify-content-between">
                <ul className="pagination justify-content-start w-50">

                    <li className={currentPage == 1 ? "page-item  disabled" : "page-item "}>
                        <a className="page-link" onClick={() => onPageChange(currentPage - 1)} tabindex="-1">Previous</a>
                    </li>
                    {
                        Array.from({ length: Math.ceil(total / size) }).map((item, index) => {
                            return (
                                <>
                                    <li className={`page-item ${currentPage == index + 1 ? "disabled" : ""}`}>
                                        <a className="page-link" onClick={() => onPageChange(index + 1)}>
                                            {index + 1}
                                        </a>
                                    </li>
                                </>
                            )
                        })
                    }

                    <li className={currentPage == Math.ceil(total / size) ? "page-item  disabled" : "page-item "}>
                        <a className="page-link" onClick={() => onPageChange(currentPage + 1)} >Next</a>
                    </li>
                </ul>

                <div className='color-orange'>Showing {size > total ? total : size} out of {total}</div>
            </nav>

        </>
    )
}

export default Pagination