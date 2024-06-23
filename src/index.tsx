import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { routers } from "./app/providers/router";

import "./app/providers/localization";

const App = () => {
  return <RouterProvider router={routers} />;
};

document.body.innerHTML = '<div id="root"></div>';

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(<App />);
