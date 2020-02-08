import React, { Component } from 'react'
import './doctor.css'
import Include from './include';
class RegPatient extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <Include/>


          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                  <i className="fa fa-bars"></i>
                </button>

                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>

                <ul className="navbar-nav ml-auto">

                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="data" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-search fa-fw"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="data" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-bell fa-fw"></i>
                      <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                      <h6 className="dropdown-header">
                        Alerts Center
    </h6>
                      <a className="dropdown-item d-flex align-items-center" href="data">
                        <div className="mr-3">
                          <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">December 12, 2019</div>
                          <span className="font-weight-bold">A new monthly report is ready to download!</span>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="aa">
                        <div className="mr-3">
                          <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">December 7, 2019</div>
                          $290.29 has been deposited into your account!
      </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="data">
                        <div className="mr-3">
                          <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">December 2, 2019</div>
                          Spending Alert: We've noticed unusually high spending for your account.
      </div>
                      </a>
                      <a className="dropdown-item text-center small text-gray-500" href="">Show All Alerts</a>
                    </div>
                  </li>

                  <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="data" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-envelope fa-fw"></i>
                      <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                      <h6 className="dropdown-header">
                        Message Center
    </h6>
                      <a className="dropdown-item d-flex align-items-center" href="d">
                        <div className="dropdown-list-image mr-3">
                          <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                          <div className="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="d">
                        <div className="dropdown-list-image mr-3">
                          <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                          <div className="status-indicator"></div>
                        </div>
                        <div>
                          <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                          <div className="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="d">
                        <div className="dropdown-list-image mr-3">
                          <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                          <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                          <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                          <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="d">
                        <div className="dropdown-list-image mr-3">
                          <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                          <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                          <div className="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                      </a>
                      <a className="dropdown-item text-center small text-gray-500" href="sa">Read More Messages</a>
                    </div>
                  </li>

                  <div className="topbar-divider d-none d-sm-block"></div>

                  <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="d" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                      {/* <img class="img-profile rounded-circle" src=""/> */} {/* User picture*/}
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                      <a className="dropdown-item" href="d">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
    </a>
                      <a className="dropdown-item" href="d">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
    </a>
                      <a className="dropdown-item" href="d">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
    </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="d" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
    </a>
                    </div>
                  </li>

                </ul>


              </nav>

              <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Patients Registration</h1>
                </div>


                <div className="row">

                  <div className="col-xl-1 col-md-2 ">

                  </div>

                  <div className="col-xl-10">
                    <form className="user">
                    <div className="form-group row">
                        <div className="col-md-6 mb-3  mb-sm-0 ">
                        <label>Appointment Date</label>
                          <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="Appointment Date" />
                        </div>
                        </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3  mb-sm-0 ">
                          <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <select className="form-control from-control-user" name="gender">
                            <option selected>Please Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user" name="age" placeholder="Age" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user" name="cnic" placeholder="Cnic (e.g - xxxxx-xxxxxxx-x) " />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user" name="address" placeholder="Email Address" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0 ">
                        <input type="text" className="form-control form-control-user" name="address" placeholder="Disease" />
                        
                        </div>
                        <div className="col-md-6  ">
                        <input type="text" className="form-control form-control-user" name="mobile" placeholder="Mobile" />
                     </div>

                      </div>
                      <div className="form-group row">
                        <div className="col-md-12 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user" name="mobile" placeholder="Permament Address" />
                        </div>

                      </div>
                      <div className="form-group row">
                        <div className="col-md-12 mb-3 mb-sm-0">
                         <button className="btn btn-success">Register</button>
                        </div>

                      </div>
                    </form>
                  </div>
                  <div className="col-xl-1  ">

                  </div>

                </div>


              </div>
            </div>

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2019</span>
                </div>
              </div>
            </footer>
          </div>

        </div>
      </div>

    );
  }
}
export default RegPatient