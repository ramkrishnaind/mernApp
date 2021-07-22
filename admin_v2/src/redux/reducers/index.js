import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import PropertyListReducer from './PropertyListReducer';
import SideMenuListReducer from './SideMenuListReducer';
import menu from './MenuReducer';
import ModuleReducer from './ModuleRightsReducer';
import user from './UserReducer';
<<<<<<< HEAD
import enquiry from'./EnquiryReducer';
import callback from'./CallbackReducer';

=======
import UserRoleReducer from './createUserRoleReducer'
>>>>>>> de593ea9fec87d1b60b225509b79514f35e4f98e
const reducers =  {
    Login: LoginReducer,
    Register: RegisterReducer,
    PropertyList: PropertyListReducer,
    SideMenuList: SideMenuListReducer,
    menu: menu,
    ModuleReducer : ModuleReducer,
    user : user,
<<<<<<< HEAD
    enquiry:enquiry,
    callback:callback,
=======
    UserRoleReducer : UserRoleReducer
>>>>>>> de593ea9fec87d1b60b225509b79514f35e4f98e
}

export default reducers;