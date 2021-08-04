import * as ContactusAction from "../redux/actions/ContactusAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const ContactUsListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CONTACTUS_LIST_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(ContactusAction.ContactUsListSuccess(result));
    } else {
        dispatch(ContactusAction.ContactUsListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const ContactUsStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CONTACTUS_STATUS_UPDATE_ENDPOINT, data, null, null, true);

    if (result.status) {
        dispatch(ContactusAction.ContactUsUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(ContactusAction.ContactUsUpdateStatusError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}



