import { productConstants } from '../_constants';
import { productService } from '../_services';
import { alertActions } from '.';

export const productActions = {
    addProduct,
    disableProduct,
    deleteProduct,
    updateProduct,
    getAllProduct,
    getProductList,
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
function getProductList(data) {
    return dispatch => {
        dispatch(request());
        productService.getProductList(data)
            .then(
                product => dispatch(success(product)),
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: productConstants.GETALL_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.GETALL_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.GETALL_PRODUCT_FAILURE, error } }
}
function getAllProduct(data) {
    return dispatch => {
        dispatch(request());
        productService.getAllProduct(data)
            .then(
                product => {
                    let returnResppnse=
                    product.getAllProduct?product.getAllProduct.map(user => ({ value: user.id, label: user.name})):[];
                    let newRespnse={...product,getAllProduct:returnResppnse}
                    dispatch(success(newRespnse))
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: productConstants.GETALL_OPT_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.GETALL_OPT_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.GETALL_OPT_PRODUCT_FAILURE, error } }
}

function getAllMenuList(data) {
    return dispatch => {
        dispatch(request());
        productService.getAllMenuList(data)
        .then(menu => {
            let returnResponse = menu.getMenuList ? menu.getMenuList : [];
            let newResponse = {...menu, menuList: returnResponse};
            dispatch(success(newResponse));

        }, error => {
            dispatch(alertActions.error(error));
            dispatch(failure(error))
        });
    }

    function request() { return { type: productConstants.GETALL_MENULIST_REQUEST } }
    function success(menulist) { return { type: productConstants.GETALL_MENULIST_SUCCESS, menulist } }
    function failure(error) { return { type: productConstants.GETALL_MENULIST_FAILURE, error } }
}

function getAllCategoryList() {
    return dispatch => {
        dispatch(request());
        productService.getAllCategoryList()
        .then(category => {
            let returnResponse = category.getCategoryList ? category.getCategoryList : [];
            let newResponse = {...category, categoryList: returnResponse};
            dispatch(success(newResponse));

        }, error => {
            dispatch(alertActions.error(error));
            dispatch(failure(error))
        });
    }

    function request() { return { type: productConstants.GETALL_CATEGORYLIST_REQUEST } }
    function success(categorylist) { return { type: productConstants.GETALL_CATEGORYLIST_SUCCESS, categorylist } }
    function failure(error) { return { type: productConstants.GETALL_CATEGORYLIST_FAILURE, error } }
}

function getSubCategoryList(data) {
    return dispatch => {
        dispatch(request());
        productService.getSubCategoryList(data)
        .then(subcategory => {
            console.log('subcategory',subcategory);
            dispatch(success(subcategory));

        }, error => {
            dispatch(alertActions.error(error));
            dispatch(failure(error))
        });
    }

    function request() { return { type: productConstants.GETSUB_CATEGORYLIST_REQUEST } }
    function success(subcategorylist) { return { type: productConstants.GETSUB_CATEGORYLIST_SUCCESS, subcategorylist } }
    function failure(error) { return { type: productConstants.GETSUB_CATEGORYLIST_FAILURE, error } }
}

function addProduct(data,props) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        productService.addProduct(data)
            .then(
                product => {
                    dispatch(success(product));
                    props.history.push('/app/product');
                    dispatch(this.getProductList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: productConstants.ADD_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.ADD_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.ADD_PRODUCT_FAILURE, error } }
}
function updateProduct(data) {
    console.log('data',data);
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        productService.updateProduct(data)
            .then(
                product => {
                    dispatch(success(product));
                    dispatch(this.getProductList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: productConstants.UPDATE_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.UPDATE_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.UPDATE_PRODUCT_FAILURE, error } }
}
function disableProduct(data) {
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
        productService.disableProduct(maintempdata)
            .then(
                product => {
                    dispatch(success(product));
                    dispatch(this.getProductList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: productConstants.DISABLE_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.DISABLE_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.DISABLE_PRODUCT_FAILURE, error } }
}
function deleteProduct(data) {
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
        productService.deleteProduct(maintempdata)
            .then(
                product => {
                    dispatch(success(product));
                    dispatch(this.getProductList(tempdata));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: productConstants.DELETE_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.DELETE_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.DELETE_PRODUCT_FAILURE, error } }
}

function getProductDetail(data) {
    return dispatch => {
        dispatch(request());
        productService.getProductDetail(data)
            .then(
                product => {
                    // console.log('productproductproduct',product);
                    let newRespnse={...product,getProductDetail:product.getProductDetail}
                    dispatch(success(newRespnse))
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: productConstants.GET_PRODUCT_DETAIL_REQUEST } }
    function success(product) { return { type: productConstants.GET_PRODUCT_DETAIL_SUCCESS, product } }
    function failure(error) { return { type: productConstants.GET_PRODUCT_DETAIL_FAILURE, error } }
}

function getProductSizeList() {
    return dispatch => {
        dispatch(request());
        productService.getProductSizeList()
        .then(ProductSizeList => {
            dispatch(success(ProductSizeList));

        }, error => {
            dispatch(alertActions.error(error));
            dispatch(failure(error))
        });
    }

    function request() { return { type: productConstants.GETPRODUCT_SIZE_LIST_REQUEST } }
    function success(productSizeList) { return { type: productConstants.GETPRODUCT_SIZE_LIST_SUCCESS, productSizeList } }
    function failure(error) { return { type: productConstants.GETPRODUCT_SIZE_LIST_FAILURE, error } }
}

function getAllGST() {
    return dispatch => {
        dispatch(request());
        productService.getAllGST()
        .then(GstList => {
            dispatch(success(GstList));

        }, error => {
            dispatch(alertActions.error(error));
            dispatch(failure(error))
        });
    }

    function request() { return { type: productConstants.GET_GST_LIST_REQUEST } }
    function success(gstList) { return { type: productConstants.GET_GST_LIST_SUCCESS, gstList } }
    function failure(error) { return { type: productConstants.GET_GST_LIST_FAILURE, error } }
}

function getAllProductMaterial() {
    return dispatch => {
        dispatch(request());
        productService.getAllProductMaterial()
        .then(Matrial => {
            dispatch(success(Matrial));

        }, error => {
            dispatch(alertActions.error(error));
            dispatch(failure(error))
        });
    }

    function request() { return { type: productConstants.GET_MATERIAL_LIST_REQUEST } }
    function success(materialList) { return { type: productConstants.GET_MATERIAL_LIST_SUCCESS, materialList } }
    function failure(error) { return { type: productConstants.GET_MATERIAL_LIST_FAILURE, error } }
}

function getAllProductColor() {
    return dispatch => {
        dispatch(request());
        productService.getAllProductColor()
        .then(colorList => {
            dispatch(success(colorList));

        }, error => {
            dispatch(alertActions.error(error));
            dispatch(failure(error))
        });
    }

    function request() { return { type: productConstants.GET_COLOR_LIST_REQUEST } }
    function success(colorList) { return { type: productConstants.GET_COLOR_LIST_SUCCESS, colorList } }
    function failure(error) { return { type: productConstants.GET_COLOR_LIST_FAILURE, error } }
}

function getAllExclusiveType() {
    return dispatch => {
        dispatch(request());
        productService.getAllExclusiveType()
        .then(exclusiveList => {
            dispatch(success(exclusiveList));

        }, error => {
            dispatch(alertActions.error(error));
            dispatch(failure(error))
        });
    }

    function request() { return { type: productConstants.GET_EXCLUSIVE_TYPE_LIST_REQUEST } }
    function success(exclusiveList) { return { type: productConstants.GET_EXCLUSIVE_TYPE_LIST_SUCCESS, exclusiveList } }
    function failure(error) { return { type: productConstants.GET_EXCLUSIVE_TYPE_LIST_FAILURE, error } }
}