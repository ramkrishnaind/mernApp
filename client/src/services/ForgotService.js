import { ForgotSuccess, ForgotError } from "../redux/actions/ForgotAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/SnackbarActions";

export const ForgotService = async (dispatch, data) => {
  const result = await ApiClient.call(
    ApiClient.REQUEST_METHOD.POST,
    API_ENDPOINTS.FORGOT_PASSWORD_ENDPOINT,
    data,
    null,
    null,
    false
  );

  if (result.status) {
    dispatch(ForgotSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));

    let token = result.tempAuthenticationLink.split('=')
    window.location.href = "/setnewpassword?token=" + token[1];
  } else {
    dispatch(ForgotError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
};


