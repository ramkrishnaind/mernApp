import * as ReviewAction from "../redux/actions/reviewAction";
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";

export const ReviewListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.REVIEW_LIST_ENDPOINT, data, null, null, true);
        dispatch(ReviewAction.ReviewListSuccess(result));
    } catch (error) {
        dispatch(ReviewAction.ReviewListError(error));
    }
}

export const ReviewStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.REVIEW_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(ReviewAction.ReviewUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(ReviewAction.ReviewUpdateStatusError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}



