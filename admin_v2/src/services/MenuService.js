import { MenuListSuccess, MenuListError,MenuAddSuccess,MenuAddError } from "../redux/actions/MenuAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const MenuListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENULIST_ENDPOINT, data, null, null, true);
        dispatch(MenuListSuccess(result));
    } catch (error) {
        dispatch(MenuListError(error));
    }
}

export const MenuAddService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENUADD_ENDPOINT, data, null, null, true);
        dispatch(MenuAddSuccess(result));
    } catch (error) {
        dispatch(MenuAddError(error));
    }
}