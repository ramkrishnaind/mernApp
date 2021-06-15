
module.exports = function (mongoose) {
    mongoose.model('user', require('./schema/user'));
    mongoose.model('authToken', require('./schema/authToken'));
}