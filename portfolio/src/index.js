import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import "./data/i18n";
import 'bulma/css/bulma.css';

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);