module.exports = {
    forgotPasswordFunction: require('./Authentication/forgotPassword'),
    signupFunction: require('./Authentication/signup'),
    loginFunction: require('./Authentication/login'),
    verificationFunction: require('./Authentication/verification'),
    setNewPasswordFunction: require('./Authentication/setNewPassword'),
    getAuthTokenFunction: require('./Authentication/getAuthToken'),
    logoutFunction: require('./Authentication/logout'),
    getMenuList: require('./MenuModule/getMenuListModule'),
    createMenu: require('./MenuModule/createMenuModule'),
    createUserRoleFunction: require('./RoleModule/createRoleModule'),
    updateStatusUserRoleFunction: require('./RoleModule/updateStatusRole'),
    userRoleListFunction: require('./RoleModule/userRoleList'),
    uploadFileFunction: require('./MenuModule/uploadFileModule'),
    createCallbackRequest: require('./CallbackModule/createCallbackModule'),
    getCallbackRequest: require('./CallbackModule/getCallbackListModule'),
    updateCallbackStatusRequest: require('./CallbackModule/updateCallbackStatusModule'),
    createEnquiryRequest: require('./EnquiryModule/createEnquiryModule'),
    getEnquiryRequest: require('./EnquiryModule/getEnquiryListModule'),
    updateEnquiryStatusRequest: require('./EnquiryModule/updateEnquiryStatusModule'),
    createReviewRequest: require('./ReviewModule/createReviewModule'),
    getReviewRequest: require('./ReviewModule/getReviewListModule'),
    updateReviewStatusRequest: require('./ReviewModule/updateReviewStatusModule'),
    createPropertyRequest: require('./PropertyModule/createPropertyModule'),
    getPropertyRequest: require('./PropertyModule/getPropertyListModule'),
    updatePropertyStatusRequest: require('./PropertyModule/updatePropertyStatusModule'),
    createFeedbackRequest: require('./FeedbackModule/createFeedbackModule'),
    getFeedbackRequest: require('./FeedbackModule/getFeedbackListModule'),
    updateFeedbackStatusRequest: require('./FeedbackModule/updateFeedbackStatusModule')

}