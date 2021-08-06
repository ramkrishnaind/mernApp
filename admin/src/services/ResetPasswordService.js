import { ResetPasswordSuccess, ResetPasswordError } from "../redux/actions/ResetPasswordAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";

export const ResetPasswordService = async (dispatch, data) => {
  // alert('hrer')
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.RESET_PASSWORD_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(ResetPasswordSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } else {
    dispatch(ResetPasswordError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
};
