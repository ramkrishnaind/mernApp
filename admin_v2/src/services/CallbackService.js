import * as CallbackAction from "../redux/actions/CallbackAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const CallbackListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CALLBACK_LIST_ENDPOINT, data, null, null, true);
        dispatch(CallbackAction.CallbackListSuccess(result));
    } catch (error) {
        dispatch(CallbackAction.CallbackListError(error));
    }
}

export const CallbackStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CALLBACK_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(CallbackAction.CallbackUpdateStatusSuccess(result));
    } catch (error) {
        dispatch(CallbackAction.CallbackUpdateStatusError(error));
    }
}



