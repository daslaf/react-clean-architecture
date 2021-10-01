import { render } from "react-dom";

import "./styles.css";
import AppView from "./app/main/view/AppView";

const rootElement = document.getElementById("root");
render(<AppView />, rootElement);
