
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const menuService = {
    logout,
    addMenu,
    uploadImage,
    getMenuList,
    disableMenu,
    updateMenu,
    deleteMenu,
    getAllMenu,
};
function logout() {
    localStorage.removeItem('menu');
}

function getMenuList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    console.log('authHeader().Authorization',authHeader().Authorization);
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    // return fetch(CONST.BACKEND_URL + `enquiry/getEnquiryRequest`, requestOptions)
    
    return fetch( `http://192.46.214.45:9080/api/v1/client/getAllBanner`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let menuObj = {
                getMenuList: data.data
            }
            console.log("sservice menuObjmenuObjmenuObj", menuObj);
            
            return menuObj;
        });
}
function getAllMenu() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/getAllMenu`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let menuObj = {
                getAllMenu: data.data
            }
            console.log();
            
            return menuObj;
        });
}
function addMenu(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createMenu`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let menuObj = {
                addMenu: data.data
            }
            console.log();
            
            return menuObj;
        });
}
function updateMenu(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateMenu`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let menuObj = {
                addMenu: data.data
            }
            return menuObj;
        });
}
function disableMenu(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateMenuStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let menuObj = {
                addMenu: data.data
            }
            console.log();
            
            return menuObj;
        });
}
function deleteMenu(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteMenu`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let menuObj = {
                addMenu: data.data
            }
            console.log();
            
            return menuObj;
        });
}
function uploadImage(filedata) {

    let header = new Headers({
        "Authorization": authHeader().Authorization
    });
    var data = new FormData();
    data.append('image', filedata);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: data
    }
    return fetch(CONST.BACKEND_URL + `/uploadFile`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let menuObj = {
                filesDetails: res.data
            }
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