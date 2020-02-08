
import { SET_CURRENT_DOCTOR, SUCESS_MESSAGE, GET_DOCTOR, DELETE_DOCTOR, UPDATE_DOCTOR, IS_LODDING , EDIT_DOCTOR} from '../actions/types';
import isEmpty from '../validation/is-empty';
const initialState = {
    doctors: [],
    User: {},
    OneUser : [],
    isAuthenticated: false,
    isloading: false,
    SendMessage: '',
    LoginMessage: '',
}
const AdddoctorReducer = (state = initialState, action) => {
    let newstate = { ...state};
    // debugger;
    switch (action.type) {


        case SET_CURRENT_DOCTOR:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                doctors: action.payload
            }


        case SUCESS_MESSAGE:
            return {
                ...state,
                SendMessage: action.payload
            }

        case IS_LODDING:
            return {
                ...state,
                isloading: action.payload
            }

        case GET_DOCTOR:
            return {
                ...state,
                doctors: action.payload
            }
        case DELETE_DOCTOR:
                     
            return {
                ...state,
                doctors: state.doctors.filter((item) => item._id !== action.id)
            }

            case EDIT_DOCTOR:
                return{
                    
                    ...state,
                    OneUser : state.doctors.filter((item) => item._id === action.id)
                }
                case UPDATE_DOCTOR:
                     
                    let newS = state.doctors.find((item) => item._id == action.id)
                    let findIndex = state.doctors.indexOf(newS)
                    newS[findIndex] = action
                     
                return {
                  doctors : [...state.doctors].map( item => {
                    if(item._id === action.id){
                      return action.payload
                    }
                    else return item;
                  })
                }
                                        
        default:
            return newstate
    }
}

export default AdddoctorReducer