import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Include extends Component {
  state={
    isShow : true
  }

  Toggle = ( ) =>{

    this.setState({
      isShow : !this.state.isShow
    })
  }
  render() {
 
    console.log("toggle " , this.state.isShow)

    return (
      <div>
        {this.state.isShow ? 
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin <sup>2</sup></div>
          </a>

          <hr className="sidebar-divider my-0"></hr>

          <li className="nav-item active">
            <Link to="/Dashboard" className="nav-link">
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
              <span>Doctor Reg</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Doctor Register:</h6> */}
                <Link to="/register_Doctor" className="collapse-item">Register Doctor</Link>
                <Link to="/all_Doctor" className="collapse-item" >All Reg Doctors</Link>
              </div>
            </div>
          </li>
          <hr className="sidebar-divider"></hr>

          <li className="nav-item">
            <a className="nav-link collapsed" href="sds" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-wrench"></i>
              <span>Staff Reg </span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
                <Link to="/register_Staff" className="collapse-item">Register Staff</Link>
                <Link to="/all_Staff" className="collapse-item" >All Reg Staff</Link>
              
              </div>
            </div>
          </li>

          <hr className="sidebar-divider"></hr>

          {/* <div className="sidebar-heading">
Addons
</div> */}

          <li className="nav-item">
            <a className="nav-link collapsed" href="link" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>Reg Workers</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Login Screens:</h6> */}
                <Link to="/register_Worker" className="collapse-item">Register Workers</Link>
                <Link to="/all_Worker" className="collapse-item" >All Reg Workers</Link>

                
              </div>
            </div>
          </li>
          <hr className="sidebar-divider"></hr>
          <li className="nav-item">
            <a className="nav-link collapsed" href="data" data-toggle="collapse" data-target="#annonce" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>Reg Announcements</span>
            </a>
            <div id="annonce" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Login Screens:</h6> */}
                <Link to="/register_Announce" className="collapse-item">Register Announcements</Link>
                <Link to="/all_Announce" className="collapse-item" >All Reg Announcements</Link>

                {/* <a className="collapse-item" href="forgot-password.html">Forgot Password</a> */}
                {/* <div className="collapse-divider"></div>
<h6 className="collapse-header">Other Pages:</h6>
<a className="collapse-item" href="404.html">404 Page</a>
<a className="collapse-item" href="blank.html">Blank Page</a> */}
              </div>
            </div>
          </li>
          <hr className="sidebar-divider"></hr>

          <li className="nav-item">
            <a className="nav-link collapsed" href="data" data-toggle="collapse" data-target="#med" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>Reg Salary</span>
            </a>
            <div id="med" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {/* <h6 className="collapse-header">Login Screens:</h6> */}
               
                <Link to="/register_Salary" className="collapse-item">Register Salary</Link>
                <Link to="/all_Salary" className="collapse-item" >All Reg Salarys</Link>
              </div>
            </div>
          </li>




          <hr className="sidebar-divider d-none d-md-block"></hr>

          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" onClick={this.Toggle}></button>
          </div>

        </ul>
: "not working " 
  }




      </div>
    )
  }
}
export default Include