import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import TaskForm from './TaskForm'
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import { updateTask } from '../services/actions/taskActions';

const TaskEdit = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const indexNumber = location?.pathname?.split("/")[2];

  const paramsData = () => {
    let x = {};
    if (location.search) {
      let searhData = location.search;
      let newSearchData = searhData.slice(1).split("&");
      newSearchData.forEach((item) => {
        let splitedData = item.split("=");
        x = { ...x, [splitedData[0]]: splitedData[1]?.replace(/\%20/g, ' ') };
      });
      return x;
    } else return undefined;
  }

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
          <span className='color-orange h5 fw-bold'>
            Update Task
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
          title: paramsData()?.title || "",
          description: paramsData()?.description || "",
          taskdate: paramsData()?.taskDate || "",
          taskTime: paramsData()?.taskTime || "",
          taskStatus: false,
        }}
        enableReinitialize={true}
        validationSchema={TaskSchema}
        onSubmit={(values) => {
          dispatch(
            updateTask(values, indexNumber)
          )
          navigate('/')
        }}
      >
        {(props) => {
          return (
            <TaskForm
              {...props}
              formType="edit"
            />

          );
        }}
      </Formik>
    </div>
  )
}

export default TaskEdit