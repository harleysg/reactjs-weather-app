import React from "react";
/** @ui_libraries */
import { Grid } from "react-flexbox-grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const MUHeaderSticky = props => {
    return (
        <AppBar position="sticky">
            <Grid>
                <Toolbar>{props.children}</Toolbar>
            </Grid>
        </AppBar>
    );
};
