import * as CareerAction from "../redux/actions/CareerAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";
import * as Loader from "../redux/actions/LoaderActions";
export const CareerListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.CAREER_LIST_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(CareerAction.CareerListSuccess(result));
  } catch (error) {
    dispatch(CareerAction.CareerListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const CareerAddService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.CAREER_ADD_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(CareerAction.CareerAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/career");
    window.location.reload();
  } catch (error) {
    dispatch(CareerAction.CareerAddError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const CareerStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.CAREER_STATUS_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(CareerAction.CareerUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(CareerAction.CareerUpdateStatusError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const CareerUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.CAREER_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(CareerAction.CareerUpdateSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/career");
    window.location.reload();
  } catch (error) {
    dispatch(CareerAction.CareerUpdateError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const CareerDeleteService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.CAREER_DELETE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(CareerAction.CareerDeleteSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(CareerAction.CareerDeleteError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const CareerDataService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.CAREER_DATA_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(CareerAction.CareerDataSuccess(result));
  } catch (error) {
    dispatch(CareerAction.CareerDataError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};
