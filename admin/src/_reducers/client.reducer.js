import {
  clientConstants
} from '../_constants';

export function client(state = {}, action) {

  switch (action.type) {
    case clientConstants.GETALL_CLIENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case clientConstants.GETALL_CLIENT_SUCCESS:
      return {
        ...state,
        addClientSuccess: false,
        items: action.client.getClientList.list,
        total: action.client.getClientList.total
      };
    case clientConstants.GETALL_CLIENT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case clientConstants.GETALL_USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case clientConstants.GETALL_USER_DETAILS_SUCCESS:
      return {
        ...state,
        addClientSuccess: false,
        UserDetailsitems: action.client.getUserDetails,
        UserDetailstotal: action.client.getUserDetails
      };
    case clientConstants.GETALL_USER_DETAILS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case clientConstants.GETALL_OPT_CLIENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case clientConstants.GETALL_OPT_CLIENT_SUCCESS:
      return {
        ...state,
        getAllClient: action.client.getAllClient
      };
    case clientConstants.GETALL_OPT_CLIENT_FAILURE:
      return {
        ...state,
        error: action.error
      };

      case clientConstants.ADD_CLIENT_REQUEST:
      return {
        ...state
      };
    case clientConstants.ADD_CLIENT_SUCCESS:
      return {
        ...state,
        addClientSuccess: true
      };
    case clientConstants.ADD_CLIENT_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case clientConstants.DISABLE_CLIENT_REQUEST:
      return {
        ...state
      };
    case clientConstants.DISABLE_CLIENT_SUCCESS:
      return {
        ...state,
        addClientSuccess: true
      };
    case clientConstants.DISABLE_CLIENT_FAILURE:
      return {
        ...state,
        error: action.error
      };
  
      case clientConstants.DELETE_CLIENT_REQUEST:
        return {
          ...state
        };
      case clientConstants.DELETE_CLIENT_SUCCESS:
        return {
          ...state,
          addClientSuccess: true
        };
      case clientConstants.DELETE_CLIENT_FAILURE:
        return {
          ...state,
          error: action.error
        };

        case clientConstants.UPDATE_CLIENT_REQUEST:
          return {
            ...state
          };
        case clientConstants.UPDATE_CLIENT_SUCCESS:
          return {
            ...state,
            addClientSuccess: true
          };
        case clientConstants.UPDATE_CLIENT_FAILURE:
          return {
            ...state,
            error: action.error
          };

        case clientConstants.GET_ROLE_LIST_REQUEST:
          return {
            ...state,
            loading: true
          };
        case clientConstants.GET_ROLE_LIST_SUCCESS:
          return {
            ...state,
            addClientSuccess: false,
            userRoleList: action.userRoles.list,            
          };
        case clientConstants.GET_ROLE_LIST_FAILURE:
          return {
            ...state,
            error: action.error
          };
    default:
      return state
  }
}