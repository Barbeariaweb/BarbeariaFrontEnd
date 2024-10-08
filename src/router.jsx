import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import CreateUser from "./items/CreateUser";
import MinhaConta from "./items/MinhaConta";

const router = createBrowserRouter([{
    path: "/",
    element: <Login/>,
    children: [
        {
            path : "new", element: <CreateUser/>
        },
        {
            path : "/",element:<MinhaConta/>
        }
    ]
}])
export default router