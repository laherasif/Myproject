import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




// Doctor Pages

import DocDashboard from '../Doctor/DoctorDashboard';
import RegPatient from '../Doctor/Patient';
import AllPatients from '../Doctor/PatientsData/Patients';
import AllAppointment from '../Doctor/Appointments/AllAppointments';
import AceptAppointment from '../Doctor/Appointments/AcceptAppointent';
import PendAppointment from '../Doctor/Appointments/PenddingAppointent.1';
import AdminAnnounce from '../Doctor/Appointments/AdminAnnoucment';
import SalaryStatus from '../Doctor/Appointments/SalaryStatus';


// Admin pages 

import ADashboard from '../Admin/AdminDashboard'
import RegDoctor from '../Admin/Doctor';
import RegStaff from '../Admin/Staff';
import RegWorker from '../Admin/Worker';
import RegAnnounce from '../Admin/Annnounce';
import AllDoctors from '../Admin/Registered/Doctors';
import AllStaff from '../Admin/Registered/Staffs';
import AllWorkers from '../Admin/Registered/Workers';
import AllAnnounce from '../Admin/Registered/Announcements';
import RegSalary from '../Admin/Salary';
import AllSalary from '../Admin/Registered/Salarys';
import Login from './Login';
import Register from './Register';

// Private Routes

import PrivateRoute from '../PrivateRoute/PrivateAdRutes' 
import PrivateDRoute from '../PrivateRoute/PrivateDocRoutes';
import Appointment from './Appointment';
import Review_Info from './Review';
import Cencel_Change from './cenceAppoint';

// import New from './new';

import UpdateData from '../Admin/Registered/Upload'
import Home from './Home';
import StaffUpdate from '../Admin/Edit and update/StaffUpdate';

class Rout extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>

                              
                              {/* Login and Register  */}

                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />

                        { /* Home page */}
                        <Route exact path="/" component={Home} />


                        { /* Admin Dashboard*/}
                      <PrivateRoute  path="/Dashboard" component={ADashboard} />

                        { /* Register Employes*/}
                        <PrivateRoute path="/register_Doctor" component={RegDoctor} />
                        <PrivateRoute path="/register_Staff" component={RegStaff} />
                        <PrivateRoute path="/register_Worker" component={RegWorker} />
                        <PrivateRoute path="/register_Announce" component={RegAnnounce} />
                        <PrivateRoute path="/register_Salary" component={RegSalary} />

                        { /* All Employes Date*/}
                        <PrivateRoute path="/all_Doctor" component={AllDoctors} />
                        <PrivateRoute path="/all_Staff" component={AllStaff} />
                        <PrivateRoute path="/all_Worker" component={AllWorkers} />
                        <PrivateRoute path="/all_Announce" component={AllAnnounce} />
                        <PrivateRoute path="/all_Salary" component={AllSalary} />


                        {/* Cencel && Change */}
                        {/* <Route patth="/Cencel/Change" component={Cencel_Change}/> */}

                        { /* Doctor Dashboard*/}
                      <PrivateDRoute  path="/D_Dashboard" component={DocDashboard} />

                        { /* Patients Registration */}
                        <Route path="/register_Patient" component={RegPatient} />

                        { /* All Appointments and Patients Data */}
                        <Route path="/appointments" component={Appointment}/>
                        <Route path="/all_Patient" component={AllPatients} />
                        <Route path="/all_Appointments" component={AllAppointment} />
                        <Route path="/all_Accepted_Appointment" component={AceptAppointment} />
                        <Route path="/all_Pendding_Appointment" component={PendAppointment} />

                        { /* Doctor  Reletive Data*/}
                        <Route path="/Check_admin_Announcement" component={AdminAnnounce} />
                        <Route path="/Check_Salary_Status" component={SalaryStatus} />


                       {/* new Route Appoint  */}
                        <Route path="/Review" component={Review_Info}/>
                         <Route path="/Edit/:_id"  component={UpdateData}/>
                         <Route path="/EditStaff/:_id" component={StaffUpdate}/>
 
                        {/* <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } /> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Rout