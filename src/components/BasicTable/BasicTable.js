import React, { useState } from 'react'
import Pagination from '../Pagination/Pagination'

const BasicTable = (props) => {
    const {
        headers,
        children,
        total,
        currentPage,
        setCurrentPage,
        size,
        setSize
    } = props



    return (
        <>

            <table className="user-table align-items-center table table-striped table-hover text-center">
                <thead>
                    <tr>
                        {
                            headers !== undefined && headers?.map((header, headerIndex) => {
                                return (
                                    <th key={headerIndex}
                                        className="border-bottom"
                                        style={{ width: "100px", textAlign: "center" }}

                                    >
                                        {header?.label}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {!children ? (
                        <tr>
                            {" "}
                            <td colSpan={22} className="text-center">
                                <span className="fw-bold h6 color-orange">
                                    NO DATA FOUND
                                </span>
                            </td>{" "}
                        </tr>
                    ) : (
                        children
                    )}
                </tbody>


            </table>


            <Pagination
                total={total}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                size={size}
                setSize={setSize}

            />
        </>

    )
}

export default BasicTable