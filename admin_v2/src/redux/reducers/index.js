import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import PropertyListReducer from './PropertyListReducer';
import SideMenuListReducer from './SideMenuListReducer';
import menu from './MenuReducer';
import ModuleReducer from './ModuleRightsReducer';
import user from './UserReducer';
import UserRoleReducer from './createUserRoleReducer'
const reducers =  {
    Login: LoginReducer,
    Register: RegisterReducer,
    PropertyList: PropertyListReducer,
    SideMenuList: SideMenuListReducer,
    menu: menu,
    ModuleReducer : ModuleReducer,
    user : user,
    UserRoleReducer : UserRoleReducer
}

export default reducers;