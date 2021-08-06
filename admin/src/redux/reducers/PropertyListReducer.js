import ACTION_KEYS from "../../constants/action-keys";

const initialState = {
  isRequesting: false,
  success: false,
  error: null || "error",
  data: null,
};

const PropertyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_KEYS.PROPERTY_LIST_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case ACTION_KEYS.PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: payload,
      };
    case ACTION_KEYS.PROPERTY_LIST_ERROR:
      return {
        ...state,
        isRequesting: false,
        error: payload?.error || "error",
      };
    // Add property
    case ACTION_KEYS.PROPERTY_ADD_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case ACTION_KEYS.PROPERTY_ADD_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: payload,
      };
    case ACTION_KEYS.PROPERTY_ADD_ERROR:
      return {
        ...state,
        isRequesting: false,
        error: payload?.error || "error",
      };
    default:
      return state;
  }
};

export default PropertyReducer;
