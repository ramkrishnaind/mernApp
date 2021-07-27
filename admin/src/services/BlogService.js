import * as BlogAction from "../redux/actions/BlogAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';

export const BlogListService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_LIST_ENDPOINT, data, null, null, true);
        dispatch(BlogAction.BlogListSuccess(result));
    } catch (error) {
        dispatch(BlogAction.BlogListError(error));
    }
}

export const BlogAddService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_ADD_ENDPOINT, data, null, null, true);
        dispatch(BlogAction.BlogAddSuccess(result));
    } catch (error) {
        dispatch(BlogAction.BlogAddError(error));
    }
}

export const BlogStatusUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_STATUS_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(BlogAction.BlogUpdateStatusSuccess(result));
    } catch (error) {
        dispatch(BlogAction.BlogUpdateStatusError(error));
    }
}

export const BlogUpdateService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_UPDATE_ENDPOINT, data, null, null, true);
        dispatch(BlogAction.BlogUpdateSuccess(result));
    } catch (error) {
        dispatch(BlogAction.BlogUpdateError(error));
    }
}

export const BlogDeleteService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_DELETE_ENDPOINT, data, null, null, true);
        dispatch(BlogAction.BlogDeleteSuccess(result));
    } catch (error) {
        dispatch(BlogAction.BlogDeleteError(error));
    }
}

export const BlogDataService = async (dispatch, data) => {
    try {
        const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_DATA_ENDPOINT, data, null, null, true);
        dispatch(BlogAction.BlogDataSuccess(result));
    } catch (error) {
        dispatch(BlogAction.BlogDataError(error));
    }
}


