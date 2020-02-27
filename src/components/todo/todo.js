import React from "react";

const Todo = ({ item }) => {
    return (
        <div className="todo">
            <h1> {item.item} </h1>
        </div>
    );
};

export default Todo;
