import ACTION_KEYS from "../../constants/action-keys";

const initialState = {
  isRequesting: false,
  success: false,
  error: null,
  data: null,
};

const DashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_KEYS.DASHBOARD_ITEM_LIST_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case ACTION_KEYS.DASHBOARD_ITEM_LIST_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        list: payload.data,
      };
    case ACTION_KEYS.DASHBOARD_ITEM_LIST_ERROR:
      return {
        ...state,
        isRequesting: false,
        error: payload.error,
      };

    case ACTION_KEYS.CAREER_DATA_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case ACTION_KEYS.CAREER_DATA_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        success: true,
        careerData: payload.data,
      };
    case ACTION_KEYS.CAREER_DATA_ERROR:
      return {
        ...state,
        isRequesting: false,
        error: payload.error,
      };
    //application

    case ACTION_KEYS.CAREER_APPLICATION_LIST_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case ACTION_KEYS.CAREER_APPLICATION_LIST_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        applicationList: payload.data,
      };
    case ACTION_KEYS.CAREER_APPLICATION_LIST_ERROR:
      return {
        ...state,
        isRequesting: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
