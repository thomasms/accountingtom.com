import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

function AppCard(props) {
  const { elevation, width, height } = props;

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(width ? width : 32),
        height: theme.spacing(height ? height : 32)
      }
    },
    paper: {
      background: "#ffffff",
      margin: "auto",
      maxWidth: 500
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={elevation} className={classes.paper} />{" "}
    </div>
  );
}

export default AppCard;
