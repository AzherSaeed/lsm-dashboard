import { LOGIN_FAILURE } from '../actions/AuthAction';
import { LOGIN_PENDING } from '../actions/AuthAction';
import { LOGIN_SUCCESSFUL , RESET_LOGIN , VERIFITY_TOKEN_FAILURE , VERIFITY_TOKEN_SUCCESSFUL } from '../actions/AuthAction';

const initialState = {
	loginData: {},
	error: null,
	loading: false
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
	case LOGIN_PENDING:
		return { ...state, loading: true, error: null };
	case LOGIN_FAILURE:
		return { ...state, loading: false, error: action.payload };
	case LOGIN_SUCCESSFUL:
		return { ...state, loading: false, error: null, loginData: action.payload.data };
	case RESET_LOGIN :
		return{...state , loginData : {} , error : null}

	case VERIFITY_TOKEN_SUCCESSFUL:
		return {...state , loginData : action.payload.data};
	case VERIFITY_TOKEN_FAILURE:
		return {...state, error : action.payload}
	
	default:
		return state;
	}
};