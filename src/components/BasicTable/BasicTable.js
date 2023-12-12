import React from 'react'

const BasicTable = (props) => {
    const {
        headers,
        children
    } = props
    return (
        <table class="user-table align-items-center table table-striped table-hover text-center">
            <thead className='' >
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
    )
}

export default BasicTable