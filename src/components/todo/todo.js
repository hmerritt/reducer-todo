import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import moment from "moment";
import "./todo.css";

const Todo = ({ item, todoDispatch }) => {

    const toggleCompletion = e => {
        todoDispatch({
            type: "TOGGLE_COMPLETED",
            payload: item.id
        });
    }

    return (
        <div className="todo" onClick={toggleCompletion} completed={ item.completed ? "true" : "false" }>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {item.item}
                    </Typography>
                    <Typography color="textSecondary">
                        <small>
                            {
                                moment(item.id).calendar() //  .fromNow()
                            }
                        </small>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Todo;
