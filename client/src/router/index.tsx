import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AuthModal from "../components/big/Auth/UI/AuthModal";
import Boards from "./pages/Boards";
import Tournaments from "./pages/Tournaments";
import Profile from "./pages/Profile";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/auth",
        element: <AuthModal />,
    },
    {
        path: "/boards",
        element: <Boards />,
    },
    {
        path: "/tournaments",
        element: <Tournaments />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "*",
        element: <App />,
    }
]);