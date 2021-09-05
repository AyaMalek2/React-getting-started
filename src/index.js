import ReactDOM from "react-dom";

import "./index.css";
import App from "./App"; //no  need to add .js

ReactDOM.render(<App />, document.getElementById("root"));

// what's inside the div with id="root" will be replaced by <App/>
//render app inside root
