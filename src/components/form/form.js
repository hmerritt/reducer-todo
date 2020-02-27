import React, { useState } from "react";

export default function Form({ todoDispatch }) {
    //  form input state
    const [todoInput, setTodoInput] = useState("");

    const handleChanges = e => {
        setTodoInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        //  Dispatch a new todo
        todoDispatch({
            type: "ADD_TODO",
            payload: todoInput
        });
        
        setTodoInput("");
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todoInput}
                    onChange={handleChanges}
                    placeholder="add todo.."
                />
                <input type="submit" />
            </form>
        </div>
    );
}
