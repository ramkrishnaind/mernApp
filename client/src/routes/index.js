import { Redirect } from "react-router-dom";
import CartPage from "../pages/cart";
import HomePage from "../pages/home";
import BookOnline from "../pages/online-form";

import PropertyListPage from "../pages/property-list";
import PropertyDetailPage from "../pages/property-detail";
import ContactUsPage from "../pages/contact-us";
const routes = [
  {
    exact: true,
    path: "/",
    render: (props) => <HomePage {...props} />,
  },
  {
    path: "/property-list",
    render: (props) => <PropertyListPage {...props} />,
  },
  {
    path: "/property-detail",
    render: (props) => <PropertyDetailPage {...props} />,
  },
  {
    path: "/contact-us",
    render: (props) => <ContactUsPage {...props} />,
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
];

export default routes;
