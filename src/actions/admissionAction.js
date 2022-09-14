
import {admission_URL} from '../utils/urls';



export const GET_ADMISSION_SUCCESSFUL = 'GET_ADMISSION_SUCCESSFUL';
export const GET_ADMISSION_FAILLURE = 'GET_ADMISSION_FAILLURE';
export const GET_ADMISSION_PENDING = 'GET_ADMISSION_PENDING';
export const RESET_ADMISSION = 'RESET_ADMISSION'


export const emptyAdmissionStore = () => ({
	types : [RESET_ADMISSION],
	meta : {
		type: 'reset',
	}
});



export const admissionAction = (value) => {
	return {
		types : [GET_ADMISSION_PENDING , GET_ADMISSION_SUCCESSFUL , GET_ADMISSION_FAILLURE],
		URL : admission_URL,
		options: {
			method: 'get'
		},
		payload: value,
		meta: {
			type: 'api',
		},
	}
}