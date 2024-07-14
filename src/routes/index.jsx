import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Project from "../pages/Project";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "contact",
        element: <ContactMe />,
      },
    ],
  },
]);

export default router;
