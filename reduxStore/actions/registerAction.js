export const SET_PERSONAL_INFORMATION = "SET_PERSONAL_INFORMATION";
export const SET_MEDICAL_INFORMATION = "SET_MEDICAL_INFORMATION";
export const SET_REGISTER_INFORMATION = "SET_REGISTER_INFORMATION";
export const SET_DAILYREGISTER_INFORMATION = "SET_DAILYREGISTER_INFORMATION";
export const REGISTER_USER = "REGISTER_USER";
export const ADD_DAILYREGISTER = "ADD_DAILYREGISTER";

export const setPersonalInformationAction = (userData) =>{
    return{
        type: SET_PERSONAL_INFORMATION,
        payload: userData
    }
}

export const setMedicalInformationAction = (userDataMedical) =>{
    return{
        type: SET_MEDICAL_INFORMATION,
        payload: userDataMedical
    }
}
