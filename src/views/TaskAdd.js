import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import TaskForm from './TaskForm'
import * as Yup from 'yup';
import { addTask } from '../services/actions/taskActions';

const TaskAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const TaskSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(100, 'Too Long!')
            .required('Task Title is Required'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(250, 'Too Long!')
            .required('Task Description is Required'),
        taskdate: Yup.string().required('Task Completion Date is Required'),
        taskTime: Yup.string().required('Task Completion Time is Required'),
    });


    return (

        <div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <span className='color-orange h5 fw-bold'>
                        Create New Task
                    </span>
                </div>
                <div className='col-lg-6 col-sm-12'>

                    <Link to="/">
                        <button className='btn btn-style-one float-end' >
                            Task List
                        </button>
                    </Link>

                </div>
            </div>
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    taskdate: "",
                    taskTime: "",
                    taskStatus: false,
                }}
                enableReinitialize={true}
                validationSchema={TaskSchema}
                onSubmit={(values) => {
                    dispatch(
                        addTask(values)
                    )
                    navigate('/')
                }}
            >
                {(props) => {
                    return (
                        <TaskForm
                            {...props}
                            formType="add"
                        />

                    );
                }}
            </Formik>
        </div>
    )
}

export default TaskAdd