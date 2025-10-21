import { renderHello } from "./components/hello";
import { setupCounter } from "./components/counter";
import "./style.css"

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App container missing");

renderHello(app);

const button = document.createElement("button");
button.textContent = "Click me";
button.attributeStyleMap.set("background-color", "black")
button.attributeStyleMap.set("padding", "0 10px")

app.appendChild(button);

const output = document.createElement("p");
app.appendChild(output);

setupCounter(button, output);
