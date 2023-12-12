import {
    ADD_TASK,
    UPDATE_TASK,
    REMOVE_TASK,
    FETCH_TASKS
} from "../actions/types";


const initialState = {

    tasks: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case REMOVE_TASK:
            state.tasks.splice(action.payload, 1);
            return {
                ...(JSON.parse(JSON.stringify(state)))
            };
        case UPDATE_TASK:
            state.tasks[action.index] = action.payload;
            return {
                ...(JSON.parse(JSON.stringify(state)))
            };
        case FETCH_TASKS:
            return state;
        default:
            return state;
    }
};

export default taskReducer;