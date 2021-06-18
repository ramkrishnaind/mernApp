import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import { productListReducer, productDetailReducer } from "./redux/reducers/productReducer";

const reducer = combineReducers({
    //productList: productListReducer,
    //productDetail: productDetailReducer,
});
const initialState = {
    cart: { cartItems: 'Vikram' },
};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;