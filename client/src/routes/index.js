import HomePage from "../pages/home";
import { Redirect } from "react-router-dom";
import CartPage from "../pages/cart";
const isAuth = false;

const routes = [
  {
    exact: true,
    path: "/",
    render: (props) => <HomePage {...props} />,
  },
  {
    path: "/cart",
    render: (props) => {
        if(isAuth){
            return <CartPage />
        }
        return <Redirect to={{pathname: "/", state: {from: props.location}}} />
    }
      ,
  },
];

export default routes;
