import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from '../views/TaskList';
import TaskAdd from '../views/TaskAdd';
import TaskEdit from "../views/TaskEdit";


const AppRouter = () => {
    return (
        <div className='container mt-5 main mb-5'>
            <div className='inner-box'>
                <BrowserRouter >
                    <Routes>
                        <Route path='/' element={<TaskList />} />
                        <Route path="tasks" element={<TaskAdd />} />
                        <Route path="tasks/:id/edit" element={<TaskEdit />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default AppRouter