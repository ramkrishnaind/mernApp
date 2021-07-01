
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const adminService = {
    logout,
    addAdmin,
    getAdminList,
    disableAdmin,
    updateAdmin,
    deleteAdmin,
    getAllAdmin,
    getRoles,
    detailsPageBannerMessageData,
    updateDetailsPageBannerMessage,
    createDetailsPageBannerMessage,
    RequestACallList,
    CloseCallRequest

};
function logout() {
    localStorage.removeItem('currency');
}

function CloseCallRequest(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/CloseCallRequest`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let menuObj = {
                CloseCallRequest: data.data
            }
            console.log();
            
            return menuObj;
        });
}

function RequestACallList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/RequestACallList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let requestedCalls= data.data
            
            return requestedCalls;
        });
}

function createDetailsPageBannerMessage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createDetailsPageBannerMessage`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let menuObj = {
                createDetailsPageBannerMessage: data.data
            }
            console.log();
            
            return menuObj;
        });
}
function updateDetailsPageBannerMessage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateDetailsPageBannerMessage`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let menuObj = {
                updateDetailsPageBannerMessage: data.data
            }
            return menuObj;
        });
}

function detailsPageBannerMessageData(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/detailsPageBannerMessageData`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let pageBannerList= data.data
            
            return pageBannerList;
        });
}

function getRoles(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getUserRoleList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let getRoles= data.data
            
            return getRoles;
        });
}

function getAdminList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAdminList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let getAdminList= data.data
            
            return getAdminList;
        });
}

function getAllAdmin() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/getAllStore`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let menuObj = {
                getAllAdmin: data.data
            }
            console.log();
            return menuObj;
        });
}

function addAdmin(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createAdminUser`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let menuObj = {
                addAdmin: data.data
            }
            console.log();
            
            return menuObj;
        });
}
function updateAdmin(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateAdmin`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let menuObj = {
                addAdmin: data.data
            }
            return menuObj;
        });
}
function disableAdmin(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateAdminStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let menuObj = {
                addAdmin: data.data
            }
            console.log();
            
            return menuObj;
        });
}
function deleteAdmin(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deletesStore`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let menuObj = {
                addAdmin: data.data
            }
            console.log();
            
            return menuObj;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}