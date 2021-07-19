/**
 * All the API Endpoints should be register here
 */
const API_ENDPOINTS = {
  LOGIN_ENDPOINT: "/users/login",
  REGISTER_ENDPOINT: "/users/signup",
  MODULERIGHTS_ENDPOINT: "/menuModule/getAllMenuList",
  MENULIST_ENDPOINT:"menuModule/getAllMenuList",
  MENUADD_ENDPOINT:"menuModule/createMenu",
  MENU_STATUS_UPDATE_ENDPOINT:"menuModule/updateMenuStatus",
  MENU_UPDATE_ENDPOINT:"menuModule/updateMenu",  
  MENU_DATA_ENDPOINT:"menuModule/getMenuData",
  CREATE_USER_ROLE_ENDPOINT:"role/createUserRole",  
};

export default API_ENDPOINTS;
