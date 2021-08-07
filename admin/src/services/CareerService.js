import * as CareerAction from "../redux/actions/CareerAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const CareerListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_LIST_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(CareerAction.CareerListSuccess(result));
    } else {
        dispatch(CareerAction.CareerListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const CareerAddService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_ADD_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(CareerAction.CareerAddSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/career')
        window.location.reload();
    } else {
        dispatch(CareerAction.CareerAddError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const CareerStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(CareerAction.CareerUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(CareerAction.CareerUpdateStatusError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const CareerUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(CareerAction.CareerUpdateSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/career')
        window.location.reload();
    } else {
        dispatch(CareerAction.CareerUpdateError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const CareerDeleteService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_DELETE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(CareerAction.CareerDeleteSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(CareerAction.CareerDeleteError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const CareerDataService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_DATA_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(CareerAction.CareerDataSuccess(result));
    } else {
        dispatch(CareerAction.CareerDataError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}


