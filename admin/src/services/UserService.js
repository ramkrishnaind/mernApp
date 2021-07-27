import * as UserAction from "../redux/actions/UserAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const RoleListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_ROLELIST_ENDPOINT, data, null, null, true);
        dispatch(UserAction.RoleListSuccess(result));
    } catch (error) {
        dispatch(UserAction.RoleListError(error));
    }
}

export const UserListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_LIST_ENDPOINT, data, null, null, true);
        dispatch(UserAction.UserListSuccess(result));
    } catch (error) {
        dispatch(UserAction.UserListError(error));
    }
}

export const UserAddService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_ADD_ENDPOINT, data, null, null, true);
        dispatch(UserAction.UserAddSuccess(result));
    } catch (error) {
        dispatch(UserAction.UserAddError(error));
    }
}

export const UserStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(UserAction.UserUpdateStatusSuccess(result));
    } catch (error) {
        dispatch(UserAction.UserUpdateStatusError(error));
    }
}

export const UserUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(UserAction.UserUpdateSuccess(result));
    } catch (error) {
        dispatch(UserAction.UserUpdateError(error));
    }
}

export const UserDataService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_DATA_ENDPOINT, data, null, null, true);
        dispatch(UserAction.UserDataSuccess(result));
    } catch (error) {
        dispatch(UserAction.UserDataError(error));
    }
}

export const UserDeleteService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_DELETE_ENDPOINT, data, null, null, true);
        dispatch(UserAction.UserDeleteSuccess(result));
    } catch (error) {
        dispatch(UserAction.UserDeleteError(error));
    }
}


