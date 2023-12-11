import React from 'react'

const CrudAction = (props) => {
    const {
        onEditClick,
        onDeleteClick,
    } = props
    return (
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            {
                onEditClick !== undefined && (
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={onEditClick}
                    >
                        Edit
                    </button>
                )
            }
            {
                onDeleteClick !== undefined && (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onDeleteClick}
                    >
                        Delete
                    </button>
                )
            }
        </div>
    )
}

export default CrudAction