import { RegisterRequest, RegisterSuccess, RegisterError } from "../redux/actions/RegisterAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/SnackbarActions";

export const RegisterService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.REGISTER_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(RegisterSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(RegisterError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }

}