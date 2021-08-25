import ACTION_KEYS from "../../constants/action-keys";
import {AboutUsListService, AboutUsUpdateService, AboutUsDataService } from "../../services/AboutUsService";

/**
 * Call by the Component to make Login Request
 * @param {*} data 
 * @returns 
 */
export const AboutUsListRequestAsync = (data) => {
    return (dispatch) => {
        dispatch(AboutUsListRequest());
        AboutUsListService(dispatch, data);
    }
}

/**
 * Action Creator to dispatch login action
 * @returns 
 */
const AboutUsListRequest = () => {
    return {
        type: ACTION_KEYS.ABOUTUS_LIST_REQUEST,
        payload: null,
    }
}

/**
 * Action Creator to dispatch Success
 * @param {*} data 
 * @returns 
 */
export const AboutUsListSuccess = (data) => {
    return {
        type: ACTION_KEYS.ABOUTUS_LIST_SUCCESS,
        payload: data,
    }
}

/**
 * Action Creator to dispatch error
 * @param {*} data 
 * @returns 
 */
export const AboutUsListError = (data) => {
    return {
        type: ACTION_KEYS.ABOUTUS_LIST_ERROR,
        payload: { error: data },
    }
}


export const AboutUsUpdateRequestAsync = (data) => {
    // console.log('data',data);
    return (dispatch) => {
        dispatch(AboutUsUpdateRequest());
        AboutUsUpdateService(dispatch, data);
    }
}

/**
 * Action Creator to dispatch login action
 * @returns 
 */
const AboutUsUpdateRequest = () => {
    return {
        type: ACTION_KEYS.ABOUTUS_UPDATE_REQUEST,
        payload: null,
    }
}

/**
 * Action Creator to dispatch Success
 * @param {*} data 
 * @returns 
 */
export const AboutUsUpdateSuccess = (data) => {
    return {
        type: ACTION_KEYS.ABOUTUS_UPDATE_SUCCESS,
        payload: data,
    }
}

/**
 * Action Creator to dispatch error
 * @param {*} data 
 * @returns 
 */
export const AboutUsUpdateError = (data) => {
    return {
        type: ACTION_KEYS.ABOUTUS_UPDATE_ERROR,
        payload: { error: data },
    }
}

export const AboutUsDataRequestAsync = (data) => {
    // console.log('data',data);
    return (dispatch) => {
        dispatch(AboutUsDataRequest());
        AboutUsDataService(dispatch, data);
    }
}

/**
 * Action Creator to dispatch login action
 * @returns 
 */
const AboutUsDataRequest = () => {
    return {
        type: ACTION_KEYS.ABOUTUS_DATA_REQUEST,
        payload: null,
    }
}

/**
 * Action Creator to dispatch Success
 * @param {*} data 
 * @returns 
 */
export const AboutUsDataSuccess = (data) => {
    return {
        type: ACTION_KEYS.ABOUTUS_DATA_SUCCESS,
        payload: data,
    }
}

/**
 * Action Creator to dispatch error
 * @param {*} data 
 * @returns 
 */
export const AboutUsDataError = (data) => {
    return {
        type: ACTION_KEYS.ABOUTUS_DATA_ERROR,
        payload: { error: data },
    }
}