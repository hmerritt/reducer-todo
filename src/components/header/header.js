import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

function Header() {
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <Typography variant="h6">Reducer Todo</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
