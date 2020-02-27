import React, { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Header() {
    const styles = makeStyles(theme => ({
        icon: {
            marginRight: theme.spacing(2)
        }
    }))();

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
