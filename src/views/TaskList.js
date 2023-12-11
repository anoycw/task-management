import React, { useState } from 'react'
import BasicTable from '../components/BasicTable/BasicTable'
import { Link, useNavigate } from "react-router-dom";
import CrudAction from '../components/CrudAction/CrudAction';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { removeTask, updateTask } from '../services/actions/taskActions';
import TaskFilter from './TaskFilter';

const TaskList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [filteredData, setFilteredData] = useState(null);

    // Get Data from Redux Store
    const tasks = useSelector((state) => state.tasks);

    const tableProps = {
        headers: [
            { id: "id", label: "#" },
            { id: "id", label: "#" },
            { id: "title", label: "Task Title" },
            { id: "description", label: "Description" },
            { id: "date", label: "Date" },
            { id: "status", label: "Status" },
            { id: "actions", label: "Actions" },
        ],

    };

    return (
        <div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <span>
                        Task List
                    </span>
                </div>
                <div className='col-lg-6 col-sm-12'>

                    <Link to="tasks">
                        <button className='btn btn-success float-end' >
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

            <BasicTable {...tableProps}  >
                {tasks !== undefined && tasks?.length > 0 && tasks?.reduce((pv, row, index) => {
                    return [...pv, ...(!filteredData || filteredData?.taskStatus == '' || filteredData?.taskStatus == JSON.stringify(row?.taskStatus) ? [(
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
                            <td>{index + 1}</td>
                            <td>{row?.title?.toUpperCase() || "N/F"}</td>
                            <td>{row?.description?.toUpperCase() || "N/F"}</td>
                            <td>{row?.taskdate} {" "} {row?.taskTime}</td>
                            <td className={row?.taskStatus == true ? 'bg-success text-white pt-2' : 'bg-warning pt-2'}>{
                                row?.taskStatus == true ? "COMPLETED" : "ACTIVE"
                            }</td>
                            <td>
                                <CrudAction
                                    onEditClick={() => navigate(`tasks/${index}/edit?title=${row?.title}&description=${row?.description}&taskDate=${row?.taskdate}&taskTime=${row?.taskTime}`)}
                                    onDeleteClick={() => swal({
                                        title: "Are you sure?",
                                        text: "Are you sure that you want to leave this page?",
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


                    )] : [])
                    ]
                }, []

                )
                }
            </BasicTable>
        </div >
    )
}

export default TaskList