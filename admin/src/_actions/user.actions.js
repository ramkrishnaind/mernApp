import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { toast } from 'react-toastify';
import { history } from '../_helpers';
export const userActions = {
    login,
    logout,
    addUser,
    uploadImage,
    blankImage,
    disableUser,
    deleteUser,
    updateUser,
    getAllUser,
    getUserList,
    getUsers,
    uploadImageLogo,
    uploadMainImage,
    uploadBulkProduct,
};
function login(data) {
    return dispatch => {
        dispatch(request({ data }));
        userService.login(data)
            .then(
                user => {
                    dispatch(success(user));
                    history.push({ pathname: '#/app/dashboard' });
                    window.location.reload();
                },
                error => {
                    console.log("errorerror ", error);
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
function getUserList(data) {
    return dispatch => {
        dispatch(request());
        userService.getUserList(data)
            .then(
                users => dispatch(success(users)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
function getAllUser(data) {
    return dispatch => {
        dispatch(request());
        userService.getAllUser(data)
            .then(
                users => {
                    //console.log("users  ",users);
                    let returnResppnse=
                    users.getAllUser?users.getAllUser.map(user => ({ value: user.id, label: user.firstName+" "+user.lastName })):[];
                    let newRespnse={...users,getAllUser:returnResppnse}
                    dispatch(success(newRespnse))
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GET_ALL_USER_REQUEST } }
    function success(users) { return { type: userConstants.GET_ALL_USER_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_ALL_USER_FAILURE, error } }
}
// function getUserposts(data) {
//     return dispatch => {
//         dispatch(request());
//         userService.getUserposts(data)
//             .then(
//                 users => {
//                     dispatch(success(users));
//                 },
//                 error => {
//                     dispatch(alertActions.error(error));
//                     dispatch(failure(error))
//                 }
//             );
//     };
//     function request() { return { type: userConstants.GET_ALL_USER_POSTS_REQUEST } }
//     function success(users) { return { type: userConstants.GET_ALL_USER_POSTS_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GET_ALL_USER_POSTS_FAILURE, error } }
// }

// function getUsercomments(data) {
//     return dispatch => {
//         dispatch(request());
//         userService.getUsercomments(data)
//             .then(
//                 users => {
//                     dispatch(success(users));
//                 },
//                 error => {
//                     dispatch(alertActions.error(error));
//                     dispatch(failure(error))
//                 }
//             );
//     };
//     function request() { return { type: userConstants.GET_ALL_USER_COMMENTS_REQUEST } }
//     function success(users) { return { type: userConstants.GET_ALL_USER_COMMENTS_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GET_ALL_USER_COMMENTS_FAILURE, error } }
// }

// function getUserAlbums(data) {
//     return dispatch => {
//         dispatch(request());
//         userService.getUserAlbums(data)
//             .then(
//                 users => {
//                     dispatch(success(users));
//                 },
//                 error => {
//                     dispatch(alertActions.error(error));
//                     dispatch(failure(error))
//                 }
//             );
//     };
//     function request() { return { type: userConstants.GET_ALL_USER_ALBUMS_REQUEST } }
//     function success(users) { return { type: userConstants.GET_ALL_USER_ALBUMS_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GET_ALL_USER_ALBUMS_FAILURE, error } }
// }

// function getUserPhotos(data) {
//     return dispatch => {
//         dispatch(request());
//         userService.getUserPhotos(data)
//             .then(
//                 users => {
//                     dispatch(success(users));
//                 },
//                 error => {
//                     dispatch(alertActions.error(error));
//                     dispatch(failure(error))
//                 }
//             );
//     };
//     function request() { return { type: userConstants.GET_ALL_USER_PHOTOS_REQUEST } }
//     function success(users) { return { type: userConstants.GET_ALL_USER_PHOTOS_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GET_ALL_USER_PHOTOS_FAILURE, error } }
// }

// function getUsertodos(data) {
//     return dispatch => {
//         dispatch(request());
//         userService.getUsertodos(data)
//             .then(
//                 users => {
//                     dispatch(success(users));
//                 },
//                 error => {
//                     dispatch(alertActions.error(error));
//                     dispatch(failure(error))
//                 }
//             );
//     };
//     function request() { return { type: userConstants.GET_ALL_USER_TODOS_REQUEST } }
//     function success(users) { return { type: userConstants.GET_ALL_USER_TODOS_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GET_ALL_USER_TODOS_FAILURE, error } }
// }

function getUsers(data) {
    return dispatch => {
        dispatch(request());
        userService.getUsers(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GET_ALL_USER_TODOS_REQUEST } }
    function success(users) { return { type: userConstants.GET_ALL_USER_TODOS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_ALL_USER_TODOS_FAILURE, error } }
}


function addUser(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        userService.addUser(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getUserList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.ADD_RESTAURANT_USER_REQUEST } }
    function success(users) { return { type: userConstants.ADD_RESTAURANT_USER_SUCCESS, users } }
    function failure(error) { return { type: userConstants.ADD_RESTAURANT_USER_FAILURE, error } }
}
function updateUser(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        userService.updateUser(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getUserList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.ADD_RESTAURANT_USER_REQUEST } }
    function success(users) { return { type: userConstants.ADD_RESTAURANT_USER_SUCCESS, users } }
    function failure(error) { return { type: userConstants.ADD_RESTAURANT_USER_FAILURE, error } }
}
function disableUser(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    let maintempdata = {
        id:data.id
    }
    return dispatch => {
        dispatch(request());
        userService.disableUser(maintempdata)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getUserList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.ADD_RESTAURANT_USER_REQUEST } }
    function success(users) { return { type: userConstants.ADD_RESTAURANT_USER_SUCCESS, users } }
    function failure(error) { return { type: userConstants.ADD_RESTAURANT_USER_FAILURE, error } }
}
function deleteUser(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    let maintempdata = {
        id:data.id
    }
    return dispatch => {
        dispatch(request());
        userService.deleteUser(maintempdata)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getUserList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.ADD_RESTAURANT_USER_REQUEST } }
    function success(users) { return { type: userConstants.ADD_RESTAURANT_USER_SUCCESS, users } }
    function failure(error) { return { type: userConstants.ADD_RESTAURANT_USER_FAILURE, error } }
}
function uploadImage(data) {
    return dispatch => {
        userService.uploadImage(data)
            .then(
                uploadImage => {
                    toast("Image Uploaded successfully.")
                    dispatch(success(uploadImage));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function success(uploadImage) { return { type: userConstants.FILE_UPLOAD_STATUS_SUCCESS, uploadImage } }
    function failure(error) { return { type: userConstants.FILE_UPLOAD_STATUS_FAILURE, error } }
}

function uploadBulkProduct(data) {
    return dispatch => {
        userService.bulkUploadProduct(data)
            .then(
                bulkUpload => {
                    toast("Product Uploaded successfully.")
                    dispatch(success(bulkUpload));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function success(bulkUpload) { return { type: userConstants.FILE_BULKUPLOAD_STATUS_SUCCESS, bulkUpload } }
    function failure(error) { return { type: userConstants.FILE_BULKUPLOAD_STATUS_FAILURE, error } }
}

function blankImage() {
    return dispatch => dispatch(success());
    function success() { return { type: userConstants.FILE_UPLOAD_BLANK_SUCCESS } }
}

function uploadImageLogo(data) {
    return dispatch => {
        userService.uploadImageLogo(data)
            .then(
                uploadImage => {
                    toast("Logo Uploaded successfully.")
                    dispatch(success(uploadImage));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function success(uploadImage) { return { type: userConstants.LOGO_FILE_UPLOAD_STATUS_SUCCESS, uploadImage } }
    function failure(error) { return { type: userConstants.LOGO_FILE_UPLOAD_STATUS_FAILURE, error } }
}

function uploadMainImage(data) {
    return dispatch => {
        userService.uploadImage(data)
            .then(
                uploadMainImage => {
                    toast("Image Uploaded successfully.")
                    dispatch(success(uploadMainImage));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    
    function success(uploadMainImage) { return { type: userConstants.MAIN_FILE_UPLOAD_STATUS_SUCCESS, uploadMainImage } }
    function failure(error) { return { type: userConstants.MAIN_FILE_UPLOAD_STATUS_FAILURE, error } }
}
