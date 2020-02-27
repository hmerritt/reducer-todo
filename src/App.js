import React, { useReducer } from "react";
import { Container } from "@material-ui/core";
import { todoReducer, initialTodoState } from "./reducers/todo";
import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import Form from "./components/form/form";
import ListTodos from "./components/listTodos";
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

                    <Form todoDispatch={todoDispatch} />
                    <ListTodos todos={todos} />
                </Container>
            </div>
        </div>
    );
}

export default App;
