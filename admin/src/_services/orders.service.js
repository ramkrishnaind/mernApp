import { authHeader } from "../_helpers";
import { CONST } from "../_config";

export const ordersService = {
  logout,
  addOrder,
  uploadImage,
  getOrderList,
  disableOrder,
  updateOrder,
  deleteOrder,
  getAllOrder,
  getOrderByUserId,
};
function logout() {
  localStorage.removeItem("orders");
}

function getOrderList(data) {
  let header = new Headers({
    "Content-Type": "application/json",
    Authorization: authHeader().Authorization,
  });
  const requestOptions = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };
  return fetch(CONST.BACKEND_URL + `/getOrderList`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      let ordersObj = {
        getOrderList: data.data,
      };
      console.log("i am in srevice", ordersObj);

      return ordersObj;
    });
}
function getOrderByUserId(data) {
  let header = new Headers({
    "Content-Type": "application/json",
    Authorization: authHeader().Authorization,
  });
  const requestOptions = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };
  return fetch(CONST.BACKEND_URL + `/getAllOrderByUserId`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      let ordersObjByUserId = {
        getOrderListByUserId: data.data,
      };
      console.log("i am in srevice", ordersObjByUserId);

      return ordersObjByUserId;
    });
}
function getAllOrder() {
  let header = new Headers({
    "Content-Type": "application/json",
    Authorization: authHeader().Authorization,
  });
  const requestOptions = {
    method: "POST",
    headers: header,
  };
  return fetch(CONST.BACKEND_URL + `/getAllOrder`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      let ordersObj = {
        getAllOrder: data.data,
      };
      console.log();

      return ordersObj;
    });
}
function addOrder(data) {
  let header = new Headers({
    "Content-Type": "application/json",
    Authorization: authHeader().Authorization,
  });
  const requestOptions = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };
  return fetch(CONST.BACKEND_URL + `/createOrder`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      let ordersObj = {
        addOrder: data.data,
      };
      console.log();

      return ordersObj;
    });
}
function updateOrder(data) {
  let header = new Headers({
    "Content-Type": "application/json",
    Authorization: authHeader().Authorization,
  });
  const requestOptions = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };
  return fetch(CONST.BACKEND_URL + `/updateOrder`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      let ordersObj = {
        addOrder: data.data,
      };
      return ordersObj;
    });
}
function disableOrder(data) {
  let header = new Headers({
    "Content-Type": "application/json",
    Authorization: authHeader().Authorization,
  });
  const requestOptions = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };
  return fetch(CONST.BACKEND_URL + `/updateOrderStatus`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      let ordersObj = {
        addOrder: data.data,
      };
      console.log();

      return ordersObj;
    });
}
function deleteOrder(data) {
  let header = new Headers({
    "Content-Type": "application/json",
    Authorization: authHeader().Authorization,
  });
  const requestOptions = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };
  return fetch(CONST.BACKEND_URL + `/deleteOrder`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      let ordersObj = {
        addOrder: data.data,
      };
      console.log();

      return ordersObj;
    });
}
function uploadImage(filedata) {
  let header = new Headers({
    Authorization: authHeader().Authorization,
  });
  var data = new FormData();
  data.append("image", filedata);

  const requestOptions = {
    method: "POST",
    headers: header,
    body: data,
  };
  return fetch(CONST.BACKEND_URL + `/uploadFile`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      let ordersObj = {
        filesDetails: res.data,
      };
      return ordersObj;
    });
}
function handleResponse(response) {
  return response.text().then((text) => {
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
