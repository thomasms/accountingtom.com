import React from "react";
import { Label, NumericInput } from "@blueprintjs/core";

import "./App.css";

import "@blueprintjs/core/lib/css/blueprint.css";

function App() {
  return (
    <div className="app">
      <div className="input-salary">
        <Label style={{ fontSize: 20 }}>
          Gross annual salary
          <NumericInput
            min={0}
            fill={false}
            disabled={false}
            large={true}
            leftIcon={"circle"}
            buttonPosition={"none"}
            placeholder={"£ " + (30000).toLocaleString()}
            locale={"en-US"}
            majorStepSize={1000}
            stepSize={1000}
          />
        </Label>
      </div>
    </div>
  );
}

export default App;
