import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";

import { BrowserRouter, Switch } from "react-router-dom";

import CadastroVideo from "./pages/cadastro/Video";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <route exact path="/" component={Home} />
      <route path="/cadastro/video" component={CadastroVideo} />
      <route component={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
