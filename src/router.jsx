import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import CreateUser from "./items/CreateUser";

const router = createBrowserRouter([{
    path: "/",
    element: <Login/>,
    children: [
        {
            path : "new", element: <CreateUser/>
        }
    ]
}])
export default router