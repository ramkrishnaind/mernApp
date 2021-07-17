import { useRoutes, Navigate } from "react-router-dom";
import DashboardLayout from '../components/dashboard-layout';
import MainLayout from '../components/main-layout';

//Pages
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import HomePage from "../pages/home";
import MenuList from "../pages/menuManagement";
import AddMenu from "../pages/menuManagement/add";
import UserList from "../pages/userManagement";
import AddUser from "../pages/userManagement/add";
import Error404Page from "../pages/404";
import CreateUser from "../pages/user-module/role/createUser/index";
import AddUsers from '../pages/user-module/user/createUser'


const Routes = props => {
    const {isAuth} = props;
    const routes = [
        {
            path: "/",
            element: isAuth ? <DashboardLayout /> : <MainLayout />,
            children: [
                {
                    path: "/",
                    element: isAuth ? <Navigate to="/home" /> : <Navigate to="/login" />
                },
                {
                    path: "/login",
                    element: !isAuth ? <LoginPage /> : <Navigate to="/" />
                },
                {
                    path: "/register",
                    element: <RegisterPage />,
                },
                {
                    path: "/home",
                    element: isAuth ? <HomePage /> : <Navigate to="/login" />
                },
                {
                    path: "/create-user-role",
                    element: isAuth ? <CreateUser /> : <Navigate to="/create-user-role" />
                },
                {
                    path: "/add-edit-user-role",
                    element: isAuth ? <AddUsers /> : <Navigate to="/add-edit-user-role" />
                },
               
                // Put new route above this line
                {
                    path: "/menu",
                    element: isAuth ? <MenuList /> : <Navigate to="/login" />
                },
                {
                    path: "/menu/add",
                    element: isAuth ? <AddMenu /> : <Navigate to="/login" />
                },
                {
                    path: "/user",
                    element: isAuth ? <UserList /> : <Navigate to="/login" />
                },
                {
                    path: "/user/add",
                    element: isAuth ? <AddUser /> : <Navigate to="/login" />
                },
                {
                    path: "404",
                    element: <Error404Page />
                },
                {
                    path: "*",
                    element: <Navigate to="/404" />
                }
            ]
        }
    ]

    const router = useRoutes(routes);
    return <>{router}</>;
}

export default Routes;
