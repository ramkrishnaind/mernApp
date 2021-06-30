import {
  userConstants
} from '../_constants';

export function users(state = {}, action) {

  switch (action.type) {


    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        items: action.users.getUserList.list,
        total: action.users.getUserList.total
      };
    case userConstants.GETALL_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case userConstants.GET_ALL_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        getAllUser: action.users.getAllUser
      };
    case userConstants.GET_ALL_USER_FAILURE:
      return {
        ...state,
        error: action.error
      };

    //
    case userConstants.GET_ALL_USER_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_USER_ALBUMS_SUCCESS:
      return {
        ...state,
        listofAlbums: action.users.getUseralbums,
        //listOfNotificationtotal: action.users.listOfNotification.total
      };
    case userConstants.GET_ALL_USER_ALBUMS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    //

    case userConstants.GET_ALL_USER_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        listofphotos: action.users.getUserPhoto,
        //listOfNotificationtotal: action.users.listOfNotification.total
      };
    case userConstants.GET_ALL_USER_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.error
      };

    //

    case userConstants.GET_ALL_USER_TODOS_REQUEST:
    return {
      ...state,
      loading: true
    };
  case userConstants.GET_ALL_USER_TODOS_SUCCESS:
    return {
      ...state,
      listofTodos: action.users.getUsertodo
      //listOfNotificationtotal: action.users.listOfNotification.total
    };
  case userConstants.GET_ALL_USER_TODOS_FAILURE:
    return {
      ...state,
      error: action.error
    };

  //    
    case userConstants.GET_ALL_USER_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_USER_POSTS_SUCCESS:
      return {
        ...state,
        listofposts: action.users.getUserpost,
        //listOfNotificationtotal: action.users.listOfNotification.total
      };
    case userConstants.GET_ALL_USER_POSTS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    //
    case userConstants.GET_ALL_USER_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_USER_COMMENTS_SUCCESS:
      return {
        ...state,
        listofcomments: action.users.getUsercomment,

      };
    case userConstants.GET_ALL_USER_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.error
      };

    //
    case userConstants.GETALL_USER_NOTIFY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_USER_NOTIFY_SUCCESS:
      return {
        ...state,
        listOfNotification: action.users.listOfNotification.list,
        listOfNotificationtotal: action.users.listOfNotification.total
      };
    case userConstants.GETALL_USER_NOTIFY_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case userConstants.UPDATE_USER_NOTIFY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.UPDATE_USER_NOTIFY_SUCCESS:
      return {
        ...state,
      };
    case userConstants.UPDATE_USER_NOTIFY_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case userConstants.GET_RESTAURANT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_RESTAURANT_SUCCESS:
      return {
        ...state,
        addMenuSuccess: false,
        addItemSuccess: false,
        updateitem: false,
        updateCategory: false,
        restaurantDetails: action.users.restaurantDetails
      };
    case userConstants.GET_RESTAURANT_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case userConstants.ADD_RESTAURANT_USER_REQUEST:
      return {
        ...state
      };
    case userConstants.ADD_RESTAURANT_USER_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case userConstants.ADD_RESTAURANT_USER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.ADD_MENU_REQUEST:
      return {
        ...state
      };
    case userConstants.ADD_MENU_SUCCESS:
      return {
        ...state,
        addMenuSuccess: true
      };
    case userConstants.ADD_MENU_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case userConstants.ADD_ITEM_REQUEST:
      return {
        ...state
      };
    case userConstants.ADD_ITEM_SUCCESS:
      return {
        ...state,
        addItemSuccess: true
      };
    case userConstants.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case userConstants.UPDATE_CATEGORY_REQUEST:
      return {
        ...state
      };
    case userConstants.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        updateCategory: true
      };
    case userConstants.UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case userConstants.UPDATE_ITEM_REQUEST:
      return {
        ...state
      };
    case userConstants.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        updateitem: true
      };
    case userConstants.UPDATE_ITEM_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case userConstants.FILE_UPLOAD_STATUS_SUCCESS:
      return {
        ...state, filesDetails: action.uploadImage.filesDetails,
      };

      case userConstants.FILE_BULKUPLOAD_STATUS_SUCCESS:
        // debugger
        console.log('test',action);
        return {
          ...state,
          bulkFilesDetails: action.bulkUpload.filesDetails,
        };

    case userConstants.MAIN_FILE_UPLOAD_STATUS_SUCCESS:
      return {
        ...state, UploadedMainImage: action.uploadMainImage.filesDetails,
      };
        
    case userConstants.FILE_UPLOAD_BLANK_SUCCESS:
      return {
        ...state, filesDetails: {},
      };
    case userConstants.FILE_UPLOAD_STATUS_FAILURE:
      return {
        ...state
      };
    case userConstants.FILE_BULKUPLOAD_STATUS_FAILURE:
      return {
        ...state
      };


    case userConstants.STATS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.STATS_SUCCESS:
      return {
        ...state,
        statics: action.users.statics
      };
    case userConstants.STATS_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state
  }
}