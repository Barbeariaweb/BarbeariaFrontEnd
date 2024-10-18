import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import CreateUser from "./items/CreateUser";
import MinhaConta from "./items/MinhaConta";
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";
import BarbeirosIndex from "./pages/Verbarbeiros";
import Verbarbeiros from "./pages/Verbarbeiros";


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
        path: "/home", // Rota para a Home
        element: <Home />,
    },
    {
        path: "/Barbeiros", // Sub-rota para Barbeiros dentro de /home
        element: <Verbarbeiros />,
    },
    {
        path: "/agendamento", // Sub-rota para agendamentos
        element: <Agendamento />,
    },

]);

export default router;
