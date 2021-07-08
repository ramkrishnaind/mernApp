

module.exports = function (mongoose) {

    const UserDB = mongoose.model('user');
    const AuthTokenDB = mongoose.model('authToken');
    const MenuModuleDB = mongoose.model('menuModule');
    const UserRoleDB = mongoose.model('userRole');
    const ReqCallbackDB = mongoose.model('reqCallback');
    const EnquiryDB = mongoose.model('enquiry');
    const ReviewDB = mongoose.model('review');
    const PropertyDB = mongoose.model('property');
    const FeedbackDB = mongoose.model('feedback');
    const PFeaturesDB = mongoose.model('pFeatures');
    const PPriceDB = mongoose.model('pPrice');
    const PImageDB = mongoose.model('pImage');
    const CMSDB = mongoose.model('cms');
    const SliderDB = mongoose.model('slider');
    const BuildingDB = mongoose.model('buildingMaterials');
    const ServicesDB = mongoose.model('services');
    const ContactUsDB = mongoose.model('contactus');
    const SiteVisitDB = mongoose.model('siteVisit');
    
    return {
        UserDB,
        AuthTokenDB,
        MenuModuleDB,
        UserRoleDB,
        ReqCallbackDB,
        EnquiryDB,
        ReviewDB,
        PropertyDB,
        FeedbackDB,
        PFeaturesDB,
        PPriceDB,
        PImageDB,
        CMSDB,
        SliderDB,
        BuildingDB,
        ServicesDB,
        ContactUsDB,
        SiteVisitDB
    }
}