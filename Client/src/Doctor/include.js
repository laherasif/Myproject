import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Include extends Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Doctor <sup>2</sup></div>
          </a>

          <hr className="sidebar-divider my-0"></hr>

          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <i className="fa fa-tachometer-alt"></i>
              <span>Dashboard</span></Link>
          </li>

          <hr className="sidebar-divider"></hr>

          {/* <div className="sidebar-heading">
Interface
</div> */}

          <li className="nav-item">
            <a className="nav-link collapsed" href="sa" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog"></i>
              <span>Reg Patients</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Doctor Register:</h6> */}
                <Link to="/register_Patient" className="collapse-item">Register Patients</Link>
                <Link to="/all_Patient" className="collapse-item" >All Reg Patients</Link>
              </div>
            </div>
          </li>
          <hr className="sidebar-divider"></hr>

          <li className="nav-item">
            <a className="nav-link collapsed" href="sds" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-wrench"></i>
              <span>Appointments </span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
                <Link to="/all_Appointments" className="collapse-item" >All Appointments</Link>
                <Link to="/all_Accepted_Appointment" className="collapse-item">Accepted Appointments</Link>
                <Link to="/all_Pendding_Appointment" className="collapse-item" >All Pendding Appointments  </Link>

              
              </div>
            </div>
          </li>

          <hr className="sidebar-divider"></hr>

          <li className="nav-item">
            <a className="nav-link collapsed" href="data" data-toggle="collapse" data-target="#annonce" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>Admin Announcements</span>
            </a>
            <div id="annonce" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Login Screens:</h6> */}
                <Link to="/Check_admin_Announcement" className="collapse-item" >All Admin  Announcements</Link>

          
              </div>
            </div>
          </li>
          <hr className="sidebar-divider"></hr>

          <li className="nav-item">
            <a className="nav-link collapsed" href="data" data-toggle="collapse" data-target="#med" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>Salary Status</span>
            </a>
            <div id="med" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Login Screens:</h6> */}
               
                <Link to="/Check_Salary_Status" className="collapse-item" >Check Salary Status</Link>
              </div>
            </div>
          </li>




          <hr className="sidebar-divider d-none d-md-block"></hr>

          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

        </ul>





      </div>
    )
  }
}
export default Include