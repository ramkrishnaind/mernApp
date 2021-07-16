import { GetModuleRightSuccess, GetModuleRightsError } from "../redux/actions/ModuleRightsAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";

export const ModuleRightsService = async (dispatch, data, token) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.MODULERIGHTS_ENDPOINT,
      null,
      null,
      null,
      true,
      token
    );
    dispatch(GetModuleRightSuccess(result));
  } catch (error) {
    dispatch(GetModuleRightsError(error));
  }
};
