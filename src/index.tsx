import { createRoot } from "react-dom/client";
import App from "App";

const app = document.getElementById("app");
const root = createRoot(app as HTMLElement);
root.render(
    <App />
);