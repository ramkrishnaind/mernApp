

module.exports = function(mongoose) {

    const UserDB = mongoose.model('user');
    const AuthTokenDB = mongoose.model('authToken');
    return {
        UserDB,
        AuthTokenDB
    }
}