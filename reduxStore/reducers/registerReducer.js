import {SET_PERSONAL_INFORMATION,SET_MEDICAL_INFORMATION} from '../actions/registerAction.js'

const default_user ={
    name:"",
    email:"",
    gender:"",
    birth:"",
    medic:"",
    place:"",
    etnia:"",
    id:""
}

const user_data = (state=default_user , action) =>{
    switch (action.type) {
        case SET_PERSONAL_INFORMATION:{
            return{
                name : action.payload.name,
                email: action.payload.email,
                gender: action.payload.gender,
                birth: action.payload.birth
            }
        }
        case SET_MEDICAL_INFORMATION:{
            return{
                medic: action.payload.medic,
                place: action.payload.place,
                etnia: action.payload.etnia,
                id: action.payload.id
            }
        }
            
        default: return default_user;
    }
}

export default user_data