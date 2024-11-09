import About from "@/pages/about";
import Contact from "@/pages/contact";
import GetHelp from "@/pages/get-help";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/sobre",
    element: <About />,
  },
  {
    path: "/fale-conosco",
    element: <Contact />,
  },
  {
    path: "/buscar-ajuda",
    element: <GetHelp />,
  },
]);

export default router;
