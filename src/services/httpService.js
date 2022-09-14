import axios from 'axios';
import popup from '../utils/popup';
axios.interceptors.response.use(null, (error) => {
	const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
	if (!expectedError) {
		console.log('Logging the error');
		popup('An Unexpected error occured.', 'top-center', 5000);
	}
	return Promise.reject(error);
});

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	axios: axios,
};
