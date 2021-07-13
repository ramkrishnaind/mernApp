import { LoginSuccess, LoginError } from "../redux/actions/LoginAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";

export const LoginService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.LOGIN_ENDPOINT,
      data,
      null,
      null,
      false
    );
    dispatch(LoginSuccess(result));
  } catch (error) {
    dispatch(LoginError(error));
  }
};
