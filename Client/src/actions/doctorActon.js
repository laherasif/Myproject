import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_DOCTOR ,  GET_DOCTOR  , GET_ONE_DOCTOR, DELETE_DOCTOR, SUCESS_MESSAGE, IS_LODDING, UPDATE_DOCTOR, EDIT_DOCTOR  } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerDoctor = (doctor, history) => dispatch => {
    axios.post('/api/doctors/register', doctor)
            .then(res =>{
              console.log("Doctor are register",res.data)
              dispatch({
                  type: SUCESS_MESSAGE ,
                  payload: res.data.message
              })

            })

         
            .catch(err => {
                console.log("Registration process fail" , err.response.data)
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}





export const  Get_One_Doctors = ( id ) => dispatch => {
    axios.get(`/api/doctors/Get_One_Doctor/${id}`)
    .then(res=>{
        console.log("response from  Get doctor" , res.data.data)
        // dispatch({
        //     type : IS_LODDING,
        //     payload : true
        // })
        dispatch({
            type : GET_ONE_DOCTOR,
            payload : res.data.data
        })

    })
    .catch(error =>{
        console.log("response from backend error" , error.response)
        dispatch({
            type : GET_ERRORS,
            payload : error.response
        })

        dispatch ({
            type  : IS_LODDING,
            payload : false
        })
    })
}


export const  UpdateDoctor = ( data ) => dispatch => {
    axios.post(`/api/doctors/updatedoctor/${data.id}`)
    .then(res=>{
        console.log("response from  Get doctor" , res.data)
        dispatch({
            type : UPDATE_DOCTOR,
            payload : data.id
        })

    })   
    .catch(error => { console.log("error are "), error})    
       
}



export const  Get_Doctors = ( ) => dispatch => {
    axios.get('/api/doctors/Get_Doctor')
    .then(res=>{
        console.log("response from  Get doctor" , res.data.data)
        // dispatch({
        //     type : IS_LODDING,
        //     payload : true
        // })
        dispatch({
            type : GET_DOCTOR,
            payload : res.data.data
        })

    })
    .catch(error =>{
        console.log("response from backend error" , error.response)
        dispatch({
            type : GET_ERRORS,
            payload : error.response
        })

        dispatch ({
            type  : IS_LODDING,
            payload : false
        })
    })
}







export const Delete_Doctor = (id) => dispatch => {

    axios
    .get(`/api/doctors/Delete_Doctor/${id}`)
    .then(res=>{
        console.log("Doctor Deleted Successfully" , res.data)
        dispatch({
            type : DELETE_DOCTOR ,
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


// export const Get_Reletive_Doctor = ( ) => dispatch => {

//     axios.get('/api/doctors/Get_Reletive')
//     .then(res =>{
//         console.log("appoint get successfully " , res.data,data)

//         dispatch({
//             type : GET_RELETIVE_APPOINT,
//             dispatch : res.data.data
//         })
//     })
//     .catch(err=>{
//         console.log("appoint process fail" , err.data)
//         dispatch({
//             type : GET_ERRORS,
//             dispatch: err.response.data
//         })
//     })
// }



export const loginDoctor = (doctor) => dispatch => {
    axios.post('/api/doctors/login', doctor)
            .then(res => {
                console.log("login successfully " , res.data )
                const { token } = res.data;
                localStorage.setItem('DoctorJwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentDoctor(decoded));
            })
            .catch(err => {
                console.log("login process fail " , err.response )

                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}

export const setCurrentDoctor = decoded => {
    return {
        type: SET_CURRENT_DOCTOR,
        payload: decoded
    }
}

export const logoutDoctor = (history) => dispatch => {
    localStorage.removeItem('DoctorJwtToken');
    setAuthToken(false);
    dispatch(setCurrentDoctor({}));
    window.location.href = '/login';
}