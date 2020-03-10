import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NoteApp from "./components/NoteApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<NoteApp />, document.getElementById("root"));

serviceWorker.unregister();
