import React from "react";
import Todo from "./todo/todo";

function ListTodos({ todos }) {
    return (
        <div className="todos">
            {todos.map((todo, key) => {
                return <Todo item={todo} key={key} />;
            }).reverse()}
        </div>
    );
}

export default ListTodos;
