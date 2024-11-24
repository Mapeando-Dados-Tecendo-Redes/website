import ExplorarDados from "@/pages/explorar-dados";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import Contato from "@/pages/home/contato";
import Sobre from "@/pages/sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/fale-conosco",
    element: <Contato />,
  },
  {
    path: "/explorar-dados",
    element: <ExplorarDados />,
  },
]);

export default router;
