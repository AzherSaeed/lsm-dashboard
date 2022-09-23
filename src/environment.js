/* eslint-disable no-undef */
let BASE_URL = 'https://lsm-back-end.herokuapp.com/api/';
if (process.env.REACT_APP_ENV === 'development') {
	BASE_URL = 'https://lsm-back-end.herokuapp.com/api/';
}

if (process.env.REACT_APP_ENV === 'staging') {
	BASE_URL = 'http://staging.project.com';
}

if (process.env.REACT_APP_ENV === 'production') {
	BASE_URL = 'http://prod.project.com';
}

export {BASE_URL};