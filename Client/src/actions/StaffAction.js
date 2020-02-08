import axios from 'axios';
import { GET_ERRORS, REG_STAFF, SUCESS_MESSAGE, GET_STAFF, DELETE_STAFF, EDIT_STAFF, UPDATE_STAFF} from './types';


export const registerStaff = (user, history) => dispatch => {
    axios.post('/api/staffs/register', user)
            .then(res =>{
                console.log("staff are registered", res.data)

                dispatch({
                    type : SUCESS_MESSAGE,
                    payload : res.data.message
                })

               dispatch({
                   type: REG_STAFF,
                   payload : res.data
               })
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}



export const updatestaff = (user ) => dispatch => {
    axios.post(`/api/staffs/updatestaff/${user.id}`)
            .then(res =>{
                console.log("staff are registered", res.data)

               dispatch({
                   type: UPDATE_STAFF,
                   payload : user.id
               })
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}


export const GetStaff = () => dispatch =>{
    axios.get('/api/staffs/getstaff')
    .then(res =>{
        console.log("Get all Staffs from Database" , res.data)
         dispatch({
             type: GET_STAFF,
             payload : res.data.data
         })
     })
     .catch(error =>{
         dispatch({
             type : GET_ERRORS,
             payload : error.data
         })
     })
   
}

export const delete_staff = (id) => dispatch =>{
    axios.get(`/api/staffs/delstaff/${id}`)
    .then(res =>{
        console.log("Delete  Staffs from Database" , res.data)
         dispatch({
             type: DELETE_STAFF,
             payload : id
         })
     })
     .catch(error =>{
         dispatch({
             type : GET_ERRORS,
             payload : error.data
         })
     })
}


export const Edit_staff = (id)=>{

         return({
             type: EDIT_STAFF,
             payload : id
         })
     }


