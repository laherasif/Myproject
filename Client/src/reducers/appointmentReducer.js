import { REG_APPOINT, GET_APPOINT } from "../actions/types"

const initialState = {
    appointments: [],
    singleOppint:{},
    isApproaved: false
}

const AppointReducer = (state = initialState, action)=>{
    let newState = {...state}
    debugger;
    switch(action.type)
    {
        
        case REG_APPOINT:
            return { ...state,
                appointments:  action.payload } 

            case GET_APPOINT:
                return { ...state, 
                    appointments : action.payload }
                
        default:
        return newState
    }
}

export default AppointReducer

