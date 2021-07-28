/**
 * All the API Endpoints should be register here
 */
const API_ENDPOINTS = {
  LOGIN_ENDPOINT: "/users/login",
  REGISTER_ENDPOINT: "/users/signup",
  MODULERIGHTS_ENDPOINT: "/menuModule/getAllMenuList",
  //menu module
  MENULIST_ENDPOINT: "menuModule/getAllMenuList",
  MENUADD_ENDPOINT: "menuModule/createMenu",
  MENU_STATUS_UPDATE_ENDPOINT: "menuModule/updateMenuStatus",
  MENU_UPDATE_ENDPOINT: "menuModule/updateMenu",
  MENU_DATA_ENDPOINT: "menuModule/getMenuData",
  MENU_DATA_ENDPOINT: "menuModule/getMenuData",
  // user Module
  CREATE_USER_ROLE_ENDPOINT: "role/createUserRole",
  USER_ROLELIST_ENDPOINT: "role/userRoleDataList",
  USER_LIST_ENDPOINT: "users/getAllUser",
  USER_ADD_ENDPOINT: "users/createUser",
  USER_STATUS_UPDATE_ENDPOINT: "users/updateUserStatus",
  USER_UPDATE_ENDPOINT: "users/updateUser",
  USER_DATA_ENDPOINT: "users/getUser",
  USER_DELETE_ENDPOINT: "users/deleteUser",

  ENQUIRY_LIST_ENDPOINT: "enquiry/getEnquiryRequest",
  ENQUIRY_STATUS_UPDATE_ENDPOINT: "enquiry/updateEnquiryStatusRequest",

  CALLBACK_LIST_ENDPOINT: "callback/getCallbackRequest",
  CALLBACK_STATUS_UPDATE_ENDPOINT: "callback/updateCallbackStatusRequest",

  REVIEW_LIST_ENDPOINT: "review/getReviewRequest",
  REVIEW_STATUS_UPDATE_ENDPOINT: "review/updateReviewStatusRequest",

  //career module
  CAREER_LIST_ENDPOINT: "career/getAllCareer",
  CAREER_ADD_ENDPOINT: "career/createCareer",
  CAREER_STATUS_UPDATE_ENDPOINT: "career/updateCareerStatus",
  CAREER_UPDATE_ENDPOINT: "career/updateCareer",
  CAREER_DELETE_ENDPOINT: "career/deleteCareer",
  CAREER_DATA_ENDPOINT: "career/getCareerDetail",

  //blog module
  BLOG_LIST_ENDPOINT: "blog/getAllBlog",
  BLOG_ADD_ENDPOINT: "blog/createBlog",
  BLOG_STATUS_UPDATE_ENDPOINT: "blog/updateBlogStatus",
  BLOG_UPDATE_ENDPOINT: "blog/updateBlog",
  BLOG_DELETE_ENDPOINT: "blog/deleteBlog",
  BLOG_DATA_ENDPOINT: "blog/getBlogDetail",

  // property module
  PROPERTY_LIST_ENDPOINT: "",
  PROPERTY_ADD_ENDPOINT: "",
};

export default API_ENDPOINTS;
