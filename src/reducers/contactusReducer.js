import {GET_CONTACT_US_QUERY_FAILURE , GET_CONTACT_US_QUERY_SUCCESSFUL ,RESET_CONTACT_STORE ,CONTACT_US_QUERY_FAILURE , CONTACT_US_QUERY_PENDING , CONTACT_US_QUERY_SUCCESSFUL} from '../actions/contactusAction';


const initialState = {
	contactusData: {},
	error: {},
	loading: false,

	allContactqueries : [],
	allContactQueriesError : null
};

export const contactusReducer = (state = initialState, action) => {
	switch (action.type) {
	case CONTACT_US_QUERY_FAILURE:
		return { ...state, loading: false, error: action.payload };
	case CONTACT_US_QUERY_PENDING:
		return { ...state, loading: true, error: null };
	case CONTACT_US_QUERY_SUCCESSFUL:
		return { ...state, loading: false, error: null, contactusData: action.payload };
	case RESET_CONTACT_STORE:
		return {...state , contactusData : {}}

	case GET_CONTACT_US_QUERY_SUCCESSFUL:
		return {...state ,  allContactqueries : action.payload.data.data}
	case GET_CONTACT_US_QUERY_FAILURE:
		return{...state , allContactQueriesError : action.paylaod }
	default:
		return state;
	}
};
