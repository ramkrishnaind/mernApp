import { NewPasswordSuccess, NewPasswordError } from "../redux/actions/NewPasswordAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/SnackbarActions";

export const NewPasswordService = async (dispatch, data) => {

  const result = await ApiClient.call(
    ApiClient.REQUEST_METHOD.POST,
    API_ENDPOINTS.NEW_PASSWORD_ENDPOINT,
    data,
    null,
    null,
    false
  );
  if (result.status) {
    dispatch(NewPasswordSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    window.location.href = "/signin";
  } else {
    dispatch(NewPasswordError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
};


