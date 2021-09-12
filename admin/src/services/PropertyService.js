import * as PropertyAction from "../redux/actions/PropertyAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";
import * as Loader from "../redux/actions/LoaderActions";
export const PropertyListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_LIST_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(PropertyAction.PropertyListSuccess(result));
  } catch (error) {
    dispatch(PropertyAction.PropertyListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const PropertyAddService = async (dispatch, data, imageData) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_ADD_ENDPOINT,
      data,
      null,
      null,
      true
    );
    var propertyId = "6125373540f10f2712e43db5";
    if (result.propertyId != "") {
      propertyId = result.propertyId;
    }
    if (imageData.mainImage) {
      var data = new FormData();
      data.append("image", imageData.mainImage);
      data.append("imageType", "mainImage");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.badrooms.length > 0) {
      var data = new FormData();
      imageData.badrooms.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "badrooms");
      // data.append("propertyId", result.data._id);
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.bathrooms.length > 0) {
      var data = new FormData();
      imageData.bathrooms.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "bathrooms");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.exteriorView.length > 0) {
      var data = new FormData();
      imageData.exteriorView.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "exteriorView");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.floorPlan.length > 0) {
      var data = new FormData();
      imageData.floorPlan.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "floorPlan");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.kitchen.length > 0) {
      var data = new FormData();
      imageData.kitchen.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "kitchen");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.livingRoom.length > 0) {
      var data = new FormData();
      imageData.livingRoom.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "livingRoom");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.locationMap.length > 0) {
      var data = new FormData();
      imageData.locationMap.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "locationMap");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.masterPlan.length > 0) {
      var data = new FormData();
      imageData.masterPlan.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "masterPlan");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.other.length > 0) {
      var data = new FormData();
      imageData.other.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "other");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    dispatch(PropertyAction.PropertyAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/property");
    window.location.reload();
  } catch (error) {
    dispatch(PropertyAction.PropertyAddError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const PropertyStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_STATUS_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(PropertyAction.PropertyUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(PropertyAction.PropertyUpdateStatusError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const PropertyUpdateService = async (dispatch, data, imageData) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    var propertyId = data.propertyId;

    if (imageData.mainImage) {
      var data = new FormData();
      data.append("image", imageData.mainImage);
      data.append("imageType", "mainImage");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.badrooms.length > 0) {
      var data = new FormData();
      imageData.badrooms.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "badrooms");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.bathrooms.length > 0) {
      var data = new FormData();
      imageData.bathrooms.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "bathrooms");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.exteriorView.length > 0) {
      var data = new FormData();
      imageData.exteriorView.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "exteriorView");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.floorPlan.length > 0) {
      var data = new FormData();
      imageData.floorPlan.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "floorPlan");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.kitchen.length > 0) {
      var data = new FormData();
      imageData.kitchen.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "kitchen");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.livingRoom.length > 0) {
      var data = new FormData();
      imageData.livingRoom.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "livingRoom");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.locationMap.length > 0) {
      var data = new FormData();
      imageData.locationMap.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "locationMap");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.masterPlan.length > 0) {
      var data = new FormData();
      imageData.masterPlan.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "masterPlan");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    if (imageData.other.length > 0) {
      var data = new FormData();
      imageData.other.map((item, index) => {
        data.append("image", item);
      });
      data.append("imageType", "other");
      data.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        data,
        null,
        null,
        true
      );
    }

    dispatch(PropertyAction.PropertyUpdateSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/property");
    window.location.reload();
  } catch (error) {
    dispatch(PropertyAction.PropertyUpdateError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const PropertyDeleteService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_DELETE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(PropertyAction.PropertyDeleteSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(PropertyAction.PropertyDeleteError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};

export const PropertyDataService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_DATA_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(PropertyAction.PropertyDataSuccess(result));
  } catch (error) {
    dispatch(PropertyAction.PropertyDataError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
  dispatch(Loader.hideLoader(""));
};
