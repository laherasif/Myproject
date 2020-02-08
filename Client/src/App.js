import React, { Component } from 'react';
import { connect  } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutAdmin } from './actions/Admin';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Rout from './components/Routes';
import { setCurrentDoctor } from './actions/doctorActon';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
//    alert("Please Login Again your Session has expired .")
    store.dispatch(logoutAdmin());
    window.location.href = '/login'
  }
}

else if(localStorage.DoctorJwtToken)
{
  setAuthToken(localStorage.DoctorJwtToken);
  const decod = jwt_decode(localStorage.DoctorJwtToken);
  store.dispatch(setCurrentDoctor(decod));
  // const cTime = Date.now()/200;
  // if(decod.exp < cTime)
  // {
  //   store.dispatch(logoutDoctor());
  //   window.location.href = '/login'
  // }
}


class App extends Component {
 
  render() {
    return (
        
    <div>
      <Rout/>
      </div>
      
        
    );
  }
}

const maptoStatetoProps = (state)=>({
   auth : state.auth,
   doctor : state.doctor
})

export default connect(maptoStatetoProps)(App);
