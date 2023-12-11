import {
    ADD_TASK,
    UPDATE_TASK,
    REMOVE_TASK,
    FETCH_TASKS
} from "./types";

export const addItask = (item) => ({
    type: ADD_TASK,
    payload: item,
});

export const removeTask = (itemId) => ({
    type: REMOVE_TASK,
    payload: itemId,
});

export const updateTask = (item, index) => ({
    type: UPDATE_TASK,
    payload: item,
    index ,
});

export const fetchTasks = () => ({
    type: FETCH_TASKS,
});