import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import CreateUser from "./items/CreateUser";
import MinhaConta from "./items/MinhaConta";
import Home from "./pages/Home";
import Agendamento from "./items/Agendamento";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />, // Página de Login como rota principal
        children: [
            {
                path: "new", // Sub-rota para criação de novo usuário
                element: <CreateUser />,
            },
            {
                path: "/", // Sub-rota para a página Minha Conta
                element: <MinhaConta />,
            },
        ],
    },
    {
        path: "/home",
        element: <Home />, // Rota para a Home
        children: [
            {
                path: "agendamento", // Sub-rota para agendamentos
                element: <Agendamento />,
            },
        ],
    },
]);

export default router;
