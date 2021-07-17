import * as MenuAction from "../redux/actions/MenuAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const MenuListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENULIST_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuListSuccess(result));
    } catch (error) {
        dispatch(MenuAction.MenuListError(error));
    }
}

export const MenuAddService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENUADD_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuAddSuccess(result));
    } catch (error) {
        dispatch(MenuAction.MenuAddError(error));
    }
}

export const MenuStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuUpdateStatusSuccess(result));
    } catch (error) {
        dispatch(MenuAction.MenuUpdateStatusError(error));
    }
}

export const MenuUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuUpdateSuccess(result));
    } catch (error) {
        dispatch(MenuAction.MenuUpdateError(error));
    }
}

export const MenuDataService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_DATA_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuDataSuccess(result));
    } catch (error) {
        dispatch(MenuAction.MenuDataError(error));
    }
}


