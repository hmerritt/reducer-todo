import React, { useState, useEffect, useReducer } from "react";
import Header from "./components/header/header";
import { Container, Typography } from "@material-ui/core";
import { todo } from "./reducers/todo";
import "./App.css";

function App() {
    return (
        <div>
            <Header />

            <div className="content">
                <Container>
                    <Typography variant="h2">Welcome!</Typography>
                </Container>
            </div>
        </div>
    );
}

export default App;
