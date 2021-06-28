
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
    
    
    
    mongoose.model('feedback', require('./schema/feedback'));
}