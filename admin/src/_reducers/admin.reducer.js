import {
  adminConstants
} from '../_constants';

export function admin(state = {}, action) {

  switch (action.type) {

    case adminConstants.GET_REQUEST_CALL_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case adminConstants.GET_REQUEST_CALL_LIST_SUCCESS:
      console.log('statuad',action);
      return {
        ...state,
        addAdminSuccess: false,
        requestedCalls: action.requestedCalls,
      };
    case adminConstants.GET_REQUEST_CALL_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case adminConstants.GET_PAGE_BANNER_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case adminConstants.GET_PAGE_BANNER_LIST_SUCCESS:
      console.log('statuad',action);
      return {
        ...state,
        addAdminSuccess: false,
        pageBannerList: action.pageBannerList,
      };
    case adminConstants.GET_PAGE_BANNER_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case adminConstants.GET_ADMIN_ROLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case adminConstants.GET_ADMIN_ROLE_SUCCESS:
      return {
        ...state,
        addAdminSuccess: false,
        getRoles: action.roles.list,
      };
    case adminConstants.GET_ADMIN_ROLE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case adminConstants.GETALL_ADMIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case adminConstants.GETALL_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminSuccess: false,
        items: action.admin.list,
      };
    case adminConstants.GETALL_ADMIN_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case adminConstants.GETALL_OPT_ADMIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case adminConstants.GETALL_OPT_ADMIN_SUCCESS:
      return {
        ...state,
        getAllAdmin: action.admin.getAllAdmin
      };
    case adminConstants.GETALL_OPT_ADMIN_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case adminConstants.ADD_ADMIN_REQUEST:
      return {
        ...state
      };
    case adminConstants.ADD_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminSuccess: true
      };
    case adminConstants.ADD_ADMIN_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case adminConstants.DISABLE_ADMIN_REQUEST:
      return {
        ...state
      };
    case adminConstants.DISABLE_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminSuccess: true
      };
    case adminConstants.DISABLE_ADMIN_FAILURE:
      return {
        ...state,
        error: action.error
      };
  
    case adminConstants.DELETE_ADMIN_REQUEST:
      return {
        ...state
      };
    case adminConstants.DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminSuccess: true
      };
    case adminConstants.DELETE_ADMIN_FAILURE:
        return {
          ...state,
          error: action.error
        };

    case adminConstants.UPDATE_ADMIN_REQUEST:
      return {
        ...state
      };
    case adminConstants.UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminSuccess: true
      };
    case adminConstants.UPDATE_ADMIN_FAILURE:
          return {
            ...state,
            error: action.error
          };
    default:
      return state
  }
}