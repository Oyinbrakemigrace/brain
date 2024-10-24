import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Project from "../pages/Project";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";
import PayQuickCaseStudyPage from "../pages/PayQuickCaseStudyPage";
import SwiftleeCaseStudyPage from "../pages/SwiftleeCaseStudyPage";
import DQRCaseStudyPage from "../pages/DQRCaseStudyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
      {
        path: "/projects/pay-quick-case-study",
        element: <PayQuickCaseStudyPage />,
      },
      {
        path: "/projects/swiftlee-case-study",
        element: <SwiftleeCaseStudyPage />,
      },
      {
        path: "/projects/dineqr-case-study",
        element: <DQRCaseStudyPage />,
      },
    ],
  },
]);

export default router;
