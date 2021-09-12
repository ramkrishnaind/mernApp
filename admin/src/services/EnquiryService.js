import * as EnquiryAction from "../redux/actions/EnquiryAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import * as Loader from "../redux/actions/LoaderActions";
export const EnquiryListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.ENQUIRY_LIST_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(EnquiryAction.EnquiryListSuccess(result));
  } catch (error) {
    dispatch(EnquiryAction.EnquiryListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const EnquiryStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.ENQUIRY_STATUS_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(EnquiryAction.EnquiryUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(EnquiryAction.EnquiryUpdateStatusError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};
