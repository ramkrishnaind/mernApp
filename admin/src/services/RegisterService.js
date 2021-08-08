import { RegisterSuccess, RegisterError } from "../redux/actions/RegisterAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";
export const RegisterService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.REGISTER_ENDPOINT, data, null, null, false);
    if (result.status) {
        dispatch(RegisterSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        let token = result.tempAuthenticationLink.split('=')
        window.location.href = "/verification?token=" + token[1];
    } else {
        dispatch(RegisterError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}