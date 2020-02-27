import React, { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

function Welcome({ todos }) {

    return (
        <Typography variant="h3">
            {
                todos.length === 0
                ? "Welcome!"
                : `Welcome; ${todos.length} things todo`
            }
        </Typography>
    );
}

export default Welcome;
