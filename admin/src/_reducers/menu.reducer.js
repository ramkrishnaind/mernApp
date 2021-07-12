import {
  menuConstants
} from '../_constants';

export function menu(state = {}, action) {

  switch (action.type) {
    case menuConstants.GETALL_MENU_REQUEST:
      return {
        ...state,
        loading: true
      };
    case menuConstants.GETALL_MENU_SUCCESS:
      return {
        ...state,
        addMenuSuccess: false,
        items: action.menu.getMenuList,
        total: action.menu.getMenuList.total
      };
    case menuConstants.GETALL_MENU_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case menuConstants.GETALL_OPT_MENU_REQUEST:
      return {
        ...state,
        loading: true
      };
    case menuConstants.GETALL_OPT_MENU_SUCCESS:
      return {
        ...state,
        getAllMenu: action.menu.getAllMenu
      };
    case menuConstants.GETALL_OPT_MENU_FAILURE:
      return {
        ...state,
        error: action.error
      };

      case menuConstants.ADD_MENU_REQUEST:
      return {
        ...state
      };
    case menuConstants.ADD_MENU_SUCCESS:
      return {
        ...state,
        addMenuSuccess: true
      };
    case menuConstants.ADD_MENU_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case menuConstants.DISABLE_MENU_REQUEST:
      return {
        ...state
      };
    case menuConstants.DISABLE_MENU_SUCCESS:
      return {
        ...state,
        addMenuSuccess: true
      };
    case menuConstants.DISABLE_MENU_FAILURE:
      return {
        ...state,
        error: action.error
      };
  
      case menuConstants.DELETE_MENU_REQUEST:
        return {
          ...state
        };
      case menuConstants.DELETE_MENU_SUCCESS:
        return {
          ...state,
          addMenuSuccess: true
        };
      case menuConstants.DELETE_MENU_FAILURE:
        return {
          ...state,
          error: action.error
        };

        case menuConstants.UPDATE_MENU_REQUEST:
          return {
            ...state
          };
        case menuConstants.UPDATE_MENU_SUCCESS:
          return {
            ...state,
            addMenuSuccess: true
          };
        case menuConstants.UPDATE_MENU_FAILURE:
          return {
            ...state,
            error: action.error
          };
    default:
      return state
  }
}