import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userInformation from './userInformationReducer';

const rootReducer = combineReducers({
    userInformation,
    routing: routerReducer
});

export default rootReducer;