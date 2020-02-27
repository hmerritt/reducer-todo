import React, { useState, useEffect, useReducer } from "react";
import { Container, Typography } from "@material-ui/core";
import { todoReducer, initialTodoState } from "./reducers/todo";
import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import ListTodos from "./components/listTodos";
import Todo from "./components/todo/todo";
import "./App.css";

function App() {

    //  Set up reducer
    const [todos, todoDispatch] = useReducer(todoReducer, initialTodoState);

    return (
        <div>
            <Header />

            <div className="content">
                <Container>
                    <Welcome todos={todos} />
                    <ListTodos todos={todos} />
                </Container>
            </div>
        </div>
    );
}

export default App;
