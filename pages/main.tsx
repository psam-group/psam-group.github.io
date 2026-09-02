import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";

const root = document.getElementById("root")!;
const initialLang = root.dataset.lang === "bg" ? "bg" : "en";

createRoot(root).render(
  <React.StrictMode>
    <Home initialLang={initialLang} />
  </React.StrictMode>,
);
