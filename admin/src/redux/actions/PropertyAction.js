import ACTION_KEYS from '../../constants/action-keys';
import { PropertyListService } from '../../services/PropertyService';

export const GetPropertyList = () => {
    return {
        type: ACTION_KEYS.PROPERTY_LIST_REQUEST,
        payload: null,
    }
}

export const GetPropertyListRequestAsync = (data) => {
    return (dispatch) => {
        dispatch(GetPropertyList());
        PropertyListService(dispatch, data);
    }
}

export const GetPropertyListSuccess = () => {
    return {
        type: ACTION_KEYS.PROPERTY_LIST_SUCCESS,
        payload: null,
    }
}

export const GetPropertyListError = () => {
    return {
        type: ACTION_KEYS.PROPERTY_LIST_ERROR,
        payload: null,
    }
}