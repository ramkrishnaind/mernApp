
module.exports = function (mongoose) {
    mongoose.model('user', require('./schema/user'));
    mongoose.model('authToken', require('./schema/authToken'));
    mongoose.model('menuModule', require('./schema/menuModule'));
    mongoose.model('userRole', require('./schema/userRole'));
    mongoose.model('reqCallback', require('./schema/reqCallback'));
}