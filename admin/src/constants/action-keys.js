/**
 * All Action Keys will go here
 */
const ACTION_KEYS = {

    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',

    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_ERROR: 'REGISTER_ERROR',

    SIDE_MENU_LIST_REQUEST: 'SIDE_MENU_LIST_REQUEST',
    SIDE_MENU_LIST_SUCCESS: 'SIDE_MENU_LIST_SUCCESS',
    SIDE_MENU_LIST_ERROR: 'SIDE_MENU_LIST_ERROR',

    MODULE_RIGHTS_REQUEST: 'MODULE_RIGHTS_REQUEST',
    MODULE_RIGHTS_SUCCESS: 'MODULE_RIGHTS_SUCCESS',
    MODULE_RIGHTS_ERROR: 'MODULE_RIGHTS_ERROR',

    MENU_LIST_REQUEST: 'MENU_LIST_REQUEST',
    MENU_LIST_SUCCESS: 'MENU_LIST_SUCCESS',
    MENU_LIST_ERROR: 'MENU_LIST_ERROR',

    MENU_ADD_REQUEST: 'MENU_ADD_REQUEST',
    MENU_ADD_SUCCESS: 'MENU_ADD_SUCCESS',
    MENU_ADD_ERROR: 'MENU_ADD_ERROR',

    MENU_UPDATE_STATUS_REQUEST: 'MENU_UPDATE_STATUS_REQUEST',
    MENU_UPDATE_STATUS_SUCCESS: 'MENU_UPDATE_STATUS_SUCCESS',
    MENU_UPDATE_STATUS_ERROR: 'MENU_UPDATE_STATUS_ERROR',

    MENU_UPDATE_REQUEST: 'MENU_UPDATE_REQUEST',
    MENU_UPDATE_SUCCESS: 'MENU_UPDATE_SUCCESS',
    MENU_UPDATE_ERROR: 'MENU_UPDATE_ERROR',

    MENU_DATA_REQUEST: 'MENU_DATA_REQUEST',
    MENU_DATA_SUCCESS: 'MENU_DATA_SUCCESS',
    MENU_DATA_ERROR: 'MENU_DATA_ERROR',

    //user module

    USER_ROLE_REQUEST: 'USER_ROLE_REQUEST',
    USER_ROLE_SUCCESS: 'USER_ROLE_SUCCESS',
    USER_ROLE_ERROR: 'USER_ROLE_ERROR',


    USER_ROLE_LIST_REQUEST: 'USER_ROLE_LIST_REQUEST',
    USER_ROLE_LIST_SUCCESS: 'USER_ROLE_LIST_SUCCESS',
    USER_ROLE_LIST_ERROR: 'USER_ROLE_LIST_ERROR',

    USER_LIST_REQUEST: 'USER_LIST_REQUEST',
    USER_LIST_SUCCESS: 'USER_LIST_SUCCESS',
    USER_LIST_ERROR: 'USER_LIST_ERROR',

    USER_ADD_REQUEST: 'USER_ADD_REQUEST',
    USER_ADD_SUCCESS: 'USER_ADD_SUCCESS',
    USER_ADD_ERROR: 'USER_ADD_ERROR',

    USER_UPDATE_STATUS_REQUEST: 'USER_UPDATE_STATUS_REQUEST',
    USER_UPDATE_STATUS_SUCCESS: 'USER_UPDATE_STATUS_SUCCESS',
    USER_UPDATE_STATUS_ERROR: 'USER_UPDATE_STATUS_ERROR',

    USER_UPDATE_REQUEST: 'USER_UPDATE_REQUEST',
    USER_UPDATE_SUCCESS: 'USER_UPDATE_SUCCESS',
    USER_UPDATE_ERROR: 'USER_UPDATE_ERROR',

    USER_DATA_REQUEST: 'USER_DATA_REQUEST',
    USER_DATA_SUCCESS: 'USER_DATA_SUCCESS',
    USER_DATA_ERROR: 'USER_DATA_ERROR',

    ENQUIRY_LIST_REQUEST: 'ENQUIRY_LIST_REQUEST',
    ENQUIRY_LIST_SUCCESS: 'ENQUIRY_LIST_SUCCESS',
    ENQUIRY_LIST_ERROR: 'ENQUIRY_LIST_ERROR',

    ENQUIRY_UPDATE_STATUS_REQUEST: 'ENQUIRY_UPDATE_STATUS_REQUEST',
    ENQUIRY_UPDATE_STATUS_SUCCESS: 'ENQUIRY_UPDATE_STATUS_SUCCESS',
    ENQUIRY_UPDATE_STATUS_ERROR: 'ENQUIRY_UPDATE_STATUS_ERROR',

    CALLBACK_LIST_REQUEST: 'CALLBACK_LIST_REQUEST',
    CALLBACK_LIST_SUCCESS: 'CALLBACK_LIST_SUCCESS',
    CALLBACK_LIST_ERROR: 'CALLBACK_LIST_ERROR',

    CALLBACK_UPDATE_STATUS_REQUEST: 'CALLBACK_UPDATE_STATUS_REQUEST',
    CALLBACK_UPDATE_STATUS_SUCCESS: 'CALLBACK_UPDATE_STATUS_SUCCESS',
    CALLBACK_UPDATE_STATUS_ERROR: 'CALLBACK_UPDATE_STATUS_ERROR',

    REVIEW_LIST_REQUEST: 'REVIEW_LIST_REQUEST',
    REVIEW_LIST_SUCCESS: 'REVIEW_LIST_SUCCESS',
    REVIEW_LIST_ERROR: 'REVIEW_LIST_ERROR',

    REVIEW_UPDATE_STATUS_REQUEST: 'REVIEW_UPDATE_STATUS_REQUEST',
    REVIEW_UPDATE_STATUS_SUCCESS: 'REVIEW_UPDATE_STATUS_SUCCESS',
    REVIEW_UPDATE_STATUS_ERROR: 'REVIEW_UPDATE_STATUS_ERROR',

    //career module

    CAREER_LIST_REQUEST: 'CAREER_LIST_REQUEST',
    CAREER_LIST_SUCCESS: 'CAREER_LIST_SUCCESS',
    CAREER_LIST_ERROR: 'CAREER_LIST_ERROR',

    CAREER_ADD_REQUEST: 'CAREER_ADD_REQUEST',
    CAREER_ADD_SUCCESS: 'CAREER_ADD_SUCCESS',
    CAREER_ADD_ERROR: 'CAREER_ADD_ERROR',

    CAREER_UPDATE_STATUS_REQUEST: 'CAREER_UPDATE_STATUS_REQUEST',
    CAREER_UPDATE_STATUS_SUCCESS: 'CAREER_UPDATE_STATUS_SUCCESS',
    CAREER_UPDATE_STATUS_ERROR: 'CAREER_UPDATE_STATUS_ERROR',

    CAREER_UPDATE_REQUEST: 'CAREER_UPDATE_REQUEST',
    CAREER_UPDATE_SUCCESS: 'CAREER_UPDATE_SUCCESS',
    CAREER_UPDATE_ERROR: 'CAREER_UPDATE_ERROR',

    CAREER_DELETE_REQUEST: 'CAREER_DELETE_REQUEST',
    CAREER_DELETE_SUCCESS: 'CAREER_DELETE_SUCCESS',
    CAREER_DELETE_ERROR: 'CAREER_DELETE_ERROR',

    CAREER_DATA_REQUEST: 'CAREER_DATA_REQUEST',
    CAREER_DATA_SUCCESS: 'CAREER_DATA_SUCCESS',
    CAREER_DATA_ERROR: 'CAREER_DATA_ERROR',

    //blog module

    BLOG_LIST_REQUEST: 'BLOG_LIST_REQUEST',
    BLOG_LIST_SUCCESS: 'BLOG_LIST_SUCCESS',
    BLOG_LIST_ERROR: 'BLOG_LIST_ERROR',

    BLOG_ADD_REQUEST: 'BLOG_ADD_REQUEST',
    BLOG_ADD_SUCCESS: 'BLOG_ADD_SUCCESS',
    BLOG_ADD_ERROR: 'BLOG_ADD_ERROR',

    BLOG_UPDATE_STATUS_REQUEST: 'BLOG_UPDATE_STATUS_REQUEST',
    BLOG_UPDATE_STATUS_SUCCESS: 'BLOG_UPDATE_STATUS_SUCCESS',
    BLOG_UPDATE_STATUS_ERROR: 'BLOG_UPDATE_STATUS_ERROR',

    BLOG_UPDATE_REQUEST: 'BLOG_UPDATE_REQUEST',
    BLOG_UPDATE_SUCCESS: 'BLOG_UPDATE_SUCCESS',
    BLOG_UPDATE_ERROR: 'BLOG_UPDATE_ERROR',

    BLOG_DELETE_REQUEST: 'BLOG_DELETE_REQUEST',
    BLOG_DELETE_SUCCESS: 'BLOG_DELETE_SUCCESS',
    BLOG_DELETE_ERROR: 'BLOG_DELETE_ERROR',

    BLOG_DATA_REQUEST: 'BLOG_DATA_REQUEST',
    BLOG_DATA_SUCCESS: 'BLOG_DATA_SUCCESS',
    BLOG_DATA_ERROR: 'BLOG_DATA_ERROR',

    //role module

    ROLE_LIST_REQUEST: 'ROLE_LIST_REQUEST',
    ROLE_LIST_SUCCESS: 'ROLE_LIST_SUCCESS',
    ROLE_LIST_ERROR: 'ROLE_LIST_ERROR',

    ROLE_ADD_REQUEST: 'ROLE_ADD_REQUEST',
    ROLE_ADD_SUCCESS: 'ROLE_ADD_SUCCESS',
    ROLE_ADD_ERROR: 'ROLE_ADD_ERROR',

    ROLE_UPDATE_STATUS_REQUEST: 'ROLE_UPDATE_STATUS_REQUEST',
    ROLE_UPDATE_STATUS_SUCCESS: 'ROLE_UPDATE_STATUS_SUCCESS',
    ROLE_UPDATE_STATUS_ERROR: 'ROLE_UPDATE_STATUS_ERROR',

    ROLE_UPDATE_REQUEST: 'ROLE_UPDATE_REQUEST',
    ROLE_UPDATE_SUCCESS: 'ROLE_UPDATE_SUCCESS',
    ROLE_UPDATE_ERROR: 'ROLE_UPDATE_ERROR',

    ROLE_DELETE_REQUEST: 'ROLE_DELETE_REQUEST',
    ROLE_DELETE_SUCCESS: 'ROLE_DELETE_SUCCESS',
    ROLE_DELETE_ERROR: 'ROLE_DELETE_ERROR',

    ROLE_DATA_REQUEST: 'ROLE_DATA_REQUEST',
    ROLE_DATA_SUCCESS: 'ROLE_DATA_SUCCESS',
    ROLE_DATA_ERROR: 'ROLE_DATA_ERROR',

    ROLE_MENU_LIST_REQUEST: 'ROLE_MENU_LIST_REQUEST',
    ROLE_MENU_LIST_SUCCESS: 'ROLE_MENU_LIST_SUCCESS',
    ROLE_MENU_LIST_ERROR: 'ROLE_MENU_LIST_ERROR',

    //Booking module

    BOOKING_LIST_REQUEST: 'BOOKING_LIST_REQUEST',
    BOOKING_LIST_SUCCESS: 'BOOKING_LIST_SUCCESS',
    BOOKING_LIST_ERROR: 'BOOKING_LIST_ERROR',

    BOOKING_UPDATE_STATUS_REQUEST: 'BOOKING_UPDATE_STATUS_REQUEST',
    BOOKING_UPDATE_STATUS_SUCCESS: 'BOOKING_UPDATE_STATUS_SUCCESS',
    BOOKING_UPDATE_STATUS_ERROR: 'BOOKING_UPDATE_STATUS_ERROR',

    //contact us module

    CONTACTUS_LIST_REQUEST: 'CONTACTUS_LIST_REQUEST',
    CONTACTUS_LIST_SUCCESS: 'CONTACTUS_LIST_SUCCESS',
    CONTACTUS_LIST_ERROR: 'CONTACTUS_LIST_ERROR',

    CONTACTUS_UPDATE_STATUS_REQUEST: 'CONTACTUS_UPDATE_STATUS_REQUEST',
    CONTACTUS_UPDATE_STATUS_SUCCESS: 'CONTACTUS_UPDATE_STATUS_SUCCESS',
    CONTACTUS_UPDATE_STATUS_ERROR: 'CONTACTUS_UPDATE_STATUS_ERROR',

    //site visit module

    SITEVISIT_LIST_REQUEST: 'SITEVISIT_LIST_REQUEST',
    SITEVISIT_LIST_SUCCESS: 'SITEVISIT_LIST_SUCCESS',
    SITEVISIT_LIST_ERROR: 'SITEVISIT_LIST_ERROR',

    SITEVISIT_UPDATE_STATUS_REQUEST: 'SITEVISIT_UPDATE_STATUS_REQUEST',
    SITEVISIT_UPDATE_STATUS_SUCCESS: 'SITEVISIT_UPDATE_STATUS_SUCCESS',
    SITEVISIT_UPDATE_STATUS_ERROR: 'SITEVISIT_UPDATE_STATUS_ERROR',

    //forgot password
    FORGOT_REQUEST: 'FORGOT_REQUEST',
    FORGOT_SUCCESS: 'FORGOT_SUCCESS',
    FORGOT_ERROR: 'FORGOT_ERROR',

    //forgot password
    RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST',
    RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
    RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR',

    //set new password
    NEW_PASSWORD_REQUEST: 'NEW_PASSWORD_REQUEST',
    NEW_PASSWORD_SUCCESS: 'NEW_PASSWORD_SUCCESS',
    NEW_PASSWORD_ERROR: 'NEW_PASSWORD_ERROR',

    // user VERIFICATION
    VERIFICATION_REQUEST: 'VERIFICATION_REQUEST',
    VERIFICATION_SUCCESS: 'VERIFICATION_SUCCESS',
    VERIFICATION_ERROR: 'VERIFICATION_ERROR',

    //property
    PROPERTY_ADD_REQUEST: 'PROPERTY_ADD_REQUEST',
    PROPERTY_ADD_SUCCESS: 'PROPERTY_ADD_SUCCESS',
    PROPERTY_ADD_ERROR: 'PROPERTY_ADD_ERROR',

    PROPERTY_LIST_REQUEST: 'PROPERTY_LIST_REQUEST',
    PROPERTY_LIST_SUCCESS: 'PROPERTY_LIST_SUCCESS',
    PROPERTY_LIST_ERROR: 'PROPERTY_LIST_ERROR',

}

export default ACTION_KEYS;