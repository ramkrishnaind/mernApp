module.exports = {
  forgotPasswordFunction: require("./Authentication/forgotPassword"),
  loginFunction: require("./Authentication/login"),
  mobileLoginFunction: require("./Authentication/mobileLogin"),
  verificationFunction: require("./Authentication/verification"),
  setNewPasswordFunction: require("./Authentication/setNewPassword"),
  reSetPasswordHelper: require("./Authentication/reSetPassword"),
  getAuthTokenFunction: require("./Authentication/getAuthToken"),
  logoutFunction: require("./Authentication/logout"),
  getMenuList: require("./MenuModule/getMenuListModule"),
  getAllMenuList: require("./MenuModule/getAllMenuList"),
  createMenu: require("./MenuModule/createMenuModule"),
  updateMenuStatus: require("./MenuModule/updateMenuStatus"),
  updateMenu: require("./MenuModule/updateMenuModule"),
  getMenuData: require("./MenuModule/getMenuData"),

  //////////
  dashBoardFunction: require("./HomeModule/dashBoardModule"),

  createUserRoleFunction: require("./RoleModule/createRoleModule"),
  updateStatusUserRoleFunction: require("./RoleModule/updateStatusRole"),
  userRoleListFunction: require("./RoleModule/userRoleList"),
  uploadFileFunction: require("./MenuModule/uploadFileModule"),
  createCallbackRequest: require("./CallbackModule/createCallbackModule"),
  getCallbackRequest: require("./CallbackModule/getCallbackListModule"),
  updateCallbackStatusRequest: require("./CallbackModule/updateCallbackStatusModule"),
  createEnquiryRequest: require("./EnquiryModule/createEnquiryModule"),
  getEnquiryRequest: require("./EnquiryModule/getEnquiryListModule"),
  updateEnquiryStatusRequest: require("./EnquiryModule/updateEnquiryStatusModule"),
  createReviewRequest: require("./ReviewModule/createReviewModule"),
  getReviewRequest: require("./ReviewModule/getReviewListModule"),
  updateReviewStatusRequest: require("./ReviewModule/updateReviewStatusModule"),
  createPropertyRequest: require("./PropertyModule/createPropertyModule"),
  updatePropertyRequest: require("./PropertyModule/updatePropertyModule"),
  deletePropertyImageRequest: require("./PropertyModule/deletePropertyImage"),
  getPropertyRequest: require("./PropertyModule/getPropertyListModule"),
  updatePropertyStatusRequest: require("./PropertyModule/updatePropertyStatusModule"),
  propertyCommonHelper: require("./PropertyModule/propertyCommonHelper"),
  createFeedbackRequest: require("./FeedbackModule/createFeedbackModule"),
  updateFeedbackRequest: require("./FeedbackModule/updateFeedbackModule"),
  getFeedbackRequest: require("./FeedbackModule/getFeedbackListModule"),
  getFeedbackForHome: require("./FeedbackModule/getFeedbackForHomeModule"),
  updateFeedbackStatusRequest: require("./FeedbackModule/updateFeedbackStatusModule"),
  getFeedbackDetails: require("./FeedbackModule/getFeedbackDetailsModule"),
  deleteFeedback: require("./FeedbackModule/deleteFeedbackModule"),
  exteriorImage: require("./PropertyModule/exteriorImageModule"),
  getUserIdPropertyList: require("./PropertyModule/getUserPropertyListModule"),
  getSearchPropertyList: require("./PropertyModule/searchPropertyModule"),
  updatePrice: require("./PropertyModule/updatePriceModule"),
  createCMS: require("./CMSModule/createCMSModule"),
  getCMSList: require("./CMSModule/getCMSListModule"),
  updateCMS: require("./CMSModule/updateCMSModule"),
  updateCMSStatus: require("./CMSModule/updateCMSStatusModule"),
  getCMS: require("./CMSModule/getCMSModule"),
  deleteCMS: require("./CMSModule/deleteCMSModule"),
  getCMSPages: require("./CMSModule/getCMSPagesModule"),
  createSlider: require("./SliderModule/createSliderModule"),
  getSliderList: require("./SliderModule/getSliderListModule"),
  updateSlider: require("./SliderModule/updateSliderModule"),
  updateSliderStatus: require("./SliderModule/updateSliderStatusModule"),
  deleteSlider: require("./SliderModule/deleteSlderModule"),
  getSliderDetail: require("./SliderModule/getSliderDetailModule"),
  //Our Team Member
  createTeamMember: require("./OurTeamModule/createTeamMemberModule"),
  getTeamList: require("./OurTeamModule/getTeamListModule"),
  updateTeamMember: require("./OurTeamModule/updateTeamMemberModule"),
  updateTeamMemberStatus: require("./OurTeamModule/updateTeamMemberStatusModule"),
  deleteTeamMember: require("./OurTeamModule/deleteTeamMemberModule"),
  getTeamMemberDetail: require("./OurTeamModule/getTeamMemberDetailModule"),
  getClientTeamMember: require("./OurTeamModule/getTeamDataModule"),
  //////
  createBuilding: require("./BuildingMaterialsModule/createBuildingModule"),
  getBuildingList: require("./BuildingMaterialsModule/getBuildingListModule"),
  getBuildingMaterials: require("./BuildingMaterialsModule/getBuildingMaterialsModule"),
  updateBuilding: require("./BuildingMaterialsModule/updateBuildingModule"),
  updateBuildingStatus: require("./BuildingMaterialsModule/updateBuildingStatusModule"),
  getBuildingItem: require("./BuildingMaterialsModule/getBuildingItemModule"),
  deleteBuildingItem: require("./BuildingMaterialsModule/deleteBuildingItemModule"),
  createServices: require("./ServicesModule/createServicesModule"),
  getServicesList: require("./ServicesModule/getServicesListModule"),
  updateServices: require("./ServicesModule/updateServicesModule"),
  updateServicesStatus: require("./ServicesModule/updateServicesStatusModule"),

  createServicesEnquiry: require("./ServicesModule/createServicesEnquiryModule"),
  getServicesEnquiry: require("./ServicesModule/getServicesEnquiryModule"),
  deleteServicesEnquiry: require("./ServicesModule/deleteServicesEnquiryModule"),
  getServicesEnquiryList: require("./ServicesModule/getServicesEnquiryListModule"),
  updateServicesEnquiryStatus: require("./ServicesModule/updateServicesEnquiryStatusModule"),

  createContactUs: require("./ContactUsModule/createContactUsModule"),
  getContactUsList: require("./ContactUsModule/getContactUsListModule"),
  updateContactUs: require("./ContactUsModule/updateContactUsModule"),
  updateContactUsStatus: require("./ContactUsModule/updateContactUsStatusModule"),
  createSiteVisitRequest: require("./SiteVisitModule/createSiteVisitModule"),
  getSiteVisitRequest: require("./SiteVisitModule/getSiteVisitListModule"),
  updateSiteVisitStatusRequest: require("./SiteVisitModule/updateSiteVisitStatusModule"),
  //////////////////////
  ///// Booking  ///////
  //////////////////////
  createBookingRequest: require("./BookingModule/createBookingModule"),
  getBookingListRequest: require("./BookingModule/getBookingListModule"),
  ////////////////////////
  /////// About Page /////
  ////////////////////////
  createAboutPage: require("./AboutPageModule/createAboutPageModule"),
  getAboutPageList: require("./AboutPageModule/getAboutPageListModule"),
  updateAboutPage: require("./AboutPageModule/updateAboutPageModule"),
  updateAboutPageStatus: require("./AboutPageModule/updateAboutPageStatusModule"),
  getAboutPageData: require("./AboutPageModule/getAboutPageDataModule"),
  deleteAboutPageData: require("./AboutPageModule/deleteAboutPageDataModule"),
  getAboutPageDetail: require("./AboutPageModule/getAboutPageDetailModule"),

  ////////////////////////
  /////// About Page /////
  ////////////////////////
  createFinance: require("./FinanceModule/createFinanceModule"),
  getFinanceList: require("./FinanceModule/getFinanceListModule"),
  updateFinance: require("./FinanceModule/updateFinanceModule"),
  updateFinanceStatus: require("./FinanceModule/updateFinanceStatusModule"),
  getFinanceData: require("./FinanceModule/getFinanceDataModule"),
  deleteFinanceData: require("./FinanceModule/deleteFinanceDataModule"),
  getFinanceDetail: require("./FinanceModule/getFinanceDetailModule"),

  ////////////////////////
  /////// OTP /////
  ////////////////////////
  createOTP: require("./OtpModule/createOTP"),
  verifyOTP: require("./OtpModule/verifyOTP"),
  ////////////////////
  ///// Supplier ////
  ////////////////////
  createSupplier: require("./SupplierModule/createSupplierModule"),
  getSupplierList: require("./SupplierModule/getSupplierListModule"),
  getSupplierDetail: require("./SupplierModule/getSupplierModule"),
  updateSupplier: require("./SupplierModule/updateSupplierModule"),
  updateSupplierStatus: require("./SupplierModule/updateSupplierStatusModule"),
  //getSupplier: require('./SupplierModule/getSupplierModule'),
  deleteSupplier: require("./SupplierModule/deleteSupplierModule"),

  deleteImage: require("./HomeModule/deleteImageModule"),
};
