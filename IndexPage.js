// react libraries
import React from "react";
import { createRoot } from "react-dom/client";

// component
import App from "./src/App";

const root = createRoot(document.querySelector("#app-root"));
root.render(<App />);
