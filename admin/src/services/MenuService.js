import * as MenuAction from "../redux/actions/MenuAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const MenuListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENULIST_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuListSuccess(result));
    } catch (error) {
        dispatch(MenuAction.MenuListError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}

export const MenuAddService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENUADD_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuAddSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/menu')
        window.location.reload();
    } catch (error) {
        dispatch(MenuAction.MenuAddError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}

export const MenuStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } catch (error) {
        dispatch(MenuAction.MenuUpdateStatusError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}

export const MenuUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuUpdateSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/menu')
        window.location.reload();
    } catch (error) {
        dispatch(MenuAction.MenuUpdateError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}

export const MenuDataService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_DATA_ENDPOINT, data, null, null, true);
        dispatch(MenuAction.MenuDataSuccess(result));
    } catch (error) {
        dispatch(MenuAction.MenuDataError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}


