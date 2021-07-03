import {
  themeConstants
} from '../_constants';

export function theme(state = {}, action) {

  switch (action.type) {
    case themeConstants.GETALL_THEME_REQUEST:
      return {
        ...state,
        loading: true
      };
    case themeConstants.GETALL_THEME_SUCCESS:
      return {
        ...state,
        addThemeSuccess: false,
        items: action.theme.getThemeList.list,
        total: action.theme.getThemeList.total
      };
    case themeConstants.GETALL_THEME_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case themeConstants.GETALL_OPT_THEME_REQUEST:
      return {
        ...state,
        loading: true
      };
    case themeConstants.GETALL_OPT_THEME_SUCCESS:
      return {
        ...state,
        getAllTheme: action.theme.getAllTheme
      };
    case themeConstants.GETALL_OPT_THEME_FAILURE:
      return {
        ...state,
        error: action.error
      };

      case themeConstants.ADD_THEME_REQUEST:
      return {
        ...state
      };
    case themeConstants.ADD_THEME_SUCCESS:
      return {
        ...state,
        addThemeSuccess: true
      };
    case themeConstants.ADD_THEME_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case themeConstants.DISABLE_THEME_REQUEST:
      return {
        ...state
      };
    case themeConstants.DISABLE_THEME_SUCCESS:
      return {
        ...state,
        addThemeSuccess: true
      };
    case themeConstants.DISABLE_THEME_FAILURE:
      return {
        ...state,
        error: action.error
      };
  
      case themeConstants.DELETE_THEME_REQUEST:
        return {
          ...state
        };
      case themeConstants.DELETE_THEME_SUCCESS:
        return {
          ...state,
          addThemeSuccess: true
        };
      case themeConstants.DELETE_THEME_FAILURE:
        return {
          ...state,
          error: action.error
        };

        case themeConstants.UPDATE_THEME_REQUEST:
          return {
            ...state
          };
        case themeConstants.UPDATE_THEME_SUCCESS:
          return {
            ...state,
            addThemeSuccess: true
          };
        case themeConstants.UPDATE_THEME_FAILURE:
          return {
            ...state,
            error: action.error
          };
    default:
      return state
  }
}