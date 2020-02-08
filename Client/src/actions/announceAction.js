import axios from 'axios';
import { GET_ERRORS, GET_ANNOUNCE } from './types';


export const registerAnnounce = (user, history) => dispatch => {
    axios.post('/api/announces/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const Get_Announce = ( ) => dispatch => {

    axios.get('/api/announce/Get_Announce')
    .then(res =>{
        console.log("annunce get successfully " , res.data,data)

        dispatch({
            type : GET_ANNOUNCE,
            dispatch : res.data.data
        })
    })
    .catch(err=>{
        console.log("announce process fail" , err.data)
        dispatch({
            type : GET_ERRORS,
            dispatch: err.response.data
        })
    })
}
