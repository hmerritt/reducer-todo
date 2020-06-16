import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import "./form.css";

export default function Form({ todoDispatch }) {

    const styles = makeStyles({
        input: {
            display: "block",
            width: "100%",
            marginBottom: "10px"
        }
    })();

    //  form input state
    const [todoInput, setTodoInput] = useState("");

    const handleChanges = e => {
        setTodoInput(e.target.value);
    };

    const addTodo = e => {
        e.preventDefault();

        if (todoInput.length > 0) {
            //  Dispatch a new todo
            todoDispatch({
                type: "ADD_TODO",
                payload: todoInput
            });

            setTodoInput("");
        }
    };

    const removeCompleted = e => {
        e.preventDefault();

        //  Dispatch clear all completed
        todoDispatch({
            type: "DELETE_COMPLETED"
        });
    }

    return (
        <div className="form">
            <form>
                <TextField
                    fullWidth
                    className={styles.input}
                    type="text"
                    variant="outlined"
                    label="New Todo.."
                    value={todoInput}
                    onChange={handleChanges}
                />
                <Button
                    onClick={addTodo}
                    className={styles.input}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Add Todo
                </Button>
                <Button
                    onClick={removeCompleted}
                    className={styles.input}
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Clear Completed Todos
                </Button>
            </form>
        </div>
    );
}
