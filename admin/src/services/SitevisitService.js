import * as SitevisitAction from "../redux/actions/SitevisitAction";
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const SitevisitListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.SITEVISIT_LIST_ENDPOINT, data, null, null, true);
        dispatch(SitevisitAction.SitevisitListSuccess(result));
    } catch (error) {
        dispatch(SitevisitAction.SitevisitListError(error));
    }
}

export const SitevisitStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.SITEVISIT_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(SitevisitAction.SitevisitUpdateStatusSuccess(result));
    } catch (error) {
        dispatch(SitevisitAction.SitevisitUpdateStatusError(error));
    }
}



