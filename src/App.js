import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import { Container } from "@material-ui/core";
import "./App.css";

function App() {
    return (
        <div>
            <Header />

            <div className="content">
                <Container>lol</Container>
            </div>
        </div>
    );
}

export default App;
