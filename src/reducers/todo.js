export const initialTodoState = [
    {
        id: Date.now(),
        item: "Some thing todo",
        completed: false
    },
    {
        id: Date.now() + 1,
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

        default:
            return state;
    }
};
