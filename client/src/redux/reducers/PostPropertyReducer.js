import ACTION_KEYS from "../../constants/action-keys";

const initialState = {
  isRequesting: false,
  success: false,
  error: null,
  data: null,
};

const PostPropertyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_KEYS.POST_PROPERTY_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case ACTION_KEYS.POST_PROPERTY_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: payload,
      };
    case ACTION_KEYS.POST_PROPERTY_ERROR:
      return {
        ...state,
        isRequesting: false,
        error: payload.error,
      };
    case ACTION_KEYS.RESET_POST_PROPERTY_RESULT:
      return {
        isRequesting: false,
        success: false,
        error: null,
        data: null,
      }
    default:
      return state;
  }
};

export default PostPropertyReducer;
