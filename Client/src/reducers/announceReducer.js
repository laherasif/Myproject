
import { Add_Announce , Get_Announce  , Get_OneSalary , Delete_Announce } from '../actions/types'


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

        case Add_Announce:
        return [...state , action.payload ]

            case Get_Announce :
            return   action.payload

            // case Get_OneSalary:
            //     return { ...state , oneproduct : action.payload}

                case Delete_Announce : 
               
                newstate =  newstate.filter((item)=>item._id !==action.id)
                //  return Object.assign(newstate, {oneproduct: action.payload});
                return newstate
        default: 
            return state;
    }
}