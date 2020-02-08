
import {  GET_STAFF , DELETE_STAFF, REG_STAFF, SUCESS_MESSAGE , EDIT_STAFF, UPDATE_STAFF } from '../actions/types'


// const initialState = {
//     Staffs :[],
//     OneUser :{},
//     SucessMessage : '',
//     LoginMessage: '',
// }

const StaffReducer = (state = [] , action ) =>{
    // let newstate = [...state , Object.assign({})]
    let  newstate = [...state]
    debugger
    switch(action.type) {

        case REG_STAFF:
        return [...state , action.payload]
    
        case SUCESS_MESSAGE :
            return { ...state ,
                SucessMessage : action.payload}

            case GET_STAFF :
            return  action.payload

                case DELETE_STAFF : 
                
               newstate = newstate.filter(user => user._id !== action.id)

               return newstate
 
               
                    //  state.map(user =>
                    //   user._id === action.id
                    //     ? { ...user, islodding: true } 
                    //     : user
                    // )
                    // return  state.filter(user => user._id !== action.id)      
    
                
 
               

                

                case UPDATE_STAFF : 

                let newUser = newstate.find((item) => item._id == action.id)
                let indexOF = newstate.indexOf(newUser)
                newstate[indexOF] = action
    
            
                //  let Index = state.findIndex(item => item._id === action.id )
                //  if(Index > -1 )
                //  {
                //      return state.map(item => {
                //          if(item._id === action.id) return action.payload
                //          return item
                //      })
                
                    
                //  }
                //  else{
                //      return[
                //          ...state,
                //          action.payload
                //      ]
                //  }


                
        default: 
            return state;
    }
}

export default StaffReducer 