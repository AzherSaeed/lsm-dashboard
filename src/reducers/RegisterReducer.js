import { REGISTER_FAILURE } from '../actions/AuthAction';
import { REGISTER_PENDING , GET_REGISTRATION_SUCCESSFUL ,GET_REGISTRATION_FAILURE } from '../actions/AuthAction';
import { REGISTER_SUCCESSFUL , RESET_REGISTER } from '../actions/AuthAction';

const initialState = {
	registerData: {},
	error: {},
	loading: false,

	registration : [],
	registrationError : null
};

export const registerReducer = (state = initialState, action) => {
	switch (action.type) {
	case REGISTER_FAILURE:
		return { ...state, loading: false, error: action.payload };
	case REGISTER_PENDING:
		return { ...state, loading: true, error: null };
	case REGISTER_SUCCESSFUL:
		return { ...state, loading: false, error: null, registerData: action.payload };
		case RESET_REGISTER :
			return{...state , registerData : {} , error : {}}

		case GET_REGISTRATION_SUCCESSFUL : 
		return {...state , registration : action.payload?.data?.data}
		case GET_REGISTRATION_FAILURE:
			return {...state , registrationError : action.payload }
	default:
		return state;
	}
};