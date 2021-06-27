

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
    return {
        UserDB,
        AuthTokenDB,
        MenuModuleDB,
        UserRoleDB,
        ReqCallbackDB,
        EnquiryDB,
        ReviewDB,
        PropertyDB,
        FeedbackDB
    }
}