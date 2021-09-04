
module.exports = function (mongoose) {
    mongoose.model('user', require('./schema/user'));
    mongoose.model('authToken', require('./schema/authToken'));
    mongoose.model('menuModule', require('./schema/menuModule'));
    mongoose.model('userRole', require('./schema/userRole'));
    mongoose.model('reqCallback', require('./schema/reqCallback'));
    mongoose.model('enquiry', require('./schema/enquiry'));
    mongoose.model('review', require('./schema/review'));
    mongoose.model('property', require('./schema/property'));
    mongoose.model('pFeatures', require('./schema/pFeatures'));
    mongoose.model('pImage', require('./schema/pImage'));
    mongoose.model('pPrice', require('./schema/pPrice'));
    mongoose.model('cms', require('./schema/cms'));
    mongoose.model('slider', require('./schema/slider'));
    mongoose.model('buildingMaterials', require('./schema/buildingMaterials'));
    mongoose.model('contactus', require('./schema/contactus'));
    mongoose.model('feedback', require('./schema/feedback'));
    mongoose.model('siteVisit', require('./schema/siteVisit'));
    mongoose.model('career', require('./schema/career'));
    mongoose.model('blog', require('./schema/blog'));
    mongoose.model('homeAbout', require('./schema/homeAbout'));
    mongoose.model('homeMovingBanner', require('./schema/homeMovingBanner'));
    mongoose.model('dealingInItem', require('./schema/dealingInItem'));
    mongoose.model('dealingIn', require('./schema/dealingIn'));
    mongoose.model('service', require('./schema/service'));
    mongoose.model('serviceItem', require('./schema/serviceItem'));
}