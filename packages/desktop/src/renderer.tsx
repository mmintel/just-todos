import { App } from "./app";

import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { createRoot } from "react-dom/client";
import "@tamagui/core/reset.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <TamaguiProvider config={config}>
    <App />
  </TamaguiProvider>
);
