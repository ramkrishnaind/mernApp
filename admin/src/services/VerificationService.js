import { VerificationSuccess, VerificationError } from "../redux/actions/VerificationAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";

export const VerificationService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.USER_VERIFICATION_ENDPOINT, data, null, null, true);
    dispatch(VerificationSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    // window.location.href = "/login";
  } catch (error) {
    dispatch(VerificationError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};
