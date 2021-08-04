import { LoginSuccess, LoginError } from "../redux/actions/LoginAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
export const LoginService = async (dispatch, data) => {
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.LOGIN_ENDPOINT, data, null, null, true);
  if (result.status) {
    window.localStorage.setItem('user', JSON.stringify(result.user));
    dispatch(LoginSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    window.location.href = "/home";
  } else {
    dispatch(LoginError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
};
