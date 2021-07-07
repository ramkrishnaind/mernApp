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
    updateFeedbackStatusRequest: require('./FeedbackModule/updateFeedbackStatusModule'),
    exteriorImage: require('./PropertyModule/exteriorImageModule'),
    getUserIdPropertyList: require('./PropertyModule/getUserPropertyListModule'),
    getSearchPropertyList: require('./PropertyModule/searchPropertyModule'),
    updatePrice:require('./PropertyModule/updatePriceModule'),
    createCMS: require('./CMSModule/createCMSModule'),
    getCMSList: require('./CMSModule/getCMSListModule'),
    updateCMS:require('./CMSModule/updateCMSModule'),
    updateCMSStatus: require('./CMSModule/updateCMSStatusModule'),
    createSlider: require('./SliderModule/createSliderModule'),
    getSliderList: require('./SliderModule/getSliderListModule'),
    updateSlider:require('./SliderModule/updateSliderModule'),
    updateSliderStatus: require('./SliderModule/updateSliderStatusModule'),
    createBuilding: require('./BuildingMaterialsModule/createBuildingModule'),
    getBuildingList: require('./BuildingMaterialsModule/getBuildingListModule'),
    updateBuilding:require('./BuildingMaterialsModule/updateBuildingModule'),
    updateBuildingStatus: require('./BuildingMaterialsModule/updateBuildingStatusModule'),
    createServices: require('./ServicesModule/createServicesModule'),
    getServicesList: require('./ServicesModule/getServicesListModule'),
    updateServices:require('./ServicesModule/updateServicesModule'),
    updateServicesStatus: require('./ServicesModule/updateServicesStatusModule'),
    createContactUs: require('./ContactUsModule/createContactUsModule'),
    getContactUsList: require('./ContactUsModule/getContactUsListModule'),
    updateContactUs:require('./ContactUsModule/updateContactUsModule'),
    updateContactUsStatus: require('./ContactUsModule/updateContactUsStatusModule'),
}