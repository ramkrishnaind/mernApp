/**
 * All the API Endpoints should be register here
 */
const API_ENDPOINTS = {
  LOGIN_ENDPOINT: "/users/login",
  REGISTER_ENDPOINT: "/users/signup",
  MODULERIGHTS_ENDPOINT: "/menuModule/getAllMenuList",
  //menu module
  MENULIST_ENDPOINT:"menuModule/getAllMenuList",
  MENUADD_ENDPOINT:"menuModule/createMenu",
  MENU_STATUS_UPDATE_ENDPOINT:"menuModule/updateMenuStatus",
  MENU_UPDATE_ENDPOINT:"menuModule/updateMenu",  
  MENU_DATA_ENDPOINT:"menuModule/getMenuData",  
  // user Module
  USER_ROLELIST_ENDPOINT:"role/userRoleList",
  USER_LIST_ENDPOINT:"users/getAllUser",
  USER_ADD_ENDPOINT:"users/createUser",
  USER_STATUS_UPDATE_ENDPOINT:"users/updateUserStatus",
  USER_UPDATE_ENDPOINT:"users/updateUser",  
  USER_DATA_ENDPOINT:"users/getUser",
  USER_DELETE_ENDPOINT:"users/deleteUser",
  
  ENQUIRY_LIST_ENDPOINT:"enquiry/getEnquiryRequest",
  ENQUIRY_STATUS_UPDATE_ENDPOINT:"enquiry/updateEnquiryStatusRequest",
};

export default API_ENDPOINTS;
