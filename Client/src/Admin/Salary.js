import React, { Component } from 'react'
import './admin.css'
import Include from './include';
import Nav from './Navbar/navbar';
class RegSalary extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <Include/>


          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

              <Nav/>
              
              <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800"> Salary Registration</h1>
                </div>

                <div className="row">

                  <div className="col-xl-1 col-md-2 ">

                  </div>

                  <div className="col-xl-10">
                    <form className="user">
                      <div className="form-group row">
                        <div className="col-md-12 mb-3  mb-sm-0 ">
                          <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="Full Name" />
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
                        <select className="form-control " name="speclist">
                            <option defaultChecked>Please Select ( Specilization) </option>
                            <option value="Hurt Surgun">Hurt Surgun</option>
                            <option value="Liver Specilist">Liver Specilist</option>
                            <option value="Eyes Specilist">Eyes Specilist</option>
                            <option value="Ear Specilist">Ear Specilist</option>
                            <option value="Bone Specilist">Bone Specilist</option>
                            <option value="Chust Specilist">Chust Specilist</option>
                            <option value="Skin Specilist">Skin Specilist</option>
                            <option value="Dentest Specilist">Dentest Specilist</option>


                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input type="date" className="form-control form-control-user" name="mobile" />
                        </div>
                        <div className="col-md-6">
                        <select className="form-control from-control-user" name="join">
                            <option defaultChecked>Please Select (payment Sechedule) </option>
                            <option value="Monthly">Monthly </option>
                            <option value="Advance">Advance</option>
                            

                          </select>
                        </div>
                      </div>

        
                      <div className="form-group row">
                        <div className="col-md-12 mb-3 mb-sm-0">
                          <input type="number" className="form-control form-control-user" name="pay" placeholder="Payment" />
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
              <div className="container-fluid">
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
export default RegSalary