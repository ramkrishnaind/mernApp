import * as EnquiryAction from "../redux/actions/EnquiryAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";

export const EnquiryListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ENQUIRY_LIST_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(EnquiryAction.EnquiryListSuccess(result));
    } else {
        dispatch(EnquiryAction.EnquiryListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const EnquiryStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ENQUIRY_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(EnquiryAction.EnquiryUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(EnquiryAction.EnquiryUpdateStatusError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}



