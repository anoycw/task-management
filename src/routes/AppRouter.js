import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from '../views/TaskList';
import TaskAdd from '../views/TaskAdd';
import TaskEdit from "../views/TaskEdit";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TaskList />} />
                <Route path="tasks" element={<TaskAdd />} />
                <Route path="tasks/:id/edit" element={<TaskEdit />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter