import { Redirect } from "react-router-dom";
import CartPage from "../pages/cart";
import HomePage from "../pages/home";

const routes = [
  {
    exact: true,
    path: "/",
    render: (props) => <HomePage {...props} />,
  },
  {
    path: "/cart",
    render: (props) => {
        if(props.isAuth){
            return <CartPage />
        }
        return <Redirect to={{pathname: "/"}} />
    }
      ,
  },
];

export default routes;
