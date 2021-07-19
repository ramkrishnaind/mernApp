import { GetUserRoleSuccess, GetUserRoleError } from "../redux/actions/CreateUserRoleAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";

export const CreateUserRoleService = async (dispatch, data) => {

    // try {
    //     const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MODULERIGHTS_ENDPOINT, data, null, null, true);
    //     dispatch(GetModuleRightSuccess(result));
    //     console.log("resule==", result)
    // } catch (error) {
    //     dispatch(GetModuleRightsError(error));
    // }
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.CREATE_USER_ROLE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(GetUserRoleSuccess(result));
  } catch (error) {
    dispatch(GetUserRoleError(error));
  }
};
