import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {},
    MessageAdmin : '',
 
}

export default function(state = initialState, action ) {
    // debugger
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
                
            };
            // case SUCESS_MESSAGES :
            //     return{
            //     ...state,
            //     MessageAdmin : action.payload
            //     };
               
            
        default: 
            return state;
    }
}