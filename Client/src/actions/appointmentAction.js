import axios from 'axios';
import { GET_ERRORS, GET_APPOINT, REG_APPOINT } from './types';

export const registerAppointment = (user) => dispatch => {
    axios.post('/api/appointments/register', user)
            .then(res =>{
                console.log('appointments are added' , res.data)
                dispatch({
                    type : REG_APPOINT,
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

export const getAppointment = ( ) => dispatch => {

    axios.get('/api/appointments/Get_Appoint')
    .then(res =>{
        console.log("appoint get successfully " , res.data)

        dispatch({
            type : GET_APPOINT,
            dispatch : res.data.data
        })
    })
    .catch(err=>{
        console.log("appoint process fail" , err.response)
        dispatch({
            type : GET_ERRORS,
            dispatch: err.response
        })
    })
}


export const Get_Reletive_Appoi = ( ) => dispatch => {

    axios.get('/api/appoint/Get_Appoint')
    .then(res =>{
        console.log("appoint get successfully " , res.data)

        dispatch({
            type : GET_APPOINT,
            dispatch : res.data.data
        })
    })
    .catch(err=>{
        console.log("appoint process fail" , err.data)
        dispatch({
            type : GET_ERRORS,
            dispatch: err.response.data
        })
    })
}


