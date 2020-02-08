import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER  } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerAdmin = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
            .then({})
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}

export const loginAdmin = (user) => dispatch => {
    axios.post('/api/users/login', user)
            .then(res => {
                console.log("login  process succesfully " , res.data)
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutAdmin = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    window.location.href = '/login'
}