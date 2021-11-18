import ACTION_KEYS from "../../constants/action-keys";
import { PropertyListService, PropertyDetailService, PostPropertyService, AddPropertyService,UploadPropertyImageService } from "../../services/PropertyService";

/**
 * ****** Actions - Property List
 */
export const GetPropertyListRequestAsync = (data) => {
    return (dispatch) => {
        dispatch(GetPropertyListRequest());
        PropertyListService(dispatch, data);
    }
}

const GetPropertyListRequest = () => {
    return {
        type: ACTION_KEYS.GET_PROPERTY_LIST_REQUEST,
        payload: null,
    }
}

export const GetPropertyListSuccess = (data) => {
    return {
        type: ACTION_KEYS.GET_PROPERTY_LIST_SUCCESS,
        payload: data,
    }
}

export const GetPropertyListError = (data) => {
    return {
        type: ACTION_KEYS.GET_PROPERTY_LIST_ERROR,
        payload: {error: data},
    }
}

/**
 * ****** Actions - Property Detail
 */
 export const GetPropertyDetailRequestAsync = (data) => {
    return (dispatch) => {
        dispatch(GetPropertyDetailRequest());
        PropertyDetailService(dispatch, data);
        return data;
    }
}


const GetPropertyDetailRequest = () => {
    return {
        type: ACTION_KEYS.GET_PROPERTY_DETAIL_REQUEST,
        payload: null,
    }
}

export const GetPropertyDetailSuccess = (data) => {
    return {
        type: ACTION_KEYS.GET_PROPERTY_DETAIL_SUCCESS,
        payload: data,
    }
}

export const GetPropertyDetailError = (data) => {
    return {
        type: ACTION_KEYS.GET_PROPERTY_DETAIL_ERROR,
        payload: {error: data},
    }
}

/**
 *  ******** Actions - Post Property
 */
export const PostPropertyRequestAsync = (data) => {
    return (dispatch) => {
        dispatch(PostPropertyRequest());
        AddPropertyService(dispatch, data);
    }
}

export const AddPropertyRequestAsync = (data) => {
    return (dispatch) => {
        dispatch(PostPropertyRequest());
        AddPropertyService(dispatch, data);
    }
}

export const UploadPropertyImageRequestAsync = (data) => {
    return (dispatch) => {
        dispatch(PostPropertyRequest());
        UploadPropertyImageService(dispatch, data);
    }
}

const PostPropertyRequest = () => {
    return {
        type: ACTION_KEYS.POST_PROPERTY_REQUEST,
        payload: null
    }
}

export const PostPropertySuccess = data => {
    return {
        type: ACTION_KEYS.POST_PROPERTY_SUCCESS,
        payload: data,
    }
}

export const PostPropertyError = data => {
    return {
        type: ACTION_KEYS.POST_PROPERTY_ERROR,
        payload: {error: data}
    }
}

export const RestPostPropertyResult = () => {
    return {
        type: ACTION_KEYS.RESET_POST_PROPERTY_RESULT
    }
}
export const RestPostPropertySuccess = () => {
    return {
        type: ACTION_KEYS.RESET_POST_PROPERTY_SUCCESS_REQUEST
    }
}