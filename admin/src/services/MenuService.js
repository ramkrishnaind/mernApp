import * as MenuAction from "../redux/actions/MenuAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const MenuListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENULIST_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(MenuAction.MenuListSuccess(result));
    } else {
        dispatch(MenuAction.MenuListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const MenuAddService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENUADD_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(MenuAction.MenuAddSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/menu')
        window.location.reload();
    } else {
        dispatch(MenuAction.MenuAddError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const MenuStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(MenuAction.MenuUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(MenuAction.MenuUpdateStatusError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const MenuUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_UPDATE_ENDPOINT, data, null, null, true);

    if (result.status) {
        dispatch(MenuAction.MenuUpdateSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/menu')
        window.location.reload();
    } else {
        dispatch(MenuAction.MenuUpdateError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const MenuDataService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENU_DATA_ENDPOINT, data, null, null, true);

    if (result.status) {
        dispatch(MenuAction.MenuDataSuccess(result));
    } else {
        dispatch(MenuAction.MenuDataError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}


