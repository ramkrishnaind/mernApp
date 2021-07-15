import { MenuListSuccess, MenuListError,MenuAddSuccess,MenuAddError } from "../redux/actions/MenuAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const MenuListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENULIST_ENDPOINT, data, null, null, false);
        dispatch(MenuListSuccess(result));
    } catch (error) {
        dispatch(MenuListError(error));
    }
}

export const MenuAddService = async (dispatch, data) => {
    console.log('sdsada',data);
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENUADD_ENDPOINT, data, null, null, 'eyJhbGciOiJIUzI1NiJ9.ZGV2ZWxvcG1lbnQ.QYWF1clxM159VxxG9jBz7Jjpr8fJKwJIFrHZxhbdVrc');
        dispatch(MenuAddSuccess(result));
    } catch (error) {
        dispatch(MenuAddError(error));
    }
}