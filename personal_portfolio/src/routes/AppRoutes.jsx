import { createBrowserRouter } from "react-router";
import TechnologyDetails from "../pages/TechnologyDetails";
import App from "../App";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
      },
      {
      path: "technologies/:technologyId",
      element: <TechnologyDetails />,
      },
    ],
  },
]);

export default router;