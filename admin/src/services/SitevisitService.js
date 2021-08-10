import * as SitevisitAction from "../redux/actions/SitevisitAction";
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";

export const SitevisitListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.SITEVISIT_LIST_ENDPOINT, data, null, null, true);
        dispatch(SitevisitAction.SitevisitListSuccess(result));
    } catch (error) {
        dispatch(SitevisitAction.SitevisitListError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}

export const SitevisitStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.SITEVISIT_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(SitevisitAction.SitevisitUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } catch (error) {
        dispatch(SitevisitAction.SitevisitUpdateStatusError(error));
        dispatch(Snackbar.showFailSnackbar(error.response.data.message));
    }
}



