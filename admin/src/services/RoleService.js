import * as RoleAction from "../redux/actions/RoleAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";

export const RoleListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_LIST_ENDPOINT, data, null, null, true);
    dispatch(RoleAction.RoleListSuccess(result));

  } catch (error) {
    dispatch(RoleAction.RoleListError(error));
  }
}

export const RoleAddService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_ADD_ENDPOINT, data, null, null, true);
    dispatch(RoleAction.RoleAddSuccess(result));
  } catch (error) {
    dispatch(RoleAction.RoleAddError(error));
  }
}

export const RoleStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    dispatch(RoleAction.RoleUpdateStatusSuccess(result));
  } catch (error) {
    dispatch(RoleAction.RoleUpdateStatusError(error));
  }
}

export const RoleUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_UPDATE_ENDPOINT, data, null, null, true);
    dispatch(RoleAction.RoleUpdateSuccess(result));
  } catch (error) {
    dispatch(RoleAction.RoleUpdateError(error));
  }
}

export const RoleDeleteService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_DELETE_ENDPOINT, data, null, null, true);
    dispatch(RoleAction.RoleDeleteSuccess(result));
  } catch (error) {
    dispatch(RoleAction.RoleDeleteError(error));
  }
}

export const RoleDataService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_DATA_ENDPOINT, data, null, null, true);
    dispatch(RoleAction.RoleDataSuccess(result));
  } catch (error) {
    dispatch(RoleAction.RoleDataError(error));
  }
}

export const RoleMenuListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENULIST_ENDPOINT, data, null, null, true);
    dispatch(RoleAction.RoleMenuListSuccess(result));

  } catch (error) {
    dispatch(RoleAction.RoleMenuListError(error));
  }
}
