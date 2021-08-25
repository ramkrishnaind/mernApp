import ACTION_KEYS from '../../constants/action-keys';
import { ModuleRightsService } from '../../services/ModuleRightsServices';

/**
 * Call by the Component to make Login Request
 * @param {*} data 
 * @returns 
 */
export const GetModuleRightsRequestAsync = (data) => {
    console.log("data is", data)
    return (dispatch) => {
        dispatch(GetModuleRights());
        ModuleRightsService(dispatch, data);
    }
}

/**
 * Action Creator to dispatch login action
 * @returns 
 */
export const GetModuleRights = () => {
    return {
        type: ACTION_KEYS.MODULE_RIGHTS_REQUEST,
        payload: null,
    }
}

/**
 * Action Creator to dispatch Success
 * @param {*} data 
 * @returns 
 */
export const GetModuleRightSuccess = (data) => {
    console.log("data== sucess", data)
    return {
        type: ACTION_KEYS.MODULE_RIGHTS_SUCCESS,
        payload: data,
    }
}

/**
 * Action Creator to dispatch error
 * @param {*} data 
 * @returns 
 */
export const GetModuleRightsError = (data) => {
    return {
        type: ACTION_KEYS.MODULE_RIGHTS_ERROR,
        payload: { error: data },
    }
}


