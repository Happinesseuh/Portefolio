import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import "./data/i18n";
import 'bulma/css/bulma.css';

// import 'bulma-extensions/dist/js/bulma-extensions.min.js';
// import 'bulma-timeline/dist/css/bulma-timeline.min.css';


import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);