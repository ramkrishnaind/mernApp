import { ForgotSuccess, ForgotError } from "../redux/actions/ForgotAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";

export const ForgotService = async (dispatch, data) => {
  // alert('hrer')
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.FORGOT_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(ForgotSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } else {
    dispatch(ForgotError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
};
