import React from 'react'
const ErrorMessage = ({ fieldName }) => {
    return (
        <>
            {fieldName !== undefined && fieldName !== null ? (
                <p className="text-danger mt-3 mb-0">{fieldName}</p>
            ) : (
                ""
            )}
        </>
    )
}

export default ErrorMessage