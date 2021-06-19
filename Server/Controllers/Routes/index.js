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
}