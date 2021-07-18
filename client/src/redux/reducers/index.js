import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import PropertyListReducer from './PropertyListReducer';
import PropertyDetailReducer from './PropertyDetailReducer';

const reducers =  {
    Login: LoginReducer,
    Register: RegisterReducer,
    PropertyList: PropertyListReducer,
    PropertyDetail: PropertyDetailReducer,
}

export default reducers;