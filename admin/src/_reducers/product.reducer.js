import { productConstants } from "../_constants";

export function product(state = {}, action) {
  switch (action.type) {
    case productConstants.GETALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.GETALL_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductSuccess: false,
        items: action.product.getProductList.list,
        total: action.product.getProductList.total,
        formData1: {
          enableProduct: "",
          attributeSet: "",
          name: "",
          sku: "",
          desc: "",
          price: "",
          taxClass: "",
          quantity: "",
          stockStatus: "",
          weight: "",
          category: "",
          innerDiameter: "",
          visibility: "",
          restock: "",
          moq: "",
          onlyEnquiry: "",
          material: "",
          length: "",
          width: "",
          earRingType: "",
          backFinding: "",
          metal: "",
          plating: "",
          stone: "",
          work: "",
          manufactureCountry: "",
          color: "",
          size: "",
          manufacturer: "",
          paymentAndTax: "",
          packageContent: "",
          purchaseFromAmazon: "",
          isFeatured: "",
          ean: "",
          showOnHome: "",
          searchWeight: "",
          image: "",
        },
      };
    case productConstants.GETALL_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case productConstants.GETALL_OPT_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.GETALL_OPT_PRODUCT_SUCCESS:
      return {
        ...state,
        getAllProduct: action.product.getAllProduct,
      };
    case productConstants.GETALL_OPT_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case productConstants.ADD_PRODUCT_REQUEST:
      return {
        ...state,
      };
    case productConstants.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductSuccess: true,
      };
    case productConstants.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case productConstants.DISABLE_PRODUCT_REQUEST:
      return {
        ...state,
      };
    case productConstants.DISABLE_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductSuccess: true,
      };
    case productConstants.DISABLE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case productConstants.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
      };
    case productConstants.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductSuccess: true,
      };
    case productConstants.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case productConstants.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
      };
    case productConstants.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductSuccess: true,
      };
    case productConstants.UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    
    case productConstants.GETALL_MENULIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.GETALL_MENULIST_SUCCESS:
      return {
        ...state,
        loading: false,
        menuList: action.menulist.menuList,
        
      };
    case productConstants.GETALL_MENULIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

        case productConstants.GETALL_CATEGORYLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.GETALL_CATEGORYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryList: action.categorylist.categoryList,
      };
    case productConstants.GETALL_CATEGORYLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        
        case productConstants.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: action.product.getProductDetail,
      };

      case productConstants.GETSUB_CATEGORYLIST_SUCCESS:
      return {
        ...state,
        subCategoryList: action.subcategorylist,
      };

      case productConstants.GETPRODUCT_SIZE_LIST_SUCCESS:
      return {
        ...state,
        productSizeList: action.productSizeList,
      };

      case productConstants.GET_GST_LIST_SUCCESS:
        return {
          ...state,
          gstList: action.gstList,
        };

      case productConstants.GET_COLOR_LIST_SUCCESS:
        return {
          ...state,
          colorList: action.colorList,
        };

      case productConstants.GET_MATERIAL_LIST_SUCCESS:
        return {
          ...state,
          materialList: action.materialList,
        };

      case productConstants.GET_EXCLUSIVE_TYPE_LIST_SUCCESS:
        return {
          ...state,
          exclusiveList: action.exclusiveList,
        };
    default:
      return state;
  }
}
