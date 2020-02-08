import axios from 'axios';
import { GET_ERRORS, GET_WORKER, REG_WORKER, DELETE_WORKER, SUCESS_MESSAGE } from './types';


export const registerWorker = (doctor, history) => dispatch => {
    axios.post('/api/workers/register', doctor)
            .then(res =>{
              console.log("worker are register",res.data)
              dispatch({
                  type: SUCESS_MESSAGE ,
                  payload: res.data.message
                })
              dispatch({
                  type: REG_WORKER ,
                  payload: res.data
              })
            })
          
            .catch(err => {
                console.log("Registration process fail" , err.response)
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}


export const  Get_workers = ( ) => dispatch => {
    axios.get('/api/workers/getworker')
    .then(res=>{
        console.log("response from  Get doctor" , res.data.data)
        // dispatch({
        //     type : IS_LODDING,
        //     payload : true
        // })
        dispatch({
            type : GET_WORKER,
            payload : res.data.data
        })

    })
    .catch(error =>{
        console.log("response from backend error" , error.response.data)
        dispatch({
            type : GET_ERRORS,
            payload : error.response.data
        })

        
    })
}

export const Delete_Worker = (id) => dispatch => {

    axios
    .get(`/api/workers/Delete_Doctor/${id}`)
    .then(res=>{
        console.log("Doctor Deleted Successfully" , res.data)
        dispatch({
            type : DELETE_WORKER ,
            id : id,
  
        })
    
    })
    .catch(error  =>{
        console.log("Doctor Deleted fail" ,error.response)
      
        dispatch({
            type: GET_ERRORS ,
            payload : error.response
        })
        
    })
}