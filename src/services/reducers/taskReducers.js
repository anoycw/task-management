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
            console.log('remove', state)
            return {
                ...(JSON.parse(JSON.stringify(state)))
            };
        case UPDATE_TASK:
            state.tasks[action.index] = action.payload;
            console.log('update', state)
            return {
                ...(JSON.parse(JSON.stringify(state)))
            };
        case FETCH_TASKS:
            console.log('fetch', state)
            return state;
        default:
            return state;
    }
};

export default taskReducer;