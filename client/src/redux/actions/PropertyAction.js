import ACTION_KEYS from "../../constants/action-keys";
import { PropertyListService, PropertyDetailService } from "../../services/PropertyService";

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