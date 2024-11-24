import ExplorarDados from "@/pages/explorar-dados";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import Sobre from "@/pages/sobre";
import Contato from "@/pages/fale-conosco";

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
