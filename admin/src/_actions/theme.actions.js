import { themeConstants } from '../_constants';
import { themeService } from '../_services';
import { alertActions } from '.';
export const themeActions = {
    addTheme,
    disableTheme,
    deleteTheme,
    updateTheme,
    getAllTheme,
    getThemeList
};
function getThemeList(data) {
    return dispatch => {
        dispatch(request());
        themeService.getThemeList(data)
            .then(
                theme => dispatch(success(theme)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: themeConstants.GETALL_THEME_REQUEST } }
    function success(theme) { return { type: themeConstants.GETALL_THEME_SUCCESS, theme } }
    function failure(error) { return { type: themeConstants.GETALL_THEME_FAILURE, error } }
}
function getAllTheme(data) {
    return dispatch => {
        dispatch(request());
        themeService.getAllTheme(data)
            .then(
                theme => {
                    let returnResppnse=
                    theme.getAllTheme?theme.getAllTheme.map(user => ({ value: user.id, label: user.name})):[];
                    let newRespnse={...theme,getAllTheme:returnResppnse}
                    dispatch(success(newRespnse))
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: themeConstants.GETALL_OPT_THEME_REQUEST } }
    function success(theme) { return { type: themeConstants.GETALL_OPT_THEME_SUCCESS, theme } }
    function failure(error) { return { type: themeConstants.GETALL_OPT_THEME_FAILURE, error } }
}
function addTheme(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        themeService.addTheme(data)
            .then(
                theme => {
                    dispatch(success(theme));
                    dispatch(this.getThemeList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: themeConstants.ADD_THEME_REQUEST } }
    function success(theme) { return { type: themeConstants.ADD_THEME_SUCCESS, theme } }
    function failure(error) { return { type: themeConstants.ADD_THEME_FAILURE, error } }
}
function updateTheme(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        themeService.updateTheme(data)
            .then(
                theme => {
                    dispatch(success(theme));
                    dispatch(this.getThemeList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: themeConstants.UPDATE_THEME_REQUEST } }
    function success(theme) { return { type: themeConstants.UPDATE_THEME_SUCCESS, theme } }
    function failure(error) { return { type: themeConstants.UPDATE_THEME_FAILURE, error } }
}
function disableTheme(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    let maintempdata = {
        id:data.id
    }
    return dispatch => {
        dispatch(request());
        themeService.disableTheme(maintempdata)
            .then(
                theme => {
                    dispatch(success(theme));
                    dispatch(this.getThemeList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: themeConstants.DISABLE_THEME_REQUEST } }
    function success(theme) { return { type: themeConstants.DISABLE_THEME_SUCCESS, theme } }
    function failure(error) { return { type: themeConstants.DISABLE_THEME_FAILURE, error } }
}
function deleteTheme(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    let maintempdata = {
        id:data.id
    }
    return dispatch => {
        dispatch(request());
        themeService.deleteTheme(maintempdata)
            .then(
                theme => {
                    dispatch(success(theme));
                    dispatch(this.getThemeList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: themeConstants.DELETE_THEME_REQUEST } }
    function success(theme) { return { type: themeConstants.DELETE_THEME_SUCCESS, theme } }
    function failure(error) { return { type: themeConstants.DELETE_THEME_FAILURE, error } }
}
