import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import moment from "moment";
import "./todo.css";

const Todo = ({ item }) => {
    return (
        <div className="todo">
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
