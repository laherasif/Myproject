
import { Add_Salary , Get_Salary  , Get_OneSalary , Delete_Salary } from '../actions/types'


const initialState = {
    Staffs :[],
    oneproduct: {},
    SendMessage : '',
    LoginMessage: '',
}

export default function(state = [] , action ) {
    // let newstate = [...state , Object.assign({})]
    let  newstate = [...state, ]
    debugger
    switch(action.type) {

        case Add_Salary:
        return [...state , action.payload ]

            case Get_Salary :
            return   action.payload

            // case Get_OneSalary:
            //     return { ...state , oneproduct : action.payload}

                case Delete_Salary : 
               
                newstate =  newstate.filter((item)=>item._id !==action.id)
                //  return Object.assign(newstate, {oneproduct: action.payload});
                return newstate
        default: 
            return state;
    }
}