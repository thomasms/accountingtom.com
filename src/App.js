import React from "react";

import Grid from "@material-ui/core/Grid";

import AppNavBar from "./AppNavBar";
import AppCard from "./AppCard";

import "./App.css";

function App() {
  return (
    <div className="app">
      <AppNavBar position="sticky" />
      <div className="app-main">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-evenly"
          alignItems="center"
          style={{}}
        >
          <Grid item xs={12} md={6} lg={4}>
            <AppCard elevation={3} width={64} height={64} />{" "}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCard elevation={3} width={64} height={64} />{" "}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCard elevation={3} width={64} height={64} />{" "}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
