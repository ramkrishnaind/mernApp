
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const themeService = {
    logout,
    addTheme,
    uploadImage,
    getThemeList,
    disableTheme,
    updateTheme,
    deleteTheme,
    getAllTheme,
};
function logout() {
    localStorage.removeItem('theme');
}

function getThemeList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getThemeList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let themeObj = {
                getThemeList: data.data
            }
            console.log();
            
            return themeObj;
        });
}
function getAllTheme() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/getAllTheme`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let themeObj = {
                getAllTheme: data.data
            }
            console.log();
            
            return themeObj;
        });
}
function addTheme(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createTheme`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let themeObj = {
                addTheme: data.data
            }
            console.log();
            
            return themeObj;
        });
}
function updateTheme(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateTheme`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let themeObj = {
                addTheme: data.data
            }
            return themeObj;
        });
}
function disableTheme(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateThemeStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let themeObj = {
                addTheme: data.data
            }
            console.log();
            
            return themeObj;
        });
}
function deleteTheme(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteTheme`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let themeObj = {
                addTheme: data.data
            }
            console.log();
            
            return themeObj;
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
            let themeObj = {
                filesDetails: res.data
            }
            return themeObj;
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