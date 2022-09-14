import {contact_query_URL , get_contact_queries} from '../utils/urls';

export const CONTACT_US_QUERY_SUCCESSFUL = 'CONTACT_US_QUERY_SUCCESSFUL';
export const CONTACT_US_QUERY_FAILURE = 'CONTACT_US_QUERY_FAILURE';
export const CONTACT_US_QUERY_PENDING = 'CONTACT_US_QUERY_PENDING';

export const GET_CONTACT_US_QUERY_SUCCESSFUL = 'GET_CONTACT_US_QUERY_SUCCESSFUL';
export const GET_CONTACT_US_QUERY_PENDING = 'GET_CONTACT_US_QUERY_PENDING';
export const GET_CONTACT_US_QUERY_FAILURE = 'GET_CONTACT_US_QUERY_FAILURE';

export const RESET_CONTACT_STORE =  'RESET_CONTACT_STORE'



export const emptyContactStoreAction = () => ({
	types : [RESET_CONTACT_STORE],
	meta : {
		type: 'reset',
	}
});

export const contactusAction = (value) => ({
    types: [CONTACT_US_QUERY_FAILURE,CONTACT_US_QUERY_SUCCESSFUL, CONTACT_US_QUERY_FAILURE],
	URL: contact_query_URL,
	options: {
		method: 'post'
	},
	payload: value,
	meta: {
		type: 'api',
	},
})
export const getContactusAction = () => ({
    types: [GET_CONTACT_US_QUERY_PENDING,GET_CONTACT_US_QUERY_SUCCESSFUL, GET_CONTACT_US_QUERY_FAILURE],
	URL: get_contact_queries,
	options: {
		method: 'get'
	},
	meta: {
		type: 'api',
	},
})
