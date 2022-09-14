import {login_URL , register_URL , verifyToken , get_registered_queries} from '../utils/urls';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_PENDING = 'REGISTER_PENDING';
export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const VERIFITY_TOKEN_SUCCESSFUL = 'VERIFITY_TOKEN_SUCCESSFUL';
export const VERIFITY_TOKEN_PENDING = 'VERIFITY_TOKEN_PENDING';
export const VERIFITY_TOKEN_FAILURE = 'VERIFITY_TOKEN_FAILURE';

export const GET_REGISTRATION_SUCCESSFUL = '';
export const GET_REGISTRATION_PENDING = '';
export const GET_REGISTRATION_FAILURE = '';

export const RESET_REGISTER = 'RESET_REGISTER'
export const RESET_LOGIN = 'RESET_LOGIN'



export const verifyTokenCalled = (value) => ({
	types : [VERIFITY_TOKEN_PENDING ,  VERIFITY_TOKEN_SUCCESSFUL ,VERIFITY_TOKEN_FAILURE ],
	URL: verifyToken,
	options: {
		method: 'post'
	},
	payload: value,
	meta: {
		type: 'api',
	},
})
export const resetRegisterStore = () => ({
	types : [RESET_REGISTER],
	meta : {
		type: 'reset',
	}
});


export const resetLoginStore = () => ({
	types : [RESET_LOGIN],
	meta : {
		type: 'reset',
	}
});

export const loginCalled = (value) => ({
	types: [LOGIN_PENDING,LOGIN_SUCCESSFUL, LOGIN_FAILURE],
	URL: login_URL,
	options: {
		method: 'post'
	},
	payload: value,
	meta: {
		type: 'api',
	},
});


export const registerCalled = (value) => ({
	types: [REGISTER_PENDING,REGISTER_SUCCESSFUL ,  REGISTER_FAILURE],
	URL: register_URL,
	options: {
		method: 'post'
	},
	payload: value,
	meta: {
		type: 'api',
	},
});

export const getRegistration = () => ({
	types: [GET_REGISTRATION_PENDING,GET_REGISTRATION_SUCCESSFUL ,  GET_REGISTRATION_FAILURE],
	URL: get_registered_queries,
	options: {
		method: 'get'
	},
	meta: {
		type: 'api',
	},
})


