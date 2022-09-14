import {GET_ADMISSION_FAILLURE  , GET_ADMISSION_SUCCESSFUL , RESET_ADMISSION} from '../actions/admissionAction'



const initialState = {
    admissionData : [],
    admissionDataError : null,
}
export const admissionReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_ADMISSION_SUCCESSFUL :
            return {...state , admissionData : action.payload?.data?.data};
        case GET_ADMISSION_FAILLURE:
            return {...state , admissionDataError : action.payload}
        case RESET_ADMISSION:
            return {...state, admissionData : {} ,  admissionDataError : null}

        default: return state
    }
}