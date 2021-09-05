import ACTION_KEYS from "../../constants/action-keys";

const initialState = {
  isRequesting: false,
  success: false,
  error: null,
  data: null,
};

const ServiceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_KEYS.SERVICE_LIST_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case ACTION_KEYS.SERVICE_LIST_SUCCESS:
      // let data = [];
      // data[0] = payload?.data;
      return {
        ...state,
        isRequesting: false,
        list: payload?.data,
      };
    case ACTION_KEYS.SERVICE_LIST_ERROR:
      return {
        ...state,
        isRequesting: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default ServiceReducer;
