import * as CallbackAction from "../redux/actions/CallbackAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const CallbackListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CALLBACK_LIST_ENDPOINT, data, null, null, true);
    if (result.status) {

        dispatch(CallbackAction.CallbackListSuccess(result));
    } else {
        dispatch(CallbackAction.CallbackListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const CallbackStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CALLBACK_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(CallbackAction.CallbackUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(CallbackAction.CallbackUpdateStatusError(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    }
}



