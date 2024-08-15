import { ADDED, COLORSELECTED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";


function nextTodoId(todos) {
    const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), -1);
    return maxId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state)
                }
            ]
        case TOGGLED:
            return state.map(todo =>
                todo.id === action.payload? {...todo, completed:!todo.completed} : todo
            )
        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id === todoId) {
                    return todo
                }
                return {
                    ... todo,
                    color: color,
                }
            })
        default:
            return state;
    }
}