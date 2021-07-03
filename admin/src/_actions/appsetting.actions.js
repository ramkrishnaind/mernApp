import { appsettingConstants } from '../_constants';
import { appsettingService } from '../_services';
import { alertActions } from '.';
export const appsettingActions = {
    addAppSetting,
    disableAppSetting,
    deleteAppSetting,
    updateAppSetting,
    getAllAppSetting,
    getAppSettingList
};
function getAppSettingList(data) {
    return dispatch => {
        dispatch(request());
        appsettingService.getAppSettingList(data)
            .then(
                appsetting => dispatch(success(appsetting)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: appsettingConstants.GETALL_APPSETTING_REQUEST } }
    function success(appsetting) { return { type: appsettingConstants.GETALL_APPSETTING_SUCCESS, appsetting } }
    function failure(error) { return { type: appsettingConstants.GETALL_APPSETTING_FAILURE, error } }
}
function getAllAppSetting(data) {
    return dispatch => {
        dispatch(request());
        appsettingService.getAllAppSetting(data)
            .then(
                appsetting => {
                    let returnResppnse=
                    appsetting.getAllAppSetting?appsetting.getAllAppSetting.map(user => ({ value: user.id, label: user.name})):[];
                    let newRespnse={...appsetting,getAllAppSetting:returnResppnse}
                    dispatch(success(newRespnse))
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: appsettingConstants.GETALL_OPT_APPSETTING_REQUEST } }
    function success(appsetting) { return { type: appsettingConstants.GETALL_OPT_APPSETTING_SUCCESS, appsetting } }
    function failure(error) { return { type: appsettingConstants.GETALL_OPT_APPSETTING_FAILURE, error } }
}
function addAppSetting(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        appsettingService.addAppSetting(data)
            .then(
                appsetting => {
                    dispatch(success(appsetting));
                    dispatch(this.getAppSettingList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: appsettingConstants.ADD_APPSETTING_REQUEST } }
    function success(appsetting) { return { type: appsettingConstants.ADD_APPSETTING_SUCCESS, appsetting } }
    function failure(error) { return { type: appsettingConstants.ADD_APPSETTING_FAILURE, error } }
}
function updateAppSetting(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        appsettingService.updateAppSetting(data)
            .then(
                appsetting => {
                    dispatch(success(appsetting));
                    dispatch(this.getAppSettingList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: appsettingConstants.UPDATE_APPSETTING_REQUEST } }
    function success(appsetting) { return { type: appsettingConstants.UPDATE_APPSETTING_SUCCESS, appsetting } }
    function failure(error) { return { type: appsettingConstants.UPDATE_APPSETTING_FAILURE, error } }
}
function disableAppSetting(data) {
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
        appsettingService.disableAppSetting(maintempdata)
            .then(
                appsetting => {
                    dispatch(success(appsetting));
                    dispatch(this.getAppSettingList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: appsettingConstants.DISABLE_APPSETTING_REQUEST } }
    function success(appsetting) { return { type: appsettingConstants.DISABLE_APPSETTING_SUCCESS, appsetting } }
    function failure(error) { return { type: appsettingConstants.DISABLE_APPSETTING_FAILURE, error } }
}
function deleteAppSetting(data) {
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
        appsettingService.deleteAppSetting(maintempdata)
            .then(
                appsetting => {
                    dispatch(success(appsetting));
                    dispatch(this.getAppSettingList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: appsettingConstants.DELETE_APPSETTING_REQUEST } }
    function success(appsetting) { return { type: appsettingConstants.DELETE_APPSETTING_SUCCESS, appsetting } }
    function failure(error) { return { type: appsettingConstants.DELETE_APPSETTING_FAILURE, error } }
}
