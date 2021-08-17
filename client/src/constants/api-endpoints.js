/**
 * All the API Endpoints should be register here
 */
const API_ENDPOINTS = {
  FORGOT_PASSWORD_ENDPOINT: "/users/forgotPassword",
  NEW_PASSWORD_ENDPOINT: "/users/setNewPassword",
  LOGIN_ENDPOINT: "/users/login",
  REGISTER_ENDPOINT: "/users/signup",
  POST_PROPERTY_ENDPOINT: '/post-property',
  CONTACTUS_ENDPOINT: "/contactus/createContactUs",
  ENQUIRY_ENDPOINT: "/enquiry/createEnquiryRequest",
  SITEVISIT_ENDPOINT: "sitevisit/createSiteVisitRequest",
  USER_VERIFICATION_ENDPOINT: "/users/verification",

  PROPERTY_LIST_ENDPOINT: "property/getPropertyRequest",
  PROPERTY_DETAIL_ENDPOINT: "property/propertyDetail",
  UPDATE_PROPERTY_STATUS_ENDPOINT: "property/updatePropertyStatusRequest",
  USER_PROPERTY_LIST_ENDPOINT: "property/getUserIdPropertyRequest"
};

export default API_ENDPOINTS;
