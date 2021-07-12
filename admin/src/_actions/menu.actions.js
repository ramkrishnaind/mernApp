import { menuConstants } from '../_constants';
import { menuService } from '../_services';
import { alertActions } from '.';
export const menuActions = {
    addMenu,
    disableMenu,
    deleteMenu,
    updateMenu,
    getAllMenu,
    getMenuList
};
function getMenuList(data) {
    return dispatch => {
        dispatch(request());
        menuService.getMenuList(data)
            .then(
                menu => dispatch(success(menu)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: menuConstants.GETALL_MENU_REQUEST } }
    function success(menu) { return { type: menuConstants.GETALL_MENU_SUCCESS, menu } }
    function failure(error) { return { type: menuConstants.GETALL_MENU_FAILURE, error } }
}
function getAllMenu(data) {
    return dispatch => {
        dispatch(request());
        menuService.getAllMenu(data)
            .then(
                menu => {
                    let returnResppnse=
                    menu.getAllMenu?menu.getAllMenu.map(user => ({ value: user.id, label: user.name})):[];
                    let newRespnse={...menu,getAllMenu:returnResppnse}
                    dispatch(success(newRespnse))
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: menuConstants.GETALL_OPT_MENU_REQUEST } }
    function success(menu) { return { type: menuConstants.GETALL_OPT_MENU_SUCCESS, menu } }
    function failure(error) { return { type: menuConstants.GETALL_OPT_MENU_FAILURE, error } }
}
function addMenu(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        menuService.addMenu(data)
            .then(
                menu => {
                    dispatch(success(menu));
                    dispatch(this.getMenuList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: menuConstants.ADD_MENU_REQUEST } }
    function success(menu) { return { type: menuConstants.ADD_MENU_SUCCESS, menu } }
    function failure(error) { return { type: menuConstants.ADD_MENU_FAILURE, error } }
}
function updateMenu(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        menuService.updateMenu(data)
            .then(
                menu => {
                    dispatch(success(menu));
                    dispatch(this.getMenuList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: menuConstants.UPDATE_MENU_REQUEST } }
    function success(menu) { return { type: menuConstants.UPDATE_MENU_SUCCESS, menu } }
    function failure(error) { return { type: menuConstants.UPDATE_MENU_FAILURE, error } }
}
function disableMenu(data) {
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
        menuService.disableMenu(maintempdata)
            .then(
                menu => {
                    dispatch(success(menu));
                    dispatch(this.getMenuList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: menuConstants.DISABLE_MENU_REQUEST } }
    function success(menu) { return { type: menuConstants.DISABLE_MENU_SUCCESS, menu } }
    function failure(error) { return { type: menuConstants.DISABLE_MENU_FAILURE, error } }
}
function deleteMenu(data) {
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
        menuService.deleteMenu(maintempdata)
            .then(
                menu => {
                    dispatch(success(menu));
                    dispatch(this.getMenuList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: menuConstants.DELETE_MENU_REQUEST } }
    function success(menu) { return { type: menuConstants.DELETE_MENU_SUCCESS, menu } }
    function failure(error) { return { type: menuConstants.DELETE_MENU_FAILURE, error } }
}
