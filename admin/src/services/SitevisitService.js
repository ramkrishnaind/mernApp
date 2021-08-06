import * as SitevisitAction from "../redux/actions/SitevisitAction";
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";

export const SitevisitListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.SITEVISIT_LIST_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(SitevisitAction.SitevisitListSuccess(result));
    } else {
        dispatch(SitevisitAction.SitevisitListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const SitevisitStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.SITEVISIT_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(SitevisitAction.SitevisitUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(SitevisitAction.SitevisitUpdateStatusError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}



