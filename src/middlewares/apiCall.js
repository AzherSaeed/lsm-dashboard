import http from '../services/httpService';
import { BASE_URL } from '../environment';
const callApi = (store) => (next) => async (action) => {
	if (typeof action === 'undefined') {
		return next(action);
	}

	if (!action.meta || !(action.meta.type === 'api' || action.meta.type === 'reset' || action.meta.type === 'custom'  )) {
		return next(action);
	}

	const { types, URL, options, payload = null, queryParams = null } = action;

	if(action.meta.type === 'reset') {
		let resetState = {
			type: types[0],
		};
		return store.dispatch(resetState);
	}



	if(action.meta.type === 'custom') {
		let resetState = {
			type: types[0],
			payload
		};
		return store.dispatch(resetState);
	}


	const { method, headers = null } = options;

	let response;
	let reqObj = {
		method: method,
		url: BASE_URL + URL,
	};
	if (headers) {
		reqObj = {
			...reqObj,
			headers: headers
		};
	}
	if (queryParams) {
		reqObj = {
			...reqObj,
			params: queryParams,
		};
	}
	if (method === 'get') {
		try {

			response = await http.axios(reqObj);

			const requestStart = {
				type: types[0],
			};
			store.dispatch(requestStart);

			const requestSuccess = {
				type: types[1],
				payload: response,
			};
			store.dispatch(requestSuccess);
		} catch (error) {
			const requestFailure = {
				type: types[2],
				payload: error,
			};
			store.dispatch(requestFailure);
		}
	} else {
		try {
			if (payload) {
				reqObj = {
					...reqObj,
					data: payload,
				};
			}
			response = await http.axios(reqObj);
			const requestStart = {
				type: types[0],
			};
			store.dispatch(requestStart);

			const requestSuccess = {
				type: types[1],
				payload: response,
			};
			store.dispatch(requestSuccess);
		} catch (error) {
			const requestFailure = {
				type: types[2],
				payload: error,
			};
			store.dispatch(requestFailure);
		}
	}
};

export default callApi;
