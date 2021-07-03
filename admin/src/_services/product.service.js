
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const productService = {
    logout,
    addProduct,
    uploadImage,
    getProductList,
    disableProduct,
    updateProduct,
    deleteProduct,
    getAllProduct,
    getAllMenuList,
    getAllCategoryList,
    getProductDetail,
    getSubCategoryList,
    getProductSizeList,
    getAllGST,
    getAllProductMaterial,
    getAllProductColor,
    getAllExclusiveType
};
function logout() {
    localStorage.removeItem('product');
}

function getProductList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getProductList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let productObj = {
                getProductList: data.data
            }
            console.log();
            
            return productObj;
        });
}

function getAllMenuList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllMenu`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let menuObj = {
                getMenuList: data.data
            }
            console.log();
            
            return menuObj;
        });
}

function getAllCategoryList() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/getAllCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let catObj = {
                getCategoryList: data.data
            }
            console.log();
            
            return catObj;
        });
}



function getProductSizeList() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/getProductSizeList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let productSizeList = data.data
            
            return productSizeList;
        });
}

function getAllGST() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/getAllGST`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let allGST = data.data
            
            return allGST;
        });
}

function getSubCategoryList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getSubCategorybyCategoryId`, requestOptions)
        .then(handleResponse)
        .then(data => {
                let getSubCategoryListData= data.data
            return getSubCategoryListData;
        });
}

function getProductDetail(data) {
   
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/client/productView`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let catObj = {
                getProductDetail: data.data
            }
            console.log();
            
            return catObj;
        });
}

function getAllProduct() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/getAllProduct`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let productObj = {
                getAllProduct: data.data
            }
            console.log();
            
            return productObj;
        });
}
function addProduct(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createProduct2`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let productObj = {
                addProduct: data.data
            }
            console.log();
            
            return productObj;
        });
}
function updateProduct(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateProduct`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let productObj = {
                addProduct: data.data
            }
            return productObj;
        });
}
function disableProduct(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateProductStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let productObj = {
                addProduct: data.data
            }
            console.log();
            
            return productObj;
        });
}
function deleteProduct(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteProduct`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let productObj = {
                addProduct: data.data
            }
            console.log();
            
            return productObj;
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
            let productObj = {
                filesDetails: res.data
            }
            return productObj;
        });
}

function getAllProductColor() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/getAllProductColor`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let allColor = data.data
            return allColor;
        });
}

function getAllProductMaterial() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/getAllProductMaterial`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let allMaterial = data.data
            
            return allMaterial;
        });
}

function getAllExclusiveType() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/getAllExclusiveType`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let exclusive = data.data
            return exclusive;
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