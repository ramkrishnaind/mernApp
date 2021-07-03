import {
  appsettingConstants
} from '../_constants';

export function appsetting(state = {}, action) {

  switch (action.type) {
    case appsettingConstants.GETALL_APPSETTING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case appsettingConstants.GETALL_APPSETTING_SUCCESS:
      return {
        ...state,
        addAppSettingSuccess: false,
        items: action.appsetting.getAppSettingList.list,
        total: action.appsetting.getAppSettingList.total
      };
    case appsettingConstants.GETALL_APPSETTING_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case appsettingConstants.GETALL_OPT_APPSETTING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case appsettingConstants.GETALL_OPT_APPSETTING_SUCCESS:
      return {
        ...state,
        getAllAppSetting: action.appsetting.getAllAppSetting
      };
    case appsettingConstants.GETALL_OPT_APPSETTING_FAILURE:
      return {
        ...state,
        error: action.error
      };

      case appsettingConstants.ADD_APPSETTING_REQUEST:
      return {
        ...state
      };
    case appsettingConstants.ADD_APPSETTING_SUCCESS:
      return {
        ...state,
        addAppSettingSuccess: true
      };
    case appsettingConstants.ADD_APPSETTING_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case appsettingConstants.DISABLE_APPSETTING_REQUEST:
      return {
        ...state
      };
    case appsettingConstants.DISABLE_APPSETTING_SUCCESS:
      return {
        ...state,
        addAppSettingSuccess: true
      };
    case appsettingConstants.DISABLE_APPSETTING_FAILURE:
      return {
        ...state,
        error: action.error
      };
  
      case appsettingConstants.DELETE_APPSETTING_REQUEST:
        return {
          ...state
        };
      case appsettingConstants.DELETE_APPSETTING_SUCCESS:
        return {
          ...state,
          addAppSettingSuccess: true
        };
      case appsettingConstants.DELETE_APPSETTING_FAILURE:
        return {
          ...state,
          error: action.error
        };

        case appsettingConstants.UPDATE_APPSETTING_REQUEST:
          return {
            ...state
          };
        case appsettingConstants.UPDATE_APPSETTING_SUCCESS:
          return {
            ...state,
            addAppSettingSuccess: true
          };
        case appsettingConstants.UPDATE_APPSETTING_FAILURE:
          return {
            ...state,
            error: action.error
          };
    default:
      return state
  }
}