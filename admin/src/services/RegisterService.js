import { RegisterSuccess, RegisterError } from "../redux/actions/RegisterAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const RegisterService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.REGISTER_ENDPOINT, data, null, null, false);
        dispatch(RegisterSuccess(result));
    } catch (error) {
        dispatch(RegisterError(error));
    }
}