import React from "react";
import Todo from "./todo/todo";

function ListTodos({ todos }) {
    return (
        <div className="todos">
            {todos.reverse().map((todo, key) => {
                return <Todo item={todo} key={key} />;
            })}
        </div>
    );
}

export default ListTodos;
