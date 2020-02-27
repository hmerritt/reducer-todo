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

    const handleSubmit = e => {
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

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth 
                    className={styles.input}
                    type="text"
                    variant="outlined"
                    label="Add Todo.."
                    value={todoInput}
                    onChange={handleChanges}
                />
                <Button
                    className={styles.input}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}
