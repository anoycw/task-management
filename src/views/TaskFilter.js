import React from 'react'
import { Formik, Form } from 'formik';

const TaskFilter = ({ setFilteredData }) => {
    return (
        <Formik
            initialValues={{ taskStatus: "" }}

            onSubmit={(values, { setSubmitting }) => {
                // console.log('setSubmitting', values)
                setFilteredData(values)
            }}
        >
            {({ values, setFieldValue }) => (
                console.log('values', values),
                <Form>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-12 form-group'>
                            <label htmlFor="title">Task Status</label>


                            <select
                                name="taskStatus"
                                onChange={(e) => {
                                    setFieldValue("taskStatus", e?.target?.value)
                                }}
                                className="form-control"
                            >
                                <option value="" label="All">

                                </option>
                                <option value={false} label="Active">
                                </option>
                                <option value={true} label="Completed">

                                </option>


                            </select>

                        </div>

                        <div className='col-lg-2 col-sm-12 pt-4 form-group'>
                            <button type="submit" className='btn btn-success form-control' >Filter</button>
                        </div>
                    </div>



                </Form>
            )}
        </Formik>
    )
}

export default TaskFilter