import { random } from "../utils";

export const initialTodoState = [
    {
        id: Date.now() - random(10000, 9999999999),
        item: "Some thing todo",
        completed: false
    },
    {
        id: Date.now() - random(10000, 9999999999),
        item: "Completed todo",
        completed: true
    },
    {
        id: Date.now() - random(10000, 9999999999),
        item: "Another thing todo",
        completed: false
    }
];

export const todoReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TODO":
            return [...state, {
                id: Date.now(),
                item: action.payload,
                completed: false
            }];

        case "TOGGLE_COMPLETED":
            return state.map((task, key) => {
                if (action.payload === task.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    };
                }
                return task;
            });

        case "DELETE_COMPLETED":
            return state.filter((task) => {
                return task.completed ? false : true
            })

        default:
            return state;
    }
};
