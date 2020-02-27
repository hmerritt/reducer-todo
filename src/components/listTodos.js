import React, { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Todo from "./todo/todo";

function ListTodos({ todos }) {
    return (
        <div className="todos">
            {todos.map((todo, key) => {
                return <Todo item={todo} key={key} />;
            })}
        </div>
    );
}

export default ListTodos;
