
import { REG_WORKER, GET_WORKER, DELETE_WORKER, SUCESS_MESSAGE } from '../actions/types'


const initialState = {
    Workers: [],
    oneproduct: {},
    SuccessMessage: '',
    LoginMessage: '',
}

const WorkerReducer = (state = initialState, action) => {
    // let newstate = [...state , Object.assign({})]
    let newstate = [...state,]
    debugger
    switch (action.type) {

        case REG_WORKER:
            return { ...state, Workers: action.payload }

        case GET_WORKER:
            return { ...state, Workers: action.payload }

        case SUCESS_MESSAGE:
            return { ...state, SuccessMessage: action.payload }



        case DELETE_WORKER:

            newstate = newstate.filter((item) => item._id !== action.id)
            //  return Object.assign(newstate, {oneproduct: action.payload});
            return newstate
        default:
            return state;
    }
}

export default WorkerReducer