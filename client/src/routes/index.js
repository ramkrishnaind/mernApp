import { Redirect } from "react-router-dom";
import CartPage from "../pages/cart";
import ContactUs from "../pages/contact";
import HomePage from "../pages/home";
import BookOnline from "../pages/online-form";

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
  {
    path: "/book-online",
    render: (props) => {
        if(props.isAuth){
            return <BookOnline />
        }
        return <Redirect to={{pathname: "/"}} />
    }
      ,
  },
  {
    path: "/contact-us",
    render: (props) => {
        if(props.isAuth){
            return <ContactUs />
        }
        return <Redirect to={{pathname: "/"}} />
    }
      ,
  },
];

export default routes;
