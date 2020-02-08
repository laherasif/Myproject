import axios from 'axios';
import { GET_ERRORS, GET_SALARY, REG_SALARY } from './types';

export const registerSalary = (user) => dispatch => {
    axios.post('/api/salarys/register', user)
    .then(res =>{
        console.log("salary register successfully " , res.data,data)

        dispatch({
            type : REG_SALARY,
            dispatch : res.data.data
        })
    })
    .catch(err=>{
        console.log("Salary process fail" , err.data)
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}
export const Get_Salary = ( ) => dispatch => {

    axios.get('/api//Get_Salary')
    .then(res =>{
        console.log("salary get successfully " , res.data,data)

        dispatch({
            type : GET_SALARY,
            dispatch : res.data.data
        })
    })
    .catch(err=>{
        console.log("Salary process fail" , err.data)
        dispatch({
            type : GET_ERRORS,
            dispatch: err.response.data
        })
    })
}
