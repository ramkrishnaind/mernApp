

module.exports = function (mongoose) {

    const UserDB = mongoose.model('user');
    const AuthTokenDB = mongoose.model('authToken');
    const MenuModuleDB = mongoose.model('menuModule');
    return {
        UserDB,
        AuthTokenDB,
        MenuModuleDB
    }
}