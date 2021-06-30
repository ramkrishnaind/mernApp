import { clientConstants } from '../_constants';
import { clientService } from '../_services';
import { alertActions,userActions } from '.';
export const clientActions = {
    addClient,
    disableClient,
    deleteClient,
    updateClient,
    getAllClient,
    getClientList,
    getUserDetails,
    getAllCountry,
    getAllRoles,
};
function getUserDetails(data) {
    return dispatch => {
        dispatch(request());
        clientService.getUserDetails(data)
            .then(
                client => dispatch(success(client)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: clientConstants.GETALL_USER_DETAILS_REQUEST } }
    function success(client) { return { type: clientConstants.GETALL_USER_DETAILS_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.GETALL_USER_DETAILS_FAILURE, error } }
}
function getClientList(data) {
    return dispatch => {
        dispatch(request());
        clientService.getClientList(data)
            .then(
                client => dispatch(success(client)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: clientConstants.GETALL_CLIENT_REQUEST } }
    function success(client) { return { type: clientConstants.GETALL_CLIENT_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.GETALL_CLIENT_FAILURE, error } }
}
function getAllClient(data) {
    return dispatch => {
        dispatch(request());
        clientService.getAllClient(data)
            .then(
                client => {
                    let returnResppnse=
                    client.getAllClient?client.getAllClient.map(user => ({ value: user.id, label: user.name})):[];
                    let newRespnse={...client,getAllClient:returnResppnse}
                    dispatch(success(newRespnse))
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: clientConstants.GETALL_OPT_CLIENT_REQUEST } }
    function success(client) { return { type: clientConstants.GETALL_OPT_CLIENT_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.GETALL_OPT_CLIENT_FAILURE, error } }
}
function addClient(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        clientService.addClient(data)
            .then(
                client => {
                    dispatch(success(client));
                    dispatch(this.getClientList(tempdata));
                    dispatch(userActions.blankImage());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: clientConstants.ADD_CLIENT_REQUEST } }
    function success(client) { return { type: clientConstants.ADD_CLIENT_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.ADD_CLIENT_FAILURE, error } }
}
function updateClient(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        clientService.updateClient(data)
            .then(
                client => {
                    dispatch(success(client));
                    dispatch(this.getClientList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: clientConstants.UPDATE_CLIENT_REQUEST } }
    function success(client) { return { type: clientConstants.UPDATE_CLIENT_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.UPDATE_CLIENT_FAILURE, error } }
}
function disableClient(data) {
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
        clientService.disableClient(maintempdata)
            .then(
                client => {
                    dispatch(success(client));
                    dispatch(this.getClientList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: clientConstants.DISABLE_CLIENT_REQUEST } }
    function success(client) { return { type: clientConstants.DISABLE_CLIENT_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.DISABLE_CLIENT_FAILURE, error } }
}
function deleteClient(data) {
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
        clientService.deleteClient(maintempdata)
            .then(
                client => {
                    dispatch(success(client));
                    dispatch(this.getClientList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: clientConstants.DELETE_CLIENT_REQUEST } }
    function success(client) { return { type: clientConstants.DELETE_CLIENT_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.DELETE_CLIENT_FAILURE, error } }
}

function getAllCountry() {
    return dispatch => {
        dispatch(request());
        clientService.getAllCountry()
        .then(
            
            client => {
                dispatch(success(client));
            },
            error => {
                dispatch(alertActions.error(error));
                dispatch(failure(error))
            }
        );
    };
    function request() { return { type: clientConstants.GET_COUNTRY_LIST } }
    function success(client) { return { type: clientConstants.GET_COUNTRY_LIST_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.GET_COUNTRY_LIST_FAILURE, error } }
}

function getAllRoles() {
    return dispatch => {
        dispatch(request());
        clientService.getAllRoles()
        .then(
            
            roles => {
                dispatch(success(roles));
            },
            error => {
                dispatch(alertActions.error(error));
                dispatch(failure(error))
            }
        );
    };
    function request() { return { type: clientConstants.GET_ROLE_LIST_REQUEST } }
    function success(userRoles) { return { type: clientConstants.GET_ROLE_LIST_SUCCESS, userRoles } }
    function failure(error) { return { type: clientConstants.GET_ROLE_LIST_FAILURE, error } }
}