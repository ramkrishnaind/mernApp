import * as UserAction from "../redux/actions/UserAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const RoleListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_ROLELIST_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(UserAction.RoleListSuccess(result));
    } else {
        dispatch(UserAction.RoleListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const UserListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_LIST_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(UserAction.UserListSuccess(result));
    } else {
        dispatch(UserAction.UserListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const UserAddService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_ADD_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(UserAction.UserAddSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/user')
        window.location.reload();
    } else {
        dispatch(UserAction.UserAddError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const UserStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(UserAction.UserUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(UserAction.UserUpdateStatusError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const UserUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(UserAction.UserUpdateSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/user')
        window.location.reload();
    } else {
        dispatch(UserAction.UserUpdateError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const UserDataService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_DATA_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(UserAction.UserDataSuccess(result));
    } else {
        dispatch(UserAction.UserDataError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const UserDeleteService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_DELETE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(UserAction.UserDeleteSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(UserAction.UserDeleteError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}


