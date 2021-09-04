import { useRoutes, Navigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard-layout";
import MainLayout from "../components/main-layout";

//Pages
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import HomePage from "../pages/home";
import MenuList from "../pages/menuManagement";
import AddMenu from "../pages/menuManagement/add";
import UserList from "../pages/userManagement";
import AddUser from "../pages/userManagement/add";
import Error404Page from "../pages/404";
import RoleList from "../pages/roleManagement";
import AddRole from "../pages/roleManagement/add";

import CareerList from "../pages/careerManagement";
import AddCareer from "../pages/careerManagement/add";
import BlogList from "../pages/blogManagement";
import AddBlog from "../pages/blogManagement/add";
import ContactusList from "../pages/contactusManagement";
import SiteVisitList from "../pages/siteVisitManagement";
import EnquiryList from "../pages/EnquiryManagement";
import CallbackList from "../pages/CallbackManagement";
import ReviewList from "../pages/reviewManagement";

import BookingList from "../pages/bookingManagement";
import ForgotPassword from "../pages/forgotPassword";
import ResetPassword from "../pages/resetPassword";
import NewPassword from "../pages/newPassword";
import Verification from "../pages/verificationPage";
import PropertyList from "../pages/propertyManagement";
import AddProperty from "../pages/propertyManagement/add";

import AboutUsList from "../pages/aboutUsManagement";
import AddAboutUs from "../pages/aboutUsManagement/add";
import SliderList from "../pages/homeSliderManagement";
import AddSlider from "../pages/homeSliderManagement/add";
import DealingList from "../pages/dealingManagement";
import AddDealing from "../pages/dealingManagement/add";
const Routes = (props) => {
  const { isAuth } = props;
  const routes = [
    {
      path: "/",
      element: isAuth ? <DashboardLayout /> : <MainLayout />,
      children: [
        {
          path: "/",
          element: isAuth ? <Navigate to="/home" /> : <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: !isAuth ? <LoginPage /> : <Navigate to="/" />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/forgot",
          element: <ForgotPassword />,
        },
        {
          path: "/reset",
          element: <ResetPassword />,
        },
        {
          path: "/setnewpassword",
          element: <NewPassword />,
        },
        {
          path: "/verification",
          element: <Verification />,
        },
        {
          path: "/home",
          element: isAuth ? <HomePage /> : <Navigate to="/login" />,
        },
        {
          path: "/role",
          element: isAuth ? <RoleList /> : <Navigate to="/role" />,
        },
        {
          path: "/role/add",
          element: isAuth ? <AddRole /> : <Navigate to="/role/add" />,
        },
        // Put new route above this line
        {
          path: "/menu",
          element: isAuth ? <MenuList /> : <Navigate to="/login" />,
        },
        {
          path: "/menu/add",
          element: isAuth ? <AddMenu /> : <Navigate to="/login" />,
        },
        {
          path: "/user",
          element: isAuth ? <UserList /> : <Navigate to="/login" />,
        },
        {
          path: "/user/add",
          element: isAuth ? <AddUser /> : <Navigate to="/login" />,
        },
        {
          path: "/career",
          element: isAuth ? <CareerList /> : <Navigate to="/login" />,
        },
        {
          path: "/career/add",
          element: isAuth ? <AddCareer /> : <Navigate to="/login" />,
        },
        {
          path: "/blog",
          element: isAuth ? <BlogList /> : <Navigate to="/login" />,
        },
        {
          path: "/blog/add",
          element: isAuth ? <AddBlog /> : <Navigate to="/login" />,
        },
        {
          path: "/contactus",
          element: isAuth ? <ContactusList /> : <Navigate to="/login" />,
        },
        {
          path: "/site-visit",
          element: isAuth ? <SiteVisitList /> : <Navigate to="/login" />,
        },
        {
          path: "/enquiry",
          element: isAuth ? <EnquiryList /> : <Navigate to="/login" />,
        },
        {
          path: "/callback",
          element: isAuth ? <CallbackList /> : <Navigate to="/login" />,
        },
        {
          path: "/review",
          element: isAuth ? <ReviewList /> : <Navigate to="/login" />,
        },
        {
          path: "/booking",
          element: isAuth ? <BookingList /> : <Navigate to="/login" />,
        },
        {
          path: "/property/add",
          element: isAuth ? <AddProperty /> : <Navigate to="/login" />,
        },
        {
          path: "/property",
          element: isAuth ? <PropertyList /> : <Navigate to="/login" />,
        },
        {
          path: "/aboutus/add",
          element: isAuth ? <AddAboutUs /> : <Navigate to="/login" />,
        },
        {
          path: "/aboutus",
          element: isAuth ? <AboutUsList /> : <Navigate to="/login" />,
        },
        {
          path: "/slider/add",
          element: isAuth ? <AddSlider /> : <Navigate to="/login" />,
        },
        {
          path: "/slider",
          element: isAuth ? <SliderList /> : <Navigate to="/login" />,
        },
        {
          path: "/dealing/add",
          element: isAuth ? <AddDealing /> : <Navigate to="/login" />,
        },
        {
          path: "/dealing",
          element: isAuth ? <DealingList /> : <Navigate to="/login" />,
        },
        {
          path: "404",
          element: <Error404Page />,
        },
        {
          path: "*",
          element: <Navigate to="/404" />,
        },
      ],
    },
  ];

  const router = useRoutes(routes);
  return <>{router}</>;
};

export default Routes;
