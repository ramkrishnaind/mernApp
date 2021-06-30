import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";
//import { branch } from './branch.reducer';
import { dashboard } from "./dashboard.reducer";
import { theme } from "./theme.reducer";
import { product } from "./product.reducer";
import { orders } from "./orders.reducer";
import { admin } from "./admin.reducer";
import { client } from "./client.reducer";
import {users} from "./users.reducer";

const rootReducer = combineReducers({
  //branch,
  authentication,
  users,
  alert,
  dashboard,
  product,
  theme,
  orders,
  admin,
  client,
   users
});

export default rootReducer;
