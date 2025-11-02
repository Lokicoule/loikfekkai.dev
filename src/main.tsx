import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppShell from "./app/AppShell.tsx";
import { store, translatingService } from "./shared/composition";

translatingService.init().then(() => {
  store.set("lang", translatingService.language);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AppShell />
    </React.StrictMode>
  );
});
