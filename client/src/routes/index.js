import {Redirect} from "react-router-dom";
import CartPage from "../pages/cart";
import HomePage from "../pages/home";
import BookOnline from "../pages/online-form";

import PropertyListPage from "../pages/property-list";
import PropertyDetailPage from "../pages/property-detail";
import ContactUsPage from "../pages/contact-us";
import PostPropertyPage from "../pages/post-property";
import Creere from "../pages/carrer";
import Blog from "../pages/blog";
import BlogDetails from "../components/blog-details/blog-detalis";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ForgotPage from "../pages/forgot-password";
import NewPasswordPage from "../pages/new-password";
import Verification from "../pages/verificationPage";
import Profile from "../pages/profile";
import HouseDetailPage from "../pages/house-details/index";
import AboutUsPage from "../pages/about-us/index";
import ServiceDetailPage from '../pages/service-details/index';

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
    path: "/post-property",
    render: (props) => <PostPropertyPage {...props} />,
  },
  {
    path: "/carrer",
    render: (props) => <Creere {...props} />,
  },

  {
    path: "/blog-details",
    render: (props) => <BlogDetails {...props} />,
  },
  {
    path: "/blog",
    render: (props) => <Blog {...props} />,
  },
  {
    path: "/cart",
    render: (props) => {
      if (props.isAuth) {
        return <CartPage />;
      }
      return <Redirect to={{pathname: "/"}} />;
    },
  },
  {
    path: "/book-online",
    render: (props) => {
      if (props.isAuth) {
        return <BookOnline />;
      }
      return <Redirect to={{pathname: "/"}} />;
    },
  },
  {
    path: "/signin",
    render: (props) => <LoginPage {...props} />,
  },
  {
    path: "/register",
    render: (props) => <RegisterPage {...props} />,
  },
  {
    path: "/forgot-password",
    render: (props) => <ForgotPage {...props} />,
  },
  {
    path: "/setnewpassword",
    render: (props) => <NewPasswordPage {...props} />,
  },
  {
    path: "/verification",
    render: (props) => <Verification {...props} />,
  },
  {
    path: "/profile",
    render: (props) => <Profile {...props} />,
  },
  {
    path: "/home-detail",
    render: (props) => <HouseDetailPage {...props} />,
  },
  {
    path: "/about-us",
    render: (props) => <AboutUsPage {...props} />,
  },
  {
    path: "/service-details",
    render: (props) => <ServiceDetailPage {...props} />,
  }
];

export default routes;
