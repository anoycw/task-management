import React, { useEffect, useState } from 'react'
import BasicTable from '../components/BasicTable/BasicTable'
import { Link, useNavigate } from "react-router-dom";
import CrudAction from '../components/CrudAction/CrudAction';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { removeTask, updateTask } from '../services/actions/taskActions';
import TaskFilter from './TaskFilter';
import moment from 'moment';

const TaskList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(1);
    const [size, setSize] = useState(3);
    const [total, setTotal] = useState(0)
    const [filteredData, setFilteredData] = useState(null);

    // Get Data from Redux Store
    const tasks = useSelector((state) => state.tasks);



    const tableProps = {
        headers: [
            { id: "check", label: "" },
            { id: "id", label: "#" },
            { id: "title", label: "Task Title" },
            { id: "description", label: "Description" },
            { id: "date", label: "Date - Time" },
            { id: "status", label: "Status" },
            { id: "actions", label: "Actions" },
        ],

    };


    const getFilteredData = () => {
        let tempTask = tasks?.filter((item) => {
            return !filteredData || filteredData?.taskStatus == '' || filteredData?.taskStatus == JSON.stringify(item?.taskStatus);
        })
        setCurrentPage(1)
        setTotal(tempTask?.length)
    }


    useEffect(() => {
        getFilteredData()
    }, [tasks, filteredData])

    return (
        <div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <div className="title">Task List</div>
                </div>
                <div className='col-lg-6 col-sm-12'>

                    <Link to="tasks">
                        <button className='btn btn-style-one float-end' >
                            Add New Task
                        </button>
                    </Link>

                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-sm-12 mb-10'>
                    <TaskFilter
                        setFilteredData={setFilteredData}
                    />
                </div>
            </div>

            <div className='table-responsive mt-3'>
                <BasicTable {...tableProps}
                    total={total}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    setSize={setSize}
                    size={size}

                >
                    {tasks !== undefined && tasks?.length > 0 && tasks?.reduce((pv, row, index) => {
                        if (!filteredData || filteredData?.taskStatus == '' || filteredData?.taskStatus == JSON.stringify(row?.taskStatus)) {
                            pv = [...pv,
                            < tr key={index} >
                                <td>
                                    <input checked={row?.taskStatus == true} type="checkbox" id="task" onClick={(e) => {
                                        dispatch(
                                            updateTask({
                                                ...row,
                                                taskStatus: e.target.checked
                                            }, index)
                                        )
                                    }} />
                                </td>
                                <td>{pv?.length + 1}</td>
                                <td>{row?.title || "N/F"}</td>
                                <td>{row?.description || "N/F"}</td>
                                <td>{moment(row?.taskdate)?.format("DD-MM-YYYY")} {" - "} {row?.taskTime}</td>
                                <td >
                                    <span className={row?.taskStatus == true ? 'bg-success text-white p-2' : 'bg-warning text-white p-2'} style={{ borderRadius: "0.375rem", display: "flex", justifyContent: "center" }}>   {
                                        row?.taskStatus == true ? "Completd" : "Active"
                                    }</span>
                                </td>
                                <td>
                                    <CrudAction
                                        onEditClick={() => navigate(`tasks/${index}/edit?title=${row?.title}&description=${row?.description}&taskDate=${row?.taskdate}&taskTime=${row?.taskTime}`)}
                                        onDeleteClick={() => swal({
                                            title: "Are you sure?",
                                            text: "Are you sure that you want to Delete this Task ?",
                                            icon: "warning",
                                            dangerMode: true,
                                        })
                                            .then(willDelete => {
                                                if (willDelete) {
                                                    dispatch(removeTask(index));
                                                    swal("Deleted!", "Your task has been deleted!", "success");
                                                }
                                            })}

                                    />
                                </td>
                            </tr>
                            ]
                        }
                        return pv;
                    }, []
                    ).slice((currentPage - 1) * size, currentPage * size)
                    }
                </BasicTable>
            </div>
        </div >
    )
}

export default TaskList