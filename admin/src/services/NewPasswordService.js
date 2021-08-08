import { NewPasswordSuccess, NewPasswordError } from "../redux/actions/NewPasswordAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";

export const NewPasswordService = async (dispatch, data) => {
  // alert('hrer')
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.NEW_PASSWORD_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(NewPasswordSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } else {
    dispatch(NewPasswordError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
};
