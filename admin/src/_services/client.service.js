
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const clientService = {
    logout,
    addClient,
    uploadImage,
    getClientList,
    disableClient,
    updateClient,
    deleteClient,
    getAllClient,
    getUserDetails,
    getAllCountry,
    getAllRoles
};
function logout() {
    localStorage.removeItem('client');
}

function getUserDetails(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getUserDetails`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let clientObj = {
                getUserDetails: data.data
            }
            console.log("i am in service getUserDetails ::::",clientObj); 

            return clientObj;
        });
}
function getClientList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getUserList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let clientObj = {
                getClientList: data.data
            }
            console.log();

            return clientObj;
        });
}

function getAllClient() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/getAllClient`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let clientObj = {
                getAllClient: data.data
            }
            console.log();

            return clientObj;
        });
}
function addClient(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/client/registerClient`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let clientObj = {
                addClient: data.data
            }
            console.log();

            return clientObj;
        });
}
function updateClient(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateClient`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let clientObj = {
                addClient: data.data
            }
            return clientObj;
        });
}
function disableClient(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateClientStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let clientObj = {
                addClient: data.data
            }
            console.log();

            return clientObj;
        });
}
function deleteClient(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteClient`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let clientObj = {
                addClient: data.data
            }
            console.log();

            return clientObj;
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
            let clientObj = {
                filesDetails: res.data
            }
            return clientObj;
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

function getAllCountry() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/client/countrylist`,requestOptions)
        .then(handleResponse)
        .then(data => {
            let clientObj = {
                getCountryList: data.data
            }
            return clientObj;
        });
}

function getAllRoles() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/getUserRoleList`,requestOptions)
        .then(handleResponse)
        .then(data => {
            let getAllRoles= data.data
            return getAllRoles;
        });
}