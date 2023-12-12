import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const CrudAction = (props) => {
    const {
        onEditClick,
        onDeleteClick,
    } = props
    return (
        <div>
            {
                onEditClick !== undefined && (
                    <button
                        type="button"
                        className="btn btn-warning me-2"
                        onClick={onEditClick}
                    >
                        <FontAwesomeIcon icon={faEdit} />
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
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                )
            }
        </div>
    )
}

export default CrudAction