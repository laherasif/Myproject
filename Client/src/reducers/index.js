import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import AdddoctorReducer from './doctorReducer';
import StaffReducer from './StaffReducer';
import WorkerReducer from './workerReducer';
import AppointReducer from './appointmentReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    doctor : AdddoctorReducer,
    staff : StaffReducer,
    worker : WorkerReducer,
    appoint : AppointReducer
});