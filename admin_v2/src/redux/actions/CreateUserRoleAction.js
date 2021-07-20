import ACTION_KEYS from '../../constants/action-keys';
import { CreateUserRoleService } from '../../services/CreateUserRoleService';

/**
 * Call by the Component to make Login Request
 * @param {*} data 
 * @returns 
 */
export const GetCreateUserRoleActionRequestAsync = (data) => {
    console.log("data====", data)
    return (dispatch) => {
        dispatch(GetUserRoleRequest());
        CreateUserRoleService(dispatch, data);
    }
}

/**
 * Action Creator to dispatch login action
 * @returns 
 */
 export const GetUserRoleRequest = () => {
    return {
        type: ACTION_KEYS.USER_ROLE_REQUEST,
        payload: null,
    }
}

/**
 * Action Creator to dispatch Success
 * @param {*} data 
 * @returns 
 */
export const GetUserRoleSuccess = (data) => {
    console.log("data== sucess", data)
    return {
        type: ACTION_KEYS.USER_ROLE_SUCCESS,
        payload: data,
    }
}

/**
 * Action Creator to dispatch error
 * @param {*} data 
 * @returns 
 */
export const GetUserRoleError = (data) => {
    return {
        type: ACTION_KEYS.USER_ROLE_ERROR,
        payload: {error: data},
    }
}


