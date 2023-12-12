import React from 'react'
import { Field, Form } from 'formik';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const TaskForm = ({ values, formType, errors, getFieldProps }) => {
    return (
        <Form>
            <div className='row'>
                <div className='col-lg-3 col-sm-12'></div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-12 col-sm-12 form-group'>
                            <label htmlFor="title">Task Title</label>
                            <Field id="title" name="title" placeholder="Enter Task Title" className="form-control" />
                            <ErrorMessage fieldName={errors?.title} />

                        </div>
                        <div className='col-lg-12 col-sm-12 form-group pt-2'>
                            <label htmlFor="taskdate">Task Date</label>
                            <Field id="taskdate" name="taskdate" type="date" className="form-control" />
                            <ErrorMessage fieldName={errors?.taskdate} />
                        </div>

                        <div className='col-lg-12 col-sm-12 form-group pt-2'>
                            <label htmlFor="taskTime">Task Time</label>
                            <Field id="taskTime" name="taskTime" type="time" className="form-control" />
                            <ErrorMessage fieldName={errors?.taskTime} />

                        </div>

                        <div className='col-lg-12 col-sm-12 form-group pt-2'>
                            <label htmlFor="description">Task Description</label>
                            <textarea
                                {...getFieldProps('description')}
                                id="description"
                                name="description"
                                rows="4"
                                style={{ width: "100%" }}>
                            </textarea>
                            <ErrorMessage fieldName={errors?.description} />
                        </div>
                        <div className='col-lg-2 col-sm-12 form-group'>


                        </div>
                        <div className='col-lg-8 col-sm-12 pt-2 form-group'>
                            <button type="submit" className='btn btn-success form-control' >{formType === 'add' ? "Save Task" : "Update Task"} </button>

                        </div>
                        <div className='col-lg-2 col-sm-12 form-group'>


                        </div>
                    </div>


                </div>
                <div className='col-lg-3 col-sm-12'></div>

            </div>
        </Form>
    )
}

export default TaskForm