const MedicineReducer = (state =[],action)=>{
    switch(action.type)
    {
        case "medicine_detail":
        return action.payload
        case "ADD_medicine":
        return [...state,action.payload]
        return [action.payload , ...state]
        default:
        return state
    }
}

export default MedicineReducer