import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/*
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
*/

import App from "./App";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();