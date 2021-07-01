import { RegisterRequest, RegisterSuccess, RegisterError } from "../redux/actions/RegisterAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const RegisterService = async (data) => {
    return (dispatch) => {
        dispatch(RegisterRequest());
        try {
            const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.LOGIN_ENDPOINT, data, null, null, false);
            dispatch(RegisterSuccess(result));
        } catch (error) {
            dispatch(RegisterError(error));
        }
    }
}