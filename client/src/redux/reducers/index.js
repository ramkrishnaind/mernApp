import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import PropertyListReducer from './PropertyListReducer';
import PropertyDetailReducer from './PropertyDetailReducer';
import PostPropertyReducer from './PostPropertyReducer';
import contactus from './ContactusReducer';
const reducers = {
    Login: LoginReducer,
    Register: RegisterReducer,
    PropertyList: PropertyListReducer,
    PropertyDetail: PropertyDetailReducer,
    PostProperty: PostPropertyReducer,
    contactus: contactus,
}

export default reducers;