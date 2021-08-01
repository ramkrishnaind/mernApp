import * as ContactusAction from "../redux/actions/ContactusAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const ContactUsListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CONTACTUS_LIST_ENDPOINT, data, null, null, true);
        dispatch(ContactusAction.ContactUsListSuccess(result));
    } catch (error) {
        dispatch(ContactusAction.ContactUsListError(error));
    }
}

export const ContactUsStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CONTACTUS_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(ContactusAction.ContactUsUpdateStatusSuccess(result));
    } catch (error) {
        dispatch(ContactusAction.ContactUsUpdateStatusError(error));
    }
}



