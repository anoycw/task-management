import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from './TaskForm'
import * as Yup from 'yup';
import { addItask } from '../services/actions/taskActions';

const TaskAdd = () => {
    const dispatch = useDispatch()



    const TaskSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Task Title is Required'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Task Description is Required'),
        taskdate: Yup.string().required('Task Completion Date is Required'),
        taskTime: Yup.string().required('Task Completion Time is Required'),
    });


    return (

        <div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>

                </div>
                <div className='col-lg-6 col-sm-12'>

                    <Link to="/">
                        <button className='btn btn-success float-end' >
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
                        addItask(values)
                    )
                    // alert("hi...")
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