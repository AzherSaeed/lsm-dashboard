import { combineReducers } from 'redux';
import {loginReducer} from './LoginReducer';
import {registerReducer} from './RegisterReducer';
import {contactusReducer} from './contactusReducer';
import {admissionReducer} from './admissionReducer';

export default combineReducers({
	loginReducer,
	registerReducer,
	contactusReducer,
	admissionReducer
});