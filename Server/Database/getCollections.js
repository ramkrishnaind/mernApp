

module.exports = function (mongoose) {

    const UserDB = mongoose.model('user');
    const AuthTokenDB = mongoose.model('authToken');
    const MenuModuleDB = mongoose.model('menuModule');
    const UserRoleDB = mongoose.model('userRole');
    return {
        UserDB,
        AuthTokenDB,
        MenuModuleDB,
        UserRoleDB
    }
}