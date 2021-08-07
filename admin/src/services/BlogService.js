import * as BlogAction from "../redux/actions/BlogAction"
import ApiClient from '../api-client';
import API_ENDPOINTS from '../constants/api-endpoints';
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const BlogListService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_LIST_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(BlogAction.BlogListSuccess(result));
    } else {
        dispatch(BlogAction.BlogListError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const BlogAddService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_ADD_ENDPOINT, data, null, null, true);

    if (result.status) {
        dispatch(BlogAction.BlogAddSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/blog')
        window.location.reload();
    } else {
        dispatch(BlogAction.BlogAddError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const BlogStatusUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(BlogAction.BlogUpdateStatusSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(BlogAction.BlogUpdateStatusError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const BlogUpdateService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_UPDATE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(BlogAction.BlogUpdateSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
        history.push('/blog')
        window.location.reload();
    } else {
        dispatch(BlogAction.BlogUpdateError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const BlogDeleteService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_DELETE_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(BlogAction.BlogDeleteSuccess(result));
        dispatch(Snackbar.showSuccessSnackbar(result.message));
    } else {
        dispatch(BlogAction.BlogDeleteError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}

export const BlogDataService = async (dispatch, data) => {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.BLOG_DATA_ENDPOINT, data, null, null, true);
    if (result.status) {
        dispatch(BlogAction.BlogDataSuccess(result));
    } else {
        dispatch(BlogAction.BlogDataError(result));
        dispatch(Snackbar.showFailSnackbar(result.message));
    }
}


