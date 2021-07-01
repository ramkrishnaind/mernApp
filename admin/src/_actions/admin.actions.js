import { adminConstants } from '../_constants';
import { adminService } from '../_services';
import { alertActions } from '.';
export const adminActions = {
    addAdmin,
    disableAdmin,
    deleteAdmin,
    updateAdmin,
    getAllAdmin,
    getAdminList,
    getRoles,

    detailsPageBannerMessageData,
    updateDetailsPageBannerMessage,
    createDetailsPageBannerMessage,
    RequestACallList,
    CloseCallRequest,
};

function CloseCallRequest(data) {
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
        adminService.CloseCallRequest(maintempdata)
            .then(
                admin => {
                    dispatch(success(admin));
                    dispatch(this.RequestACallList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.DISABLE_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.DISABLE_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.DISABLE_ADMIN_FAILURE, error } }
}

function RequestACallList(data) {
    return dispatch => {
        dispatch(request());
        adminService.RequestACallList(data)
            .then(
                requestedCalls => dispatch(success(requestedCalls)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.GET_REQUEST_CALL_LIST_REQUEST } }
    function success(requestedCalls) { return { type: adminConstants.GET_REQUEST_CALL_LIST_SUCCESS, requestedCalls } }
    function failure(error) { return { type: adminConstants.GET_REQUEST_CALL_LIST_FAILURE, error } }
}

function createDetailsPageBannerMessage(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        adminService.createDetailsPageBannerMessage(data)
            .then(
                admin => {
                    dispatch(success(admin));
                    dispatch(this.detailsPageBannerMessageData(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.ADD_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.ADD_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.ADD_ADMIN_FAILURE, error } }
}
function updateDetailsPageBannerMessage(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        adminService.updateDetailsPageBannerMessage(data)
            .then(
                admin => {
                    dispatch(success(admin));
                    dispatch(this.detailsPageBannerMessageData(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.UPDATE_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.UPDATE_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.UPDATE_ADMIN_FAILURE, error } }
}

function detailsPageBannerMessageData(data) {
    return dispatch => {
        dispatch(request());
        adminService.detailsPageBannerMessageData(data)
            .then(
                pageBannerList => dispatch(success(pageBannerList)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.GET_PAGE_BANNER_LIST_REQUEST } }
    function success(pageBannerList) { return { type: adminConstants.GET_PAGE_BANNER_LIST_SUCCESS, pageBannerList } }
    function failure(error) { return { type: adminConstants.GET_PAGE_BANNER_LIST_FAILURE, error } }
}

function getRoles(data) {
    return dispatch => {
        dispatch(request());
        adminService.getRoles(data)
            .then(
                roles => dispatch(success(roles)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.GET_ADMIN_ROLE_REQUEST } }
    function success(roles) { return { type: adminConstants.GET_ADMIN_ROLE_SUCCESS, roles } }
    function failure(error) { return { type: adminConstants.GET_ADMIN_ROLE_FAILURE, error } }
}

function getAdminList(data) {
    return dispatch => {
        dispatch(request());
        adminService.getAdminList(data)
            .then(
                admin => dispatch(success(admin)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.GETALL_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.GETALL_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.GETALL_ADMIN_FAILURE, error } }
}
function getAllAdmin(data) {
    return dispatch => {
        dispatch(request());
        adminService.getAllAdmin(data)
            .then(
                admin => {
                    let returnResppnse=
                    admin.getAllAdmin?admin.getAllAdmin.map(user => ({ value: user.id, label: user.name})):[];
                    let newRespnse={...admin,getAllAdmin:returnResppnse}
                    dispatch(success(newRespnse))
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.GETALL_OPT_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.GETALL_OPT_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.GETALL_OPT_ADMIN_FAILURE, error } }
}
function addAdmin(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        adminService.addAdmin(data)
            .then(
                admin => {
                    dispatch(success(admin));
                    dispatch(this.getAdminList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.ADD_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.ADD_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.ADD_ADMIN_FAILURE, error } }
}
function updateAdmin(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        adminService.updateAdmin(data)
            .then(
                admin => {
                    dispatch(success(admin));
                    dispatch(this.getAdminList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.UPDATE_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.UPDATE_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.UPDATE_ADMIN_FAILURE, error } }
}
function disableAdmin(data) {
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
        adminService.disableAdmin(maintempdata)
            .then(
                admin => {
                    dispatch(success(admin));
                    dispatch(this.getAdminList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.DISABLE_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.DISABLE_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.DISABLE_ADMIN_FAILURE, error } }
}
function deleteAdmin(data) {
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
        adminService.deleteAdmin(maintempdata)
            .then(
                admin => {
                    dispatch(success(admin));
                    dispatch(this.getAdminList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: adminConstants.DELETE_ADMIN_REQUEST } }
    function success(admin) { return { type: adminConstants.DELETE_ADMIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.DELETE_ADMIN_FAILURE, error } }
}
