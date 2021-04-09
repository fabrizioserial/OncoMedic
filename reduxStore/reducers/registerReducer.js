import {SET_PERSONAL_INFORMATION,SET_MEDICAL_INFORMATION,SET_SMOKE_INFORMATION,SET_DBT_INFORMATION,
        SET_DBT_OPTION,SET_SMOKE_OPTION,SET_MED_OPTION,SET_AVATAR, SET_USER_DATA} from '../actions/registerAction.js'

const default_user ={
    name:"",
    password:"",
    email:"",
    gender:null,
    birth:"",
    medic:"",
    place:"",
    etnia:"",
    id:null,
    smoke:{
        smoke:false,
        time:0,
        qnt:0,
    },
    dbt:{
        dbt:false,
        med:""
    },
    med:{
        hip:false,
        epoc:false,
        acv:false,
        inf:false
    },
    avatar:"1",
}

const user_data = (state=default_user , action) =>{
    switch (action.type) {
        case SET_USER_DATA:{
            return{
                ...state,
                name : action.payload.name,
                password: action.payload.password,
                email: action.payload.email,
                gender: action.payload.gender,
                birth: action.payload.birth,
                medic: action.payload.medic,
                place: action.payload.place,
                etnia: action.payload.etnia,
                id: action.payload.id,
                smoke:{
                    smoke: action.payload.smoke,
                    time: action.payload.time,
                    qnt: action.payload.qnt,
                },
                dbt:{
                    dbt: action.payload.dbt,
                    med: action.payload.med
                },
                med:{
                    hip: action.payload.hip,
                    epoc: action.payload.epoc,
                    acv: action.payload.acv,
                    inf: action.payload.inf,
                },
                avatar:action.payload.avatar,

            }
        }
        case SET_PERSONAL_INFORMATION:{
            return{
                ...state,
                name : action.payload.name,
                password: action.payload.password,
                email: action.payload.email,
                gender: action.payload.gender,
                birth: action.payload.birth
            }
        }
        case SET_MEDICAL_INFORMATION:{
            return{
                ...state,
                medic: action.payload.medic,
                place: action.payload.place,
                etnia: action.payload.etnia,
                id: action.payload.id
            }
        }
        case SET_SMOKE_INFORMATION:{
            return{
                ...state,
                smoke:{
                    ...state.smoke,
                    smoke: action.payload
                }
            }
        }
        case SET_DBT_INFORMATION:{
            return{
                ...state,
                dbt:{
                    ...state.dbt,
                    dbt: action.payload
                }
            }
        }
        case SET_DBT_OPTION:{
            return{
                ...state,
                dbt:{
                    ...state.dbt,
                    med: action.payload
                }
            }
        }
        case SET_SMOKE_OPTION:{
            return{
                ...state,
                smoke:{
                    ...state.smoke,
                    time: action.payload.time,
                    qnt: action.payload.qnt,
                }
            }
        }
        case SET_MED_OPTION:{
            return{
                ...state,
                med:{
                    ...state.med,
                    hip: action.payload.hip,
                    epoc: action.payload.epoc,
                    acv: action.payload.acv,
                    inf: action.payload.inf,
                }
            }
        }
        case SET_AVATAR:{
            return{
                ...state,
                avatar:action.payload.avatar
            }
        }
        default: return default_user;
    }
}

export default user_data