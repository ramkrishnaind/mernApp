/**
 * All the API Endpoints should be register here
 */
const API_ENDPOINTS = {
  LOGIN_ENDPOINT: "/users/login",
  REGISTER_ENDPOINT: "/users/signup",
  FORGOT_ENDPOINT: "/users/forgotPassword",
  NEW_PASSWORD_ENDPOINT: "/users/setNewPassword",
  RESET_PASSWORD_ENDPOINT: "/users/setResetPassword",
  USER_VERIFICATION_ENDPOINT: "/users/verification",

  MODULERIGHTS_ENDPOINT: "/menuModule/getAllMenuList",
  //menu module
  MENULIST_ENDPOINT: "menuModule/getAllMenuList",
  MENUADD_ENDPOINT: "menuModule/createMenu",
  MENU_STATUS_UPDATE_ENDPOINT: "menuModule/updateMenuStatus",
  MENU_UPDATE_ENDPOINT: "menuModule/updateMenu",
  MENU_DATA_ENDPOINT: "menuModule/getMenuData",
  MENU_DATA_ENDPOINT: "menuModule/getMenuData",
  // user Module

  USER_ROLELIST_ENDPOINT: "role/userRoleList",
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

  //Role module
  ROLE_ADD_ENDPOINT: "role/createUserRole",
  ROLE_LIST_ENDPOINT: "role/userRoleList",
  ROLE_STATUS_UPDATE_ENDPOINT: "role/updateStatusUserRole",
  ROLE_UPDATE_ENDPOINT: "role/createUserRole",
  ROLE_DELETE_ENDPOINT: "role/userRoleDelete",
  ROLE_DATA_ENDPOINT: "role/userRoleDetails",

  //BOOKING module
  BOOKING_LIST_ENDPOINT: "menuModule/getAllMenuList",
  BOOKING_STATUS_UPDATE_ENDPOINT: "menuModule/updateMenuStatus",

  //Site visit
  SITEVISIT_LIST_ENDPOINT: "sitevisit/getSiteVisitRequest",
  SITEVISIT_STATUS_UPDATE_ENDPOINT: "sitevisit/updateSiteVisitStatusRequest",

  //Contact us
  CONTACTUS_LIST_ENDPOINT: "contactus/getContactUsList",
  CONTACTUS_STATUS_UPDATE_ENDPOINT: "contactus/updateContactUsStatus",

  //property
  PROPERTY_LIST_ENDPOINT: "property/getAllProperty",
  PROPERTY_ADD_ENDPOINT: "property/createPropertyRequest",
  PROPERTY_IMAGE_ENDPOINT: "property/uploadImage",

  PROPERTY_UPDATE_ENDPOINT: "property/updateProperty",
  PROPERTY_DATA_ENDPOINT: "property/getPropertyDetail",
  PROPERTY_DELETE_ENDPOINT: "property/deleteProperty",
  PROPERTY_STATUS_UPDATE_ENDPOINT: "property/updatePropertyStatusRequest",

  //ABOUT module
  ABOUTUS_LIST_ENDPOINT: "home/homeAbout",
  ABOUTUS_UPDATE_ENDPOINT: "home/updateAboutSection",

  //slider module
  SLIDER_LIST_ENDPOINT: "slider/getSliderList",
  SLIDER_ADD_ENDPOINT: "slider/createSlider",
  SLIDER_STATUS_UPDATE_ENDPOINT: "slider/updateSliderStatus",
  SLIDER_UPDATE_ENDPOINT: "slider/updateSlider",
  SLIDER_DELETE_ENDPOINT: "slider/deleteSlider",
  SLIDER_DATA_ENDPOINT: "slider/getSliderDetail",

  //DEALING module
  DEALING_LIST_ENDPOINT: "home/getDealingList",
  DEALING_ADD_ENDPOINT: "home/createDealingIn",
  DEALING_STATUS_UPDATE_ENDPOINT: "home/updateDealingInStatusHelper",
  DEALING_DELETE_ENDPOINT: "home/deleteDealingIn",
  DEALING_DATA_ENDPOINT: "home/getDealingInDetails",

  //dealing item module
  DEALING_ITEM_LIST_ENDPOINT: "home/getDealingItemList",
  DEALING_ITEM_ADD_ENDPOINT: "home/createDealingInItem",
  DEALING_ITEM_STATUS_UPDATE_ENDPOINT: "home/updateDealingInItemStatusHelper",
  DEALING_ITEM_DELETE_ENDPOINT: "home/deleteDealingItem",

  //service module
  SERVICE_LIST_ENDPOINT: "home/getServiceList",
  SERVICE_ADD_ENDPOINT: "home/createService",
  SERVICE_STATUS_UPDATE_ENDPOINT: "home/updateServiceStatusHelper",
  SERVICE_DELETE_ENDPOINT: "home/deleteService",

  //service item module
  SERVICE_ITEM_LIST_ENDPOINT: "home/getServiceItemList",
  SERVICE_ITEM_ADD_ENDPOINT: "home/createServiceItem",
  SERVICE_ITEM_STATUS_UPDATE_ENDPOINT: "home/updateServiceItemStatus",
  SERVICE_ITEM_DELETE_ENDPOINT: "home/deleteServiceItem",

  //building module
  BUILDING_LIST_ENDPOINT: "builder/getBuildingList",
  BUILDING_ADD_ENDPOINT: "builder/createBuilding",
  BUILDING_STATUS_UPDATE_ENDPOINT: "builder/updateBuildingStatus",
  BUILDING_DELETE_ENDPOINT: "builder/deleteBuildingItem",
  BUILDING_UPDATE_ENDPOINT: "builder/updateBuilding",
  BUILDING_DATA_ENDPOINT: "builder/getBuildingItem",

  //team module
  TEAM_LIST_ENDPOINT: "team/getTeamList",
  TEAM_ADD_ENDPOINT: "team/createTeamMember",
  TEAM_STATUS_UPDATE_ENDPOINT: "team/updateTeamMemberStatus",
  TEAM_UPDATE_ENDPOINT: "team/updateTeamMember",
  TEAM_DELETE_ENDPOINT: "team/deleteTeamMember",
  TEAM_DATA_ENDPOINT: "team/getTeamMemberDetail",
};

export default API_ENDPOINTS;
