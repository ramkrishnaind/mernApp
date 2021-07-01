
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const dashboardService = {
    getAllEmoji,
    adddashboard,
    deletedashboardService,
    getAllResourceList,
    saveAssignResourcedashboard,
    getAssignedResourceList,
    udpateStatus,
    getDashboardUserCount,
    getDashboardOrderCount,
    getLastOrderlist,
    getDashboardUserGraphData
};
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    window.location.href = "#/home"
}

function getDashboardUserGraphData(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    console.log("service orderData", data);
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getDashboardUserGraphData`, requestOptions)
        .then(handleResponse)
        .then(res => {

            let dateData = res.data && res.data.data ? res.data.data.map(a => a.Date) : [];
            let countData = res.data && res.data.data ? res.data.data.map(a => a.count) : [];
            let orderObj = {
                dateData: dateData,
                countData: countData
            }
            console.log(" getDashboardUserGraphData in Service ", orderObj);
            return orderObj;
        });
}
function getLastOrderlist(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    console.log("service orderData", data);
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getLastOrderlist`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let orderObj = {
                dashboardLastOrder: res.data
            }
            console.log(" getLastOrderlist in Service ", orderObj);
            return orderObj;
        });
}

function getDashboardOrderCount(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    console.log("service orderData", data);
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getDashboardOrderCount`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let orderObj = {
                dashboardOrder: res.data
            }
            console.log(" getDashboardOrderCount in Service ", orderObj);
            return orderObj;
        });
}

function getDashboardUserCount(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    // console.log("service dayadtad", data);
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getDashboardUserCount`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                dashboarddata: res.data
            }
            console.log("i am in service getDashboardUserCount ", userObj);
            return userObj;
        });
}
function getAllEmoji(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "GET",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/getAllEmoji`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                dashboarddata: res.data
            }
            return userObj;
        });
}
function adddashboard(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/api/adddashboard`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                adddashboardres: res.data
            }
            return userObj;
        });
}
function deletedashboardService(data) {
    //console.log("Enter into service ", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/api/deletedashboard`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                adddashboardres: res.data
            }
            return userObj;
        });
}
function getAllResourceList() {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/api/listresoures`, requestOptions)
        .then(handleResponse)
        .then(res => {
            console.log(JSON.stringify(res));

            let userObj = {
                listOfResource: res.data
            }
            return userObj;
        });
}
function getAssignedResourceList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/api/getassignrole`, requestOptions)
        .then(handleResponse)
        .then(res => {
            console.log(JSON.stringify(res));

            let userObj = {
                listOfAssignedResource: res.data
            }
            return userObj;
        });
}
function saveAssignResourcedashboard(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/api/assignrole`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                updateResource: res
            }
            return userObj;
        });
}
function udpateStatus(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/api/updatedashboardstatus`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                updatestatus: res.data
            }
            return userObj;
        });
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.msg) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            const error = (data && data.msg) || response.statusText;
            return Promise.reject(error);
        }
        //console.log("datadatadata ", data);

        return data;
    });
}