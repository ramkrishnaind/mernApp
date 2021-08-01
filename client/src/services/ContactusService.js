import { ContactusSuccess, ContactusError } from "../redux/actions/ContactusAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";

export const ContactusService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.CONTACTUS_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ContactusSuccess(result));
  } catch (error) {
    dispatch(ContactusError(error));
  }
};
