import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userInformation from './userInformationReducer';

const rootReducer = combineReducers({
    userInformation,
    router: routerReducer
});

export default rootReducer;