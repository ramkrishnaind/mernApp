import ACTION_KEYS from '../../constants/action-keys';
import { ModuleRightsService } from '../../services/ModuleRightsServices';

export const GetModuleRights = () => {
    return {
        type: ACTION_KEYS.MODULE_RIGHTS_REQUEST,
        payload: null,
    }
}

export const GetModuleRightsRequestAsync = (data, token) => {
    console.log("my rights data==", data)
    return (dispatch) => {
        dispatch(GetModuleRights());
        ModuleRightsService(dispatch, data, token);
    }
}

export const GetModuleRightSuccess = () => {
    return {
        type: ACTION_KEYS.MODULE_RIGHTS_SUCCESS,
        payload: null,
    }
}

export const GetModuleRightsError = () => {
    return {
        type: ACTION_KEYS.MODULE_RIGHTS_ERROR,
        payload: null,
    }
}