import * as BookingAction from "../redux/actions/BookingAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";

export const BookingListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BOOKING_LIST_ENDPOINT, data, null, null, true);
        dispatch(BookingAction.BookingListSuccess(result));
    } catch (error) {
        dispatch(BookingAction.BookingListError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}

export const BookingStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BOOKING_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(BookingAction.BookingUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } catch (error) {
        dispatch(BookingAction.BookingUpdateStatusError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}



