
import { authHeader } from '../_helpers';
import { CONST } from '../_config';
// require('dotenv').config()

export const userService = {
    login,
    registerAdmin,
    logout,
    addUser,
    uploadImage,
    getUserList,
    disableUser,
    updateUser,
    deleteUser,
    getAllUser,
    // getUserposts,
    // getUsercomments,
    // getUserAlbums,
    // getUserPhotos,
    // getUsertodos,
    // getUsers,
    uploadImageLogo,
    bulkUploadProduct,

};
function logout() {
    localStorage.removeItem('user');
}
function login(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user.data
            }
            if (user.data) {
                localStorage.setItem('user', JSON.stringify(user.data));
            }

            return userObj;
        });
}

function registerAdmin(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `users/signup`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user.data
            }
            return userObj;
        });
}

function getUserList(data) {
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
            let userObj = {
                getUserList: data.data
            }
            console.log();

            return userObj;
        });
}
// function getUserposts(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         // headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 getUserpost: data
//             }
//             console.log("WE are in serice ",userObj);

//             return userObj;
//         });
// } 

// function getUsercomments(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         // headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch("https://jsonplaceholder.typicode.com/comments", requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 getUsercomment: data
//             }
//             console.log("WE are in serice ",userObj);

//             return userObj;
//         });
// }

// function getUserAlbums(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         // headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch("https://jsonplaceholder.typicode.com/albums", requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 getUseralbums: data
//             }
//             console.log("WE are in serice ",userObj);

//             return userObj;
//         });
// }
// function getUserPhotos(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         // headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch("https://jsonplaceholder.typicode.com/photos", requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 getUserPhoto: data
//             }
//             console.log("WE are in serice ",userObj);

//             return userObj;
//         });
// }

// function getUsertodos(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         // headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 getUsertodo: data
//             }
//             console.log("WE are in serice ",userObj);

//             return userObj;
//         });
// }


// function getUsers(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         // headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 getUsers: data
//             }
//             console.log("WE are in serice ",userObj);

//             return userObj;
//         });
// }


function getAllUser() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/getAllUser`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                getAllUser: data.data
            }
            console.log();

            return userObj;
        });
}
function addUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createUser`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                addUser: data.data
            }
            console.log();

            return userObj;
        });
}
function updateUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateUser`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                addUser: data.data
            }
            return userObj;
        });
}
function disableUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                addUser: data.data
            }
            console.log();

            return userObj;
        });
}
function deleteUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteUser`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                addUser: data.data
            }
            console.log();

            return userObj;
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
    return fetch(CONST.BACKEND_URL + `/uploadImage`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                filesDetails: res.data
            }
            return userObj;
        });
}

function bulkUploadProduct(filedata) {

    let header = new Headers({
        "Authorization": authHeader().Authorization
    });
    var data = new FormData();
    data.append('fileName', filedata);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: data
    }
    return fetch(CONST.BACKEND_URL + `/bulkUploadProducts`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                filesDetails: res
            }
            return userObj;
        });
}

function uploadImageLogo(filedata) {

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
            let userObj = {
                filesDetailsLogo: res.data
            }
            return userObj;
        });
}

function handleResponse(response) {
    // console.log("response22222   ", response);

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            console.log("datadatadata ", response);

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        //console.log("datadatadatadatadata   ", data.error);
        if (data.error) {
            console.log("datadatadatadatadata   ", data);
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}