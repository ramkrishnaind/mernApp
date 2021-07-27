import * as CareerAction from "../redux/actions/CareerAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const CareerListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_LIST_ENDPOINT, data, null, null, true);
        dispatch(CareerAction.CareerListSuccess(result));
    } catch (error) {
        dispatch(CareerAction.CareerListError(error));
    }
}

export const CareerAddService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_ADD_ENDPOINT, data, null, null, true);
        dispatch(CareerAction.CareerAddSuccess(result));
    } catch (error) {
        dispatch(CareerAction.CareerAddError(error));
    }
}

export const CareerStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(CareerAction.CareerUpdateStatusSuccess(result));
    } catch (error) {
        dispatch(CareerAction.CareerUpdateStatusError(error));
    }
}

export const CareerUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(CareerAction.CareerUpdateSuccess(result));
    } catch (error) {
        dispatch(CareerAction.CareerUpdateError(error));
    }
}

export const CareerDeleteService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_DELETE_ENDPOINT, data, null, null, true);
        dispatch(CareerAction.CareerDeleteSuccess(result));
    } catch (error) {
        dispatch(CareerAction.CareerDeleteError(error));
    }
}

export const CareerDataService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.CAREER_DATA_ENDPOINT, data, null, null, true);
        dispatch(CareerAction.CareerDataSuccess(result));
    } catch (error) {
        dispatch(CareerAction.CareerDataError(error));
    }
}


