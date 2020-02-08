import React, { Component } from 'react'
import './admin.css'
import Include from './include';
import Nav from './Navbar/navbar';
class RegAnnounce extends Component {
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
                  <h1 className="h3 mb-0 text-gray-800">Announcements Registration</h1>
                </div>

                <div className="row">

                  <div className="col-xl-1 col-md-2 ">

                  </div>

                  <div className="col-xl-10">
                    <form className="user">
                      <div className="form-group row">
                        <div className="col-md-6 mb-3  mb-sm-0 ">
                          <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="Tittle" />
                        </div>
                        
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <select className="form-control from-control-user" name="gender">
                            <option defaultChecked>Please Select ( Send to ) </option>
                            <option value="Doctors">Doctors</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input type="date" className="form-control form-control-user" />
                        </div>
                      
                      </div>
                    

                      
                      <div className="form-group row">
                        <div className="col-md-12 mb-3 mb-sm-0">
                          <textarea  className="form-control " name="desc" rows="10" cols="20" placeholder="Permament Address"></textarea>
                        </div>

                      </div>
                      <div className="form-group row">
                        <div className="col-md-12 mb-3 mb-sm-0">
                         <button className="btn btn-success">Send</button>
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
export default RegAnnounce