import React from "react";
import Todo from "./todo/todo";

function ListTodos({ todos, todoDispatch }) {
    return (
        <div className="todos">
            {todos.map((todo, key) => {
                return <Todo item={todo} todoDispatch={todoDispatch} key={key} />;
            }).reverse()}
        </div>
    );
}

export default ListTodos;
