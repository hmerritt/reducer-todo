import React from "react";
import { Typography } from "@material-ui/core";

function Welcome({ todos }) {
    return (
        <div className="welcome">
            <Typography variant="h3">
                {todos.length === 0
                    ? "Welcome!"
                    : `Welcome; ${todos.length} things todo`}
            </Typography>
        </div>
    );
}

export default Welcome;
