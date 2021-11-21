/**
 * All Action Keys will go here
 */
const ACTION_KEYS = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_ERROR: "REGISTER_ERROR",

  SIDE_MENU_LIST_REQUEST: "SIDE_MENU_LIST_REQUEST",
  SIDE_MENU_LIST_SUCCESS: "SIDE_MENU_LIST_SUCCESS",
  SIDE_MENU_LIST_ERROR: "SIDE_MENU_LIST_ERROR",

  MODULE_RIGHTS_REQUEST: "MODULE_RIGHTS_REQUEST",
  MODULE_RIGHTS_SUCCESS: "MODULE_RIGHTS_SUCCESS",
  MODULE_RIGHTS_ERROR: "MODULE_RIGHTS_ERROR",

  MENU_LIST_REQUEST: "MENU_LIST_REQUEST",
  MENU_LIST_SUCCESS: "MENU_LIST_SUCCESS",
  MENU_LIST_ERROR: "MENU_LIST_ERROR",

  MENU_ADD_REQUEST: "MENU_ADD_REQUEST",
  MENU_ADD_SUCCESS: "MENU_ADD_SUCCESS",
  MENU_ADD_ERROR: "MENU_ADD_ERROR",

  MENU_UPDATE_STATUS_REQUEST: "MENU_UPDATE_STATUS_REQUEST",
  MENU_UPDATE_STATUS_SUCCESS: "MENU_UPDATE_STATUS_SUCCESS",
  MENU_UPDATE_STATUS_ERROR: "MENU_UPDATE_STATUS_ERROR",

  MENU_UPDATE_REQUEST: "MENU_UPDATE_REQUEST",
  MENU_UPDATE_SUCCESS: "MENU_UPDATE_SUCCESS",
  MENU_UPDATE_ERROR: "MENU_UPDATE_ERROR",

  MENU_DATA_REQUEST: "MENU_DATA_REQUEST",
  MENU_DATA_SUCCESS: "MENU_DATA_SUCCESS",
  MENU_DATA_ERROR: "MENU_DATA_ERROR",

  //user module

  USER_ROLE_REQUEST: "USER_ROLE_REQUEST",
  USER_ROLE_SUCCESS: "USER_ROLE_SUCCESS",
  USER_ROLE_ERROR: "USER_ROLE_ERROR",

  USER_ROLE_LIST_REQUEST: "USER_ROLE_LIST_REQUEST",
  USER_ROLE_LIST_SUCCESS: "USER_ROLE_LIST_SUCCESS",
  USER_ROLE_LIST_ERROR: "USER_ROLE_LIST_ERROR",

  USER_LIST_REQUEST: "USER_LIST_REQUEST",
  USER_LIST_SUCCESS: "USER_LIST_SUCCESS",
  USER_LIST_ERROR: "USER_LIST_ERROR",

  USER_ADD_REQUEST: "USER_ADD_REQUEST",
  USER_ADD_SUCCESS: "USER_ADD_SUCCESS",
  USER_ADD_ERROR: "USER_ADD_ERROR",

  USER_UPDATE_STATUS_REQUEST: "USER_UPDATE_STATUS_REQUEST",
  USER_UPDATE_STATUS_SUCCESS: "USER_UPDATE_STATUS_SUCCESS",
  USER_UPDATE_STATUS_ERROR: "USER_UPDATE_STATUS_ERROR",

  USER_UPDATE_REQUEST: "USER_UPDATE_REQUEST",
  USER_UPDATE_SUCCESS: "USER_UPDATE_SUCCESS",
  USER_UPDATE_ERROR: "USER_UPDATE_ERROR",

  USER_DATA_REQUEST: "USER_DATA_REQUEST",
  USER_DATA_SUCCESS: "USER_DATA_SUCCESS",
  USER_DATA_ERROR: "USER_DATA_ERROR",

  ENQUIRY_LIST_REQUEST: "ENQUIRY_LIST_REQUEST",
  ENQUIRY_LIST_SUCCESS: "ENQUIRY_LIST_SUCCESS",
  ENQUIRY_LIST_ERROR: "ENQUIRY_LIST_ERROR",

  ENQUIRY_UPDATE_STATUS_REQUEST: "ENQUIRY_UPDATE_STATUS_REQUEST",
  ENQUIRY_UPDATE_STATUS_SUCCESS: "ENQUIRY_UPDATE_STATUS_SUCCESS",
  ENQUIRY_UPDATE_STATUS_ERROR: "ENQUIRY_UPDATE_STATUS_ERROR",

  CALLBACK_LIST_REQUEST: "CALLBACK_LIST_REQUEST",
  CALLBACK_LIST_SUCCESS: "CALLBACK_LIST_SUCCESS",
  CALLBACK_LIST_ERROR: "CALLBACK_LIST_ERROR",

  CALLBACK_UPDATE_STATUS_REQUEST: "CALLBACK_UPDATE_STATUS_REQUEST",
  CALLBACK_UPDATE_STATUS_SUCCESS: "CALLBACK_UPDATE_STATUS_SUCCESS",
  CALLBACK_UPDATE_STATUS_ERROR: "CALLBACK_UPDATE_STATUS_ERROR",

  REVIEW_LIST_REQUEST: "REVIEW_LIST_REQUEST",
  REVIEW_LIST_SUCCESS: "REVIEW_LIST_SUCCESS",
  REVIEW_LIST_ERROR: "REVIEW_LIST_ERROR",

  REVIEW_UPDATE_STATUS_REQUEST: "REVIEW_UPDATE_STATUS_REQUEST",
  REVIEW_UPDATE_STATUS_SUCCESS: "REVIEW_UPDATE_STATUS_SUCCESS",
  REVIEW_UPDATE_STATUS_ERROR: "REVIEW_UPDATE_STATUS_ERROR",

  //career module

  CAREER_LIST_REQUEST: "CAREER_LIST_REQUEST",
  CAREER_LIST_SUCCESS: "CAREER_LIST_SUCCESS",
  CAREER_LIST_ERROR: "CAREER_LIST_ERROR",

  CAREER_ADD_REQUEST: "CAREER_ADD_REQUEST",
  CAREER_ADD_SUCCESS: "CAREER_ADD_SUCCESS",
  CAREER_ADD_ERROR: "CAREER_ADD_ERROR",

  CAREER_UPDATE_STATUS_REQUEST: "CAREER_UPDATE_STATUS_REQUEST",
  CAREER_UPDATE_STATUS_SUCCESS: "CAREER_UPDATE_STATUS_SUCCESS",
  CAREER_UPDATE_STATUS_ERROR: "CAREER_UPDATE_STATUS_ERROR",

  CAREER_UPDATE_REQUEST: "CAREER_UPDATE_REQUEST",
  CAREER_UPDATE_SUCCESS: "CAREER_UPDATE_SUCCESS",
  CAREER_UPDATE_ERROR: "CAREER_UPDATE_ERROR",

  CAREER_DELETE_REQUEST: "CAREER_DELETE_REQUEST",
  CAREER_DELETE_SUCCESS: "CAREER_DELETE_SUCCESS",
  CAREER_DELETE_ERROR: "CAREER_DELETE_ERROR",

  CAREER_DATA_REQUEST: "CAREER_DATA_REQUEST",
  CAREER_DATA_SUCCESS: "CAREER_DATA_SUCCESS",
  CAREER_DATA_ERROR: "CAREER_DATA_ERROR",

  CAREER_APPLICATION_LIST_REQUEST: "CAREER_APPLICATION_LIST_REQUEST",
  CAREER_APPLICATION_LIST_SUCCESS: "CAREER_APPLICATION_LIST_SUCCESS",
  CAREER_APPLICATION_LIST_ERROR: "CAREER_APPLICATION_LIST_ERROR",

  CAREER_APPLICATION_UPDATE_STATUS_REQUEST:
    "CAREER_APPLICATION_UPDATE_STATUS_REQUEST",
  CAREER_APPLICATION_UPDATE_STATUS_SUCCESS:
    "CAREER_APPLICATION_UPDATE_STATUS_SUCCESS",
  CAREER_APPLICATION_UPDATE_STATUS_ERROR:
    "CAREER_APPLICATION_UPDATE_STATUS_ERROR",

  //blog module

  BLOG_LIST_REQUEST: "BLOG_LIST_REQUEST",
  BLOG_LIST_SUCCESS: "BLOG_LIST_SUCCESS",
  BLOG_LIST_ERROR: "BLOG_LIST_ERROR",

  BLOG_ADD_REQUEST: "BLOG_ADD_REQUEST",
  BLOG_ADD_SUCCESS: "BLOG_ADD_SUCCESS",
  BLOG_ADD_ERROR: "BLOG_ADD_ERROR",

  BLOG_UPDATE_STATUS_REQUEST: "BLOG_UPDATE_STATUS_REQUEST",
  BLOG_UPDATE_STATUS_SUCCESS: "BLOG_UPDATE_STATUS_SUCCESS",
  BLOG_UPDATE_STATUS_ERROR: "BLOG_UPDATE_STATUS_ERROR",

  BLOG_UPDATE_REQUEST: "BLOG_UPDATE_REQUEST",
  BLOG_UPDATE_SUCCESS: "BLOG_UPDATE_SUCCESS",
  BLOG_UPDATE_ERROR: "BLOG_UPDATE_ERROR",

  BLOG_DELETE_REQUEST: "BLOG_DELETE_REQUEST",
  BLOG_DELETE_SUCCESS: "BLOG_DELETE_SUCCESS",
  BLOG_DELETE_ERROR: "BLOG_DELETE_ERROR",

  BLOG_DATA_REQUEST: "BLOG_DATA_REQUEST",
  BLOG_DATA_SUCCESS: "BLOG_DATA_SUCCESS",
  BLOG_DATA_ERROR: "BLOG_DATA_ERROR",

  //slider module
  SLIDER_LIST_REQUEST: "SLIDER_LIST_REQUEST",
  SLIDER_LIST_SUCCESS: "SLIDER_LIST_SUCCESS",
  SLIDER_LIST_ERROR: "SLIDER_LIST_ERROR",

  SLIDER_ADD_REQUEST: "SLIDER_ADD_REQUEST",
  SLIDER_ADD_SUCCESS: "SLIDER_ADD_SUCCESS",
  SLIDER_ADD_ERROR: "SLIDER_ADD_ERROR",

  SLIDER_UPDATE_STATUS_REQUEST: "SLIDER_UPDATE_STATUS_REQUEST",
  SLIDER_UPDATE_STATUS_SUCCESS: "SLIDER_UPDATE_STATUS_SUCCESS",
  SLIDER_UPDATE_STATUS_ERROR: "SLIDER_UPDATE_STATUS_ERROR",

  SLIDER_UPDATE_REQUEST: "SLIDER_UPDATE_REQUEST",
  SLIDER_UPDATE_SUCCESS: "SLIDER_UPDATE_SUCCESS",
  SLIDER_UPDATE_ERROR: "SLIDER_UPDATE_ERROR",

  SLIDER_DELETE_REQUEST: "SLIDER_DELETE_REQUEST",
  SLIDER_DELETE_SUCCESS: "SLIDER_DELETE_SUCCESS",
  SLIDER_DELETE_ERROR: "SLIDER_DELETE_ERROR",

  SLIDER_DATA_REQUEST: "SLIDER_DATA_REQUEST",
  SLIDER_DATA_SUCCESS: "SLIDER_DATA_SUCCESS",
  SLIDER_DATA_ERROR: "SLIDER_DATA_ERROR",

  //role module

  ROLE_LIST_REQUEST: "ROLE_LIST_REQUEST",
  ROLE_LIST_SUCCESS: "ROLE_LIST_SUCCESS",
  ROLE_LIST_ERROR: "ROLE_LIST_ERROR",

  ROLE_ADD_REQUEST: "ROLE_ADD_REQUEST",
  ROLE_ADD_SUCCESS: "ROLE_ADD_SUCCESS",
  ROLE_ADD_ERROR: "ROLE_ADD_ERROR",

  ROLE_UPDATE_STATUS_REQUEST: "ROLE_UPDATE_STATUS_REQUEST",
  ROLE_UPDATE_STATUS_SUCCESS: "ROLE_UPDATE_STATUS_SUCCESS",
  ROLE_UPDATE_STATUS_ERROR: "ROLE_UPDATE_STATUS_ERROR",

  ROLE_UPDATE_REQUEST: "ROLE_UPDATE_REQUEST",
  ROLE_UPDATE_SUCCESS: "ROLE_UPDATE_SUCCESS",
  ROLE_UPDATE_ERROR: "ROLE_UPDATE_ERROR",

  ROLE_DELETE_REQUEST: "ROLE_DELETE_REQUEST",
  ROLE_DELETE_SUCCESS: "ROLE_DELETE_SUCCESS",
  ROLE_DELETE_ERROR: "ROLE_DELETE_ERROR",

  ROLE_DATA_REQUEST: "ROLE_DATA_REQUEST",
  ROLE_DATA_SUCCESS: "ROLE_DATA_SUCCESS",
  ROLE_DATA_ERROR: "ROLE_DATA_ERROR",

  ROLE_MENU_LIST_REQUEST: "ROLE_MENU_LIST_REQUEST",
  ROLE_MENU_LIST_SUCCESS: "ROLE_MENU_LIST_SUCCESS",
  ROLE_MENU_LIST_ERROR: "ROLE_MENU_LIST_ERROR",

  //Booking module

  BOOKING_LIST_REQUEST: "BOOKING_LIST_REQUEST",
  BOOKING_LIST_SUCCESS: "BOOKING_LIST_SUCCESS",
  BOOKING_LIST_ERROR: "BOOKING_LIST_ERROR",

  BOOKING_UPDATE_STATUS_REQUEST: "BOOKING_UPDATE_STATUS_REQUEST",
  BOOKING_UPDATE_STATUS_SUCCESS: "BOOKING_UPDATE_STATUS_SUCCESS",
  BOOKING_UPDATE_STATUS_ERROR: "BOOKING_UPDATE_STATUS_ERROR",

  //contact us module

  CONTACTUS_LIST_REQUEST: "CONTACTUS_LIST_REQUEST",
  CONTACTUS_LIST_SUCCESS: "CONTACTUS_LIST_SUCCESS",
  CONTACTUS_LIST_ERROR: "CONTACTUS_LIST_ERROR",

  CONTACTUS_UPDATE_STATUS_REQUEST: "CONTACTUS_UPDATE_STATUS_REQUEST",
  CONTACTUS_UPDATE_STATUS_SUCCESS: "CONTACTUS_UPDATE_STATUS_SUCCESS",
  CONTACTUS_UPDATE_STATUS_ERROR: "CONTACTUS_UPDATE_STATUS_ERROR",

  //site visit module

  SITEVISIT_LIST_REQUEST: "SITEVISIT_LIST_REQUEST",
  SITEVISIT_LIST_SUCCESS: "SITEVISIT_LIST_SUCCESS",
  SITEVISIT_LIST_ERROR: "SITEVISIT_LIST_ERROR",

  SITEVISIT_UPDATE_STATUS_REQUEST: "SITEVISIT_UPDATE_STATUS_REQUEST",
  SITEVISIT_UPDATE_STATUS_SUCCESS: "SITEVISIT_UPDATE_STATUS_SUCCESS",
  SITEVISIT_UPDATE_STATUS_ERROR: "SITEVISIT_UPDATE_STATUS_ERROR",

  //forgot password
  FORGOT_REQUEST: "FORGOT_REQUEST",
  FORGOT_SUCCESS: "FORGOT_SUCCESS",
  FORGOT_ERROR: "FORGOT_ERROR",

  //forgot password
  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_ERROR: "RESET_PASSWORD_ERROR",

  //set new password
  NEW_PASSWORD_REQUEST: "NEW_PASSWORD_REQUEST",
  NEW_PASSWORD_SUCCESS: "NEW_PASSWORD_SUCCESS",
  NEW_PASSWORD_ERROR: "NEW_PASSWORD_ERROR",

  // user VERIFICATION
  VERIFICATION_REQUEST: "VERIFICATION_REQUEST",
  VERIFICATION_SUCCESS: "VERIFICATION_SUCCESS",
  VERIFICATION_ERROR: "VERIFICATION_ERROR",

  //property
  PROPERTY_ADD_REQUEST: "PROPERTY_ADD_REQUEST",
  PROPERTY_ADD_SUCCESS: "PROPERTY_ADD_SUCCESS",
  PROPERTY_ADD_ERROR: "PROPERTY_ADD_ERROR",

  PROPERTY_LIST_REQUEST: "PROPERTY_LIST_REQUEST",
  PROPERTY_LIST_SUCCESS: "PROPERTY_LIST_SUCCESS",
  PROPERTY_LIST_ERROR: "PROPERTY_LIST_ERROR",

  PROPERTY_UPDATE_STATUS_REQUEST: "PROPERTY_UPDATE_STATUS_REQUEST",
  PROPERTY_UPDATE_STATUS_SUCCESS: "PROPERTY_UPDATE_STATUS_SUCCESS",
  PROPERTY_UPDATE_STATUS_ERROR: "PROPERTY_UPDATE_STATUS_ERROR",

  PROPERTY_UPDATE_REQUEST: "PROPERTY_UPDATE_REQUEST",
  PROPERTY_UPDATE_SUCCESS: "PROPERTY_UPDATE_SUCCESS",
  PROPERTY_UPDATE_ERROR: "PROPERTY_UPDATE_ERROR",

  PROPERTY_DELETE_REQUEST: "PROPERTY_DELETE_REQUEST",
  PROPERTY_DELETE_SUCCESS: "PROPERTY_DELETE_SUCCESS",
  PROPERTY_DELETE_ERROR: "PROPERTY_DELETE_ERROR",

  PROPERTY_DATA_REQUEST: "PROPERTY_DATA_REQUEST",
  PROPERTY_DATA_SUCCESS: "PROPERTY_DATA_SUCCESS",
  PROPERTY_DATA_ERROR: "PROPERTY_DATA_ERROR",

  //about us module

  ABOUTUS_LIST_REQUEST: "ABOUTUS_LIST_REQUEST",
  ABOUTUS_LIST_SUCCESS: "ABOUTUS_LIST_SUCCESS",
  ABOUTUS_LIST_ERROR: "ABOUTUS_LIST_ERROR",

  ABOUTUS_UPDATE_REQUEST: "ABOUTUS_UPDATE_REQUEST",
  ABOUTUS_UPDATE_SUCCESS: "ABOUTUS_UPDATE_SUCCESS",
  ABOUTUS_UPDATE_ERROR: "ABOUTUS_UPDATE_ERROR",

  ABOUTUS_DATA_REQUEST: "ABOUTUS_DATA_REQUEST",
  ABOUTUS_DATA_SUCCESS: "ABOUTUS_DATA_SUCCESS",
  ABOUTUS_DATA_ERROR: "ABOUTUS_DATA_ERROR",

  ABOUTUS_ADD_REQUEST: "ABOUTUS_ADD_REQUEST",
  ABOUTUS_ADD_SUCCESS: "ABOUTUS_ADD_SUCCESS",
  ABOUTUS_ADD_ERROR: "ABOUTUS_ADD_ERROR",

  //DEALING module

  DEALING_LIST_REQUEST: "DEALING_LIST_REQUEST",
  DEALING_LIST_SUCCESS: "DEALING_LIST_SUCCESS",
  DEALING_LIST_ERROR: "DEALING_LIST_ERROR",

  DEALING_ADD_REQUEST: "DEALING_ADD_REQUEST",
  DEALING_ADD_SUCCESS: "DEALING_ADD_SUCCESS",
  DEALING_ADD_ERROR: "DEALING_ADD_ERROR",

  DEALING_UPDATE_STATUS_REQUEST: "DEALING_UPDATE_STATUS_REQUEST",
  DEALING_UPDATE_STATUS_SUCCESS: "DEALING_UPDATE_STATUS_SUCCESS",
  DEALING_UPDATE_STATUS_ERROR: "DEALING_UPDATE_STATUS_ERROR",

  DEALING_DELETE_REQUEST: "DEALING_DELETE_REQUEST",
  DEALING_DELETE_SUCCESS: "DEALING_DELETE_SUCCESS",
  DEALING_DELETE_ERROR: "DEALING_DELETE_ERROR",

  DEALING_DATA_REQUEST: "DEALING_DATA_REQUEST",
  DEALING_DATA_SUCCESS: "DEALING_DATA_SUCCESS",
  DEALING_DATA_ERROR: "DEALING_DATA_ERROR",

  DEALING_UPDATE_REQUEST: "DEALING_UPDATE_REQUEST",
  DEALING_UPDATE_SUCCESS: "DEALING_UPDATE_SUCCESS",
  DEALING_UPDATE_ERROR: "DEALING_UPDATE_ERROR",

  //Dashboard item module
  DASHBOARD_ITEM_LIST_REQUEST: "DASHBOARD_ITEM_LIST_REQUEST",
  DASHBOARD_ITEM_LIST_SUCCESS: "DASHBOARD_ITEM_LIST_SUCCESS",
  DASHBOARD_ITEM_LIST_ERROR: "DASHBOARD_ITEM_LIST_ERROR",

  //DEALING item module

  DEALING_ITEM_LIST_REQUEST: "DEALING_ITEM_LIST_REQUEST",
  DEALING_ITEM_LIST_SUCCESS: "DEALING_ITEM_LIST_SUCCESS",
  DEALING_ITEM_LIST_ERROR: "DEALING_ITEM_LIST_ERROR",

  DEALING_ITEM_ADD_REQUEST: "DEALING_ITEM_ADD_REQUEST",
  DEALING_ITEM_ADD_SUCCESS: "DEALING_ITEM_ADD_SUCCESS",
  DEALING_ITEM_ADD_ERROR: "DEALING_ITEM_ADD_ERROR",

  DEALING_ITEM_UPDATE_STATUS_REQUEST: "DEALING_ITEM_UPDATE_STATUS_REQUEST",
  DEALING_ITEM_UPDATE_STATUS_SUCCESS: "DEALING_ITEM_UPDATE_STATUS_SUCCESS",
  DEALING_ITEM_UPDATE_STATUS_ERROR: "DEALING_ITEM_UPDATE_STATUS_ERROR",

  DEALING_ITEM_DELETE_REQUEST: "DEALING_ITEM_DELETE_REQUEST",
  DEALING_ITEM_DELETE_SUCCESS: "DEALING_ITEM_DELETE_SUCCESS",
  DEALING_ITEM_DELETE_ERROR: "DEALING_ITEM_DELETE_ERROR",

  DEALING_ITEM_DATA_REQUEST: "DEALING_ITEM_DATA_REQUEST",
  DEALING_ITEM_DATA_SUCCESS: "DEALING_ITEM_DATA_SUCCESS",
  DEALING_ITEM_DATA_ERROR: "DEALING_ITEM_DATA_ERROR",

  DEALING_ITEM_UPDATE_REQUEST: "DEALING_ITEM_UPDATE_REQUEST",
  DEALING_ITEM_UPDATE_SUCCESS: "DEALING_ITEM_UPDATE_SUCCESS",
  DEALING_ITEM_UPDATE_ERROR: "DEALING_ITEM_UPDATE_ERROR",

  //service module

  SERVICE_LIST_REQUEST: "SERVICE_LIST_REQUEST",
  SERVICE_LIST_SUCCESS: "SERVICE_LIST_SUCCESS",
  SERVICE_LIST_ERROR: "SERVICE_LIST_ERROR",

  SERVICE_ADD_REQUEST: "SERVICE_ADD_REQUEST",
  SERVICE_ADD_SUCCESS: "SERVICE_ADD_SUCCESS",
  SERVICE_ADD_ERROR: "SERVICE_ADD_ERROR",

  SERVICE_UPDATE_STATUS_REQUEST: "SERVICE_UPDATE_STATUS_REQUEST",
  SERVICE_UPDATE_STATUS_SUCCESS: "SERVICE_UPDATE_STATUS_SUCCESS",
  SERVICE_UPDATE_STATUS_ERROR: "SERVICE_UPDATE_STATUS_ERROR",

  SERVICE_DELETE_REQUEST: "SERVICE_DELETE_REQUEST",
  SERVICE_DELETE_SUCCESS: "SERVICE_DELETE_SUCCESS",
  SERVICE_DELETE_ERROR: "SERVICE_DELETE_ERROR",

  SERVICE_DATA_REQUEST: "SERVICE_DATA_REQUEST",
  SERVICE_DATA_SUCCESS: "SERVICE_DATA_SUCCESS",
  SERVICE_DATA_ERROR: "SERVICE_DATA_ERROR",

  SERVICE_UPDATE_REQUEST: "SERVICE_UPDATE_REQUEST",
  SERVICE_UPDATE_SUCCESS: "SERVICE_UPDATE_SUCCESS",
  SERVICE_UPDATE_ERROR: "SERVICE_UPDATE_ERROR",

  //service item module

  SERVICE_ITEM_LIST_REQUEST: "SERVICE_ITEM_LIST_REQUEST",
  SERVICE_ITEM_LIST_SUCCESS: "SERVICE_ITEM_LIST_SUCCESS",
  SERVICE_ITEM_LIST_ERROR: "SERVICE_ITEM_LIST_ERROR",

  SERVICE_ITEM_ADD_REQUEST: "SERVICE_ITEM_ADD_REQUEST",
  SERVICE_ITEM_ADD_SUCCESS: "SERVICE_ITEM_ADD_SUCCESS",
  SERVICE_ITEM_ADD_ERROR: "SERVICE_ITEM_ADD_ERROR",

  SERVICE_ITEM_UPDATE_STATUS_REQUEST: "SERVICE_ITEM_UPDATE_STATUS_REQUEST",
  SERVICE_ITEM_UPDATE_STATUS_SUCCESS: "SERVICE_ITEM_UPDATE_STATUS_SUCCESS",
  SERVICE_ITEM_UPDATE_STATUS_ERROR: "SERVICE_ITEM_UPDATE_STATUS_ERROR",

  SERVICE_ITEM_DELETE_REQUEST: "SERVICE_ITEM_DELETE_REQUEST",
  SERVICE_ITEM_DELETE_SUCCESS: "SERVICE_ITEM_DELETE_SUCCESS",
  SERVICE_ITEM_DELETE_ERROR: "SERVICE_ITEM_DELETE_ERROR",

  SERVICE_ITEM_DATA_REQUEST: "SERVICE_ITEM_DATA_REQUEST",
  SERVICE_ITEM_DATA_SUCCESS: "SERVICE_ITEM_DATA_SUCCESS",
  SERVICE_ITEM_DATA_ERROR: "SERVICE_ITEM_DATA_ERROR",

  SERVICE_ITEM_UPDATE_REQUEST: "SERVICE_ITEM_UPDATE_REQUEST",
  SERVICE_ITEM_UPDATE_SUCCESS: "SERVICE_ITEM_UPDATE_SUCCESS",
  SERVICE_ITEM_UPDATE_ERROR: "SERVICE_ITEM_UPDATE_ERROR",

  //building module

  BUILDING_LIST_REQUEST: "BUILDING_LIST_REQUEST",
  BUILDING_LIST_SUCCESS: "BUILDING_LIST_SUCCESS",
  BUILDING_LIST_ERROR: "BUILDING_LIST_ERROR",

  BUILDING_ADD_REQUEST: "BUILDING_ADD_REQUEST",
  BUILDING_ADD_SUCCESS: "BUILDING_ADD_SUCCESS",
  BUILDING_ADD_ERROR: "BUILDING_ADD_ERROR",

  BUILDING_UPDATE_STATUS_REQUEST: "BUILDING_UPDATE_STATUS_REQUEST",
  BUILDING_UPDATE_STATUS_SUCCESS: "BUILDING_UPDATE_STATUS_SUCCESS",
  BUILDING_UPDATE_STATUS_ERROR: "BUILDING_UPDATE_STATUS_ERROR",

  BUILDING_DELETE_REQUEST: "BUILDING_DELETE_REQUEST",
  BUILDING_DELETE_SUCCESS: "BUILDING_DELETE_SUCCESS",
  BUILDING_DELETE_ERROR: "BUILDING_DELETE_ERROR",

  BUILDING_UPDATE_REQUEST: "BUILDING_UPDATE_REQUEST",
  BUILDING_UPDATE_SUCCESS: "BUILDING_UPDATE_SUCCESS",
  BUILDING_UPDATE_ERROR: "BUILDING_UPDATE_ERROR",

  BUILDING_DATA_REQUEST: "BUILDING_DATA_REQUEST",
  BUILDING_DATA_SUCCESS: "BUILDING_DATA_SUCCESS",
  BUILDING_DATA_ERROR: "BUILDING_DATA_ERROR",

  //blog module

  TEAM_LIST_REQUEST: "TEAM_LIST_REQUEST",
  TEAM_LIST_SUCCESS: "TEAM_LIST_SUCCESS",
  TEAM_LIST_ERROR: "TEAM_LIST_ERROR",

  TEAM_ADD_REQUEST: "TEAM_ADD_REQUEST",
  TEAM_ADD_SUCCESS: "TEAM_ADD_SUCCESS",
  TEAM_ADD_ERROR: "TEAM_ADD_ERROR",

  TEAM_UPDATE_STATUS_REQUEST: "TEAM_UPDATE_STATUS_REQUEST",
  TEAM_UPDATE_STATUS_SUCCESS: "TEAM_UPDATE_STATUS_SUCCESS",
  TEAM_UPDATE_STATUS_ERROR: "TEAM_UPDATE_STATUS_ERROR",

  TEAM_UPDATE_REQUEST: "TEAM_UPDATE_REQUEST",
  TEAM_UPDATE_SUCCESS: "TEAM_UPDATE_SUCCESS",
  TEAM_UPDATE_ERROR: "TEAM_UPDATE_ERROR",

  TEAM_DELETE_REQUEST: "TEAM_DELETE_REQUEST",
  TEAM_DELETE_SUCCESS: "TEAM_DELETE_SUCCESS",
  TEAM_DELETE_ERROR: "TEAM_DELETE_ERROR",

  TEAM_DATA_REQUEST: "TEAM_DATA_REQUEST",
  TEAM_DATA_SUCCESS: "TEAM_DATA_SUCCESS",
  TEAM_DATA_ERROR: "TEAM_DATA_ERROR",

  //address module

  ADDRESS_ADD_REQUEST: "ADDRESS_ADD_REQUEST",
  ADDRESS_ADD_SUCCESS: "ADDRESS_ADD_SUCCESS",
  ADDRESS_ADD_ERROR: "ADDRESS_ADD_ERROR",

  ADDRESS_UPDATE_REQUEST: "ADDRESS_UPDATE_REQUEST",
  ADDRESS_UPDATE_SUCCESS: "ADDRESS_UPDATE_SUCCESS",
  ADDRESS_UPDATE_ERROR: "ADDRESS_UPDATE_ERROR",

  ADDRESS_DATA_REQUEST: "ADDRESS_DATA_REQUEST",
  ADDRESS_DATA_SUCCESS: "ADDRESS_DATA_SUCCESS",
  ADDRESS_DATA_ERROR: "ADDRESS_DATA_ERROR",

  //social module

  SOCIAL_ADD_REQUEST: "SOCIAL_ADD_REQUEST",
  SOCIAL_ADD_SUCCESS: "SOCIAL_ADD_SUCCESS",
  SOCIAL_ADD_ERROR: "SOCIAL_ADD_ERROR",

  SOCIAL_UPDATE_REQUEST: "SOCIAL_UPDATE_REQUEST",
  SOCIAL_UPDATE_SUCCESS: "SOCIAL_UPDATE_SUCCESS",
  SOCIAL_UPDATE_ERROR: "SOCIAL_UPDATE_ERROR",

  SOCIAL_DATA_REQUEST: "SOCIAL_DATA_REQUEST",
  SOCIAL_DATA_SUCCESS: "SOCIAL_DATA_SUCCESS",
  SOCIAL_DATA_ERROR: "SOCIAL_DATA_ERROR",

  //feedback module

  FEEDBACK_LIST_REQUEST: "FEEDBACK_LIST_REQUEST",
  FEEDBACK_LIST_SUCCESS: "FEEDBACK_LIST_SUCCESS",
  FEEDBACK_LIST_ERROR: "FEEDBACK_LIST_ERROR",

  FEEDBACK_ADD_REQUEST: "FEEDBACK_ADD_REQUEST",
  FEEDBACK_ADD_SUCCESS: "FEEDBACK_ADD_SUCCESS",
  FEEDBACK_ADD_ERROR: "FEEDBACK_ADD_ERROR",

  FEEDBACK_UPDATE_STATUS_REQUEST: "FEEDBACK_UPDATE_STATUS_REQUEST",
  FEEDBACK_UPDATE_STATUS_SUCCESS: "FEEDBACK_UPDATE_STATUS_SUCCESS",
  FEEDBACK_UPDATE_STATUS_ERROR: "FEEDBACK_UPDATE_STATUS_ERROR",

  FEEDBACK_UPDATE_REQUEST: "FEEDBACK_UPDATE_REQUEST",
  FEEDBACK_UPDATE_SUCCESS: "FEEDBACK_UPDATE_SUCCESS",
  FEEDBACK_UPDATE_ERROR: "FEEDBACK_UPDATE_ERROR",

  FEEDBACK_DELETE_REQUEST: "FEEDBACK_DELETE_REQUEST",
  FEEDBACK_DELETE_SUCCESS: "FEEDBACK_DELETE_SUCCESS",
  FEEDBACK_DELETE_ERROR: "FEEDBACK_DELETE_ERROR",

  FEEDBACK_DATA_REQUEST: "FEEDBACK_DATA_REQUEST",
  FEEDBACK_DATA_SUCCESS: "FEEDBACK_DATA_SUCCESS",
  FEEDBACK_DATA_ERROR: "FEEDBACK_DATA_ERROR",

  //director

  DIRECTOR_LIST_REQUEST: "DIRECTOR_LIST_REQUEST",
  DIRECTOR_LIST_SUCCESS: "DIRECTOR_LIST_SUCCESS",
  DIRECTOR_LIST_ERROR: "DIRECTOR_LIST_ERROR",

  DIRECTOR_ADD_REQUEST: "DIRECTOR_ADD_REQUEST",
  DIRECTOR_ADD_SUCCESS: "DIRECTOR_ADD_SUCCESS",
  DIRECTOR_ADD_ERROR: "DIRECTOR_ADD_ERROR",

  DIRECTOR_UPDATE_STATUS_REQUEST: "DIRECTOR_UPDATE_STATUS_REQUEST",
  DIRECTOR_UPDATE_STATUS_SUCCESS: "DIRECTOR_UPDATE_STATUS_SUCCESS",
  DIRECTOR_UPDATE_STATUS_ERROR: "DIRECTOR_UPDATE_STATUS_ERROR",

  DIRECTOR_UPDATE_REQUEST: "DIRECTOR_UPDATE_REQUEST",
  DIRECTOR_UPDATE_SUCCESS: "DIRECTOR_UPDATE_SUCCESS",
  DIRECTOR_UPDATE_ERROR: "DIRECTOR_UPDATE_ERROR",

  DIRECTOR_DELETE_REQUEST: "DIRECTOR_DELETE_REQUEST",
  DIRECTOR_DELETE_SUCCESS: "DIRECTOR_DELETE_SUCCESS",
  DIRECTOR_DELETE_ERROR: "DIRECTOR_DELETE_ERROR",

  DIRECTOR_DATA_REQUEST: "DIRECTOR_DATA_REQUEST",
  DIRECTOR_DATA_SUCCESS: "DIRECTOR_DATA_SUCCESS",
  DIRECTOR_DATA_ERROR: "DIRECTOR_DATA_ERROR",

  //construction module

  CONSTRUCTION_LIST_REQUEST: "CONSTRUCTION_LIST_REQUEST",
  CONSTRUCTION_LIST_SUCCESS: "CONSTRUCTION_LIST_SUCCESS",
  CONSTRUCTION_LIST_ERROR: "CONSTRUCTION_LIST_ERROR",

  CONSTRUCTION_ADD_REQUEST: "CONSTRUCTION_ADD_REQUEST",
  CONSTRUCTION_ADD_SUCCESS: "CONSTRUCTION_ADD_SUCCESS",
  CONSTRUCTION_ADD_ERROR: "CONSTRUCTION_ADD_ERROR",

  CONSTRUCTION_UPDATE_STATUS_REQUEST: "CONSTRUCTION_UPDATE_STATUS_REQUEST",
  CONSTRUCTION_UPDATE_STATUS_SUCCESS: "CONSTRUCTION_UPDATE_STATUS_SUCCESS",
  CONSTRUCTION_UPDATE_STATUS_ERROR: "CONSTRUCTION_UPDATE_STATUS_ERROR",

  CONSTRUCTION_UPDATE_REQUEST: "CONSTRUCTION_UPDATE_REQUEST",
  CONSTRUCTION_UPDATE_SUCCESS: "CONSTRUCTION_UPDATE_SUCCESS",
  CONSTRUCTION_UPDATE_ERROR: "CONSTRUCTION_UPDATE_ERROR",

  CONSTRUCTION_DELETE_REQUEST: "CONSTRUCTION_DELETE_REQUEST",
  CONSTRUCTION_DELETE_SUCCESS: "CONSTRUCTION_DELETE_SUCCESS",
  CONSTRUCTION_DELETE_ERROR: "CONSTRUCTION_DELETE_ERROR",

  CONSTRUCTION_DATA_REQUEST: "CONSTRUCTION_DATA_REQUEST",
  CONSTRUCTION_DATA_SUCCESS: "CONSTRUCTION_DATA_SUCCESS",
  CONSTRUCTION_DATA_ERROR: "CONSTRUCTION_DATA_ERROR",

  //investwithus module

  INVESTWITHUS_LIST_REQUEST: "INVESTWITHUS_LIST_REQUEST",
  INVESTWITHUS_LIST_SUCCESS: "INVESTWITHUS_LIST_SUCCESS",
  INVESTWITHUS_LIST_ERROR: "INVESTWITHUS_LIST_ERROR",

  INVESTWITHUS_ADD_REQUEST: "INVESTWITHUS_ADD_REQUEST",
  INVESTWITHUS_ADD_SUCCESS: "INVESTWITHUS_ADD_SUCCESS",
  INVESTWITHUS_ADD_ERROR: "INVESTWITHUS_ADD_ERROR",

  INVESTWITHUS_UPDATE_STATUS_REQUEST: "INVESTWITHUS_UPDATE_STATUS_REQUEST",
  INVESTWITHUS_UPDATE_STATUS_SUCCESS: "INVESTWITHUS_UPDATE_STATUS_SUCCESS",
  INVESTWITHUS_UPDATE_STATUS_ERROR: "INVESTWITHUS_UPDATE_STATUS_ERROR",

  INVESTWITHUS_UPDATE_REQUEST: "INVESTWITHUS_UPDATE_REQUEST",
  INVESTWITHUS_UPDATE_SUCCESS: "INVESTWITHUS_UPDATE_SUCCESS",
  INVESTWITHUS_UPDATE_ERROR: "INVESTWITHUS_UPDATE_ERROR",

  INVESTWITHUS_DELETE_REQUEST: "INVESTWITHUS_DELETE_REQUEST",
  INVESTWITHUS_DELETE_SUCCESS: "INVESTWITHUS_DELETE_SUCCESS",
  INVESTWITHUS_DELETE_ERROR: "INVESTWITHUS_DELETE_ERROR",

  INVESTWITHUS_DATA_REQUEST: "INVESTWITHUS_DATA_REQUEST",
  INVESTWITHUS_DATA_SUCCESS: "INVESTWITHUS_DATA_SUCCESS",
  INVESTWITHUS_DATA_ERROR: "INVESTWITHUS_DATA_ERROR",

  //news letter module

  NEWSLETTER_LIST_REQUEST: "NEWSLETTER_LIST_REQUEST",
  NEWSLETTER_LIST_SUCCESS: "NEWSLETTER_LIST_SUCCESS",
  NEWSLETTER_LIST_ERROR: "NEWSLETTER_LIST_ERROR",

  NEWSLETTER_UPDATE_STATUS_REQUEST: "NEWSLETTER_UPDATE_STATUS_REQUEST",
  NEWSLETTER_UPDATE_STATUS_SUCCESS: "NEWSLETTER_UPDATE_STATUS_SUCCESS",
  NEWSLETTER_UPDATE_STATUS_ERROR: "NEWSLETTER_UPDATE_STATUS_ERROR",

  NEWSLETTER_DELETE_REQUEST: "NEWSLETTER_DELETE_REQUEST",
  NEWSLETTER_DELETE_SUCCESS: "NEWSLETTER_DELETE_SUCCESS",
  NEWSLETTER_DELETE_ERROR: "NEWSLETTER_DELETE_ERROR",

  //ABOUTPAGE module

  ABOUTPAGE_LIST_REQUEST: "ABOUTPAGE_LIST_REQUEST",
  ABOUTPAGE_LIST_SUCCESS: "ABOUTPAGE_LIST_SUCCESS",
  ABOUTPAGE_LIST_ERROR: "ABOUTPAGE_LIST_ERROR",

  ABOUTPAGE_ADD_REQUEST: "ABOUTPAGE_ADD_REQUEST",
  ABOUTPAGE_ADD_SUCCESS: "ABOUTPAGE_ADD_SUCCESS",
  ABOUTPAGE_ADD_ERROR: "ABOUTPAGE_ADD_ERROR",

  ABOUTPAGE_UPDATE_STATUS_REQUEST: "ABOUTPAGE_UPDATE_STATUS_REQUEST",
  ABOUTPAGE_UPDATE_STATUS_SUCCESS: "ABOUTPAGE_UPDATE_STATUS_SUCCESS",
  ABOUTPAGE_UPDATE_STATUS_ERROR: "ABOUTPAGE_UPDATE_STATUS_ERROR",

  ABOUTPAGE_UPDATE_REQUEST: "ABOUTPAGE_UPDATE_REQUEST",
  ABOUTPAGE_UPDATE_SUCCESS: "ABOUTPAGE_UPDATE_SUCCESS",
  ABOUTPAGE_UPDATE_ERROR: "ABOUTPAGE_UPDATE_ERROR",

  ABOUTPAGE_DELETE_REQUEST: "ABOUTPAGE_DELETE_REQUEST",
  ABOUTPAGE_DELETE_SUCCESS: "ABOUTPAGE_DELETE_SUCCESS",
  ABOUTPAGE_DELETE_ERROR: "ABOUTPAGE_DELETE_ERROR",

  ABOUTPAGE_DATA_REQUEST: "ABOUTPAGE_DATA_REQUEST",
  ABOUTPAGE_DATA_SUCCESS: "ABOUTPAGE_DATA_SUCCESS",
  ABOUTPAGE_DATA_ERROR: "ABOUTPAGE_DATA_ERROR",

  //Finance module

  FINANCE_LIST_REQUEST: "FINANCE_LIST_REQUEST",
  FINANCE_LIST_SUCCESS: "FINANCE_LIST_SUCCESS",
  FINANCE_LIST_ERROR: "FINANCE_LIST_ERROR",

  FINANCE_ADD_REQUEST: "FINANCE_ADD_REQUEST",
  FINANCE_ADD_SUCCESS: "FINANCE_ADD_SUCCESS",
  FINANCE_ADD_ERROR: "FINANCE_ADD_ERROR",

  FINANCE_UPDATE_STATUS_REQUEST: "FINANCE_UPDATE_STATUS_REQUEST",
  FINANCE_UPDATE_STATUS_SUCCESS: "FINANCE_UPDATE_STATUS_SUCCESS",
  FINANCE_UPDATE_STATUS_ERROR: "FINANCE_UPDATE_STATUS_ERROR",

  FINANCE_UPDATE_REQUEST: "FINANCE_UPDATE_REQUEST",
  FINANCE_UPDATE_SUCCESS: "FINANCE_UPDATE_SUCCESS",
  FINANCE_UPDATE_ERROR: "FINANCE_UPDATE_ERROR",

  FINANCE_DELETE_REQUEST: "FINANCE_DELETE_REQUEST",
  FINANCE_DELETE_SUCCESS: "FINANCE_DELETE_SUCCESS",
  FINANCE_DELETE_ERROR: "FINANCE_DELETE_ERROR",

  FINANCE_DATA_REQUEST: "FINANCE_DATA_REQUEST",
  FINANCE_DATA_SUCCESS: "FINANCE_DATA_SUCCESS",
  FINANCE_DATA_ERROR: "FINANCE_DATA_ERROR",

  //CMS module

  CMS_LIST_REQUEST: "CMS_LIST_REQUEST",
  CMS_LIST_SUCCESS: "CMS_LIST_SUCCESS",
  CMS_LIST_ERROR: "CMS_LIST_ERROR",

  CMS_ADD_REQUEST: "CMS_ADD_REQUEST",
  CMS_ADD_SUCCESS: "CMS_ADD_SUCCESS",
  CMS_ADD_ERROR: "CMS_ADD_ERROR",

  CMS_UPDATE_STATUS_REQUEST: "CMS_UPDATE_STATUS_REQUEST",
  CMS_UPDATE_STATUS_SUCCESS: "CMS_UPDATE_STATUS_SUCCESS",
  CMS_UPDATE_STATUS_ERROR: "CMS_UPDATE_STATUS_ERROR",

  CMS_UPDATE_REQUEST: "CMS_UPDATE_REQUEST",
  CMS_UPDATE_SUCCESS: "CMS_UPDATE_SUCCESS",
  CMS_UPDATE_ERROR: "CMS_UPDATE_ERROR",

  CMS_DELETE_REQUEST: "CMS_DELETE_REQUEST",
  CMS_DELETE_SUCCESS: "CMS_DELETE_SUCCESS",
  CMS_DELETE_ERROR: "CMS_DELETE_ERROR",

  CMS_DATA_REQUEST: "CMS_DATA_REQUEST",
  CMS_DATA_SUCCESS: "CMS_DATA_SUCCESS",
  CMS_DATA_ERROR: "CMS_DATA_ERROR",

  // SUPPLIER module

  SUPPLIER_LIST_REQUEST: "SUPPLIER_LIST_REQUEST",
  SUPPLIER_LIST_SUCCESS: "SUPPLIER_LIST_SUCCESS",
  SUPPLIER_LIST_ERROR: "SUPPLIER_LIST_ERROR",

  SUPPLIER_ADD_REQUEST: "SUPPLIER_ADD_REQUEST",
  SUPPLIER_ADD_SUCCESS: "SUPPLIER_ADD_SUCCESS",
  SUPPLIER_ADD_ERROR: "SUPPLIER_ADD_ERROR",

  SUPPLIER_UPDATE_STATUS_REQUEST: "SUPPLIER_UPDATE_STATUS_REQUEST",
  SUPPLIER_UPDATE_STATUS_SUCCESS: "SUPPLIER_UPDATE_STATUS_SUCCESS",
  SUPPLIER_UPDATE_STATUS_ERROR: "SUPPLIER_UPDATE_STATUS_ERROR",

  SUPPLIER_UPDATE_REQUEST: "SUPPLIER_UPDATE_REQUEST",
  SUPPLIER_UPDATE_SUCCESS: "SUPPLIER_UPDATE_SUCCESS",
  SUPPLIER_UPDATE_ERROR: "SUPPLIER_UPDATE_ERROR",

  SUPPLIER_DELETE_REQUEST: "SUPPLIER_DELETE_REQUEST",
  SUPPLIER_DELETE_SUCCESS: "SUPPLIER_DELETE_SUCCESS",
  SUPPLIER_DELETE_ERROR: "SUPPLIER_DELETE_ERROR",

  SUPPLIER_DATA_REQUEST: "SUPPLIER_DATA_REQUEST",
  SUPPLIER_DATA_SUCCESS: "SUPPLIER_DATA_SUCCESS",
  SUPPLIER_DATA_ERROR: "SUPPLIER_DATA_ERROR",
};

export default ACTION_KEYS;
