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
  ADD_PROPERTY: "/property/createPropertyRequest",
  UPLOAD_IMAGE: "/property/uploadImage",
  PROPERTY_LIST_CLIENT: "/property/getAllPropertyForClient",
  PROPERTY_DETAIL: "/property/propertyDetail",
};

export default API_ENDPOINTS;
