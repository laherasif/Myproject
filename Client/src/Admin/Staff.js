import React, { Component } from 'react'
import './admin.css'
import Include from './include'
import { connect } from 'react-redux'
import {registerStaff} from '../actions/StaffAction'
import Nav from './Navbar/navbar';
class RegStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      gender: '',
      cnic: '',
      mobile: '',
      Specilist: '',
      email: '',
      qualification: '',
      experience: '',
      base: '',
      dateofbirth: '',
      picture: '',
      address: '',
      errors: {},
      SucessMessage: {}
    }
  }

  ChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  FileChange = (e) => {
    this.setState({
      [e.target.id]: e.target.files[0]
    })
  }

  componentWillReceiveProps(nextprops){
    if(nextprops.SucessMessage)
    {
      this.setState({
        SucessMessage : nextprops.SucessMessage
      })
    }
  }

  OnSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, gender, cnic, dateofbirth, mobile, Specilist, email, picture, qualification, experience, base, address } = this.state


    let formData = new FormData();
    formData.append('fname', fname)
    formData.append('lname', lname)
    formData.append('cnic', cnic)
    formData.append('gender', gender)
    formData.append('dateofbirth', dateofbirth)
    formData.append('mobile', mobile)
    formData.append('Specilist', Specilist)
    formData.append('email', email)
    formData.append('qualification', qualification)
    formData.append('experience', experience)
    formData.append('base', base)
    formData.append('picture', picture)
    formData.append('address', address)
    this.props.registerStaff(formData);
    setTimeout(() => {
      this.setState({
        fname: '',
        lname: '',
        cnic: '',
        gender: '',
        dateofbirth: '',
        mobile: '',
        Specilist: '',
        email: '',
        picture: '',
        qualification : '',
        experience : '',
        base :'',
       address: '',
       
      })
      setTimeout(() => {
        this.setState({
          SucessMessage: ''
        })
      }, 5000);

    }, 1500);
  }

  render() {
    // console.log("state" , this.state)
    return (
      <div>
        <div id="wrapper">
          <Include />

          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

              <Nav />

              <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Staff Registration</h1>
                </div>
                <hr></hr>
                <div className="row">

                  <div className="col-xl-1 col-md-2 ">

                  </div>

                  <div className="col-xl-10">
    { this.state.SucessMessage.length > 0 ? 
    <div className="alert alert-success" >
      {this.state.SucessMessage}</div> : "" }
                    <form className="user" onSubmit={this.OnSubmit}>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3  mb-sm-0 ">
                          <input type="text" className="form-control form-control-user"
                            name="fname" value={this.state.fname}
                            onChange={this.ChangeValue} placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user"
                            value={this.state.lname} onChange={this.ChangeValue}
                            name="lname" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <select className="form-control from-control-user"
                            value={this.state.gender} onChange={this.ChangeValue} name="gender">
                            <option defaultChecked>Please Select ( Gender ) </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user"
                            name="cnic" value={this.state.cnic}
                            onChange={this.ChangeValue}
                            placeholder="Cnic (e.g xxxxx-xxxxxxx-x) " />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input type="date" className="form-control "
                            value={this.state.dateofbirth} onChange={this.ChangeValue}
                            name="dateofbirth" />

                        </div>
                        <div className="col-md-6">
                          <input type="text"
                            className="form-control form-control-user"
                            name="mobile"
                            value={this.state.mobile} onChange={this.ChangeValue}
                            placeholder="Mobile ( e.g +92-xxx-xxxxxxx )" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0 ">
                          <select className="form-control "
                            value={this.state.Specilist} onChange={this.ChangeValue}
                            name="Specilist">
                            <option defaultChecked>Please Select (Join As) </option>
                            <option value="Medical Nurse">Medical Nurse</option>
                            <option value="Ultra-Sound Nurse">Altra-Sound Nurse</option>
                            <option value="Roome Attendent">Roome Attendent</option>
                            <option value="Libortory Tester">Libortory Tester</option>
                            <option value="Dispansary Incharge">Dispansary Incharge</option>
                            <option value="Receptionist">Receptionist</option>
                            {/* <option value="Skin Specilist"></option>
                            <option value="Dentest Specilist">Dentest Specilist</option> */}


                          </select>

                        </div>
                        <div className="col-md-6">
                          <input type="email"
                            value={this.state.email} onChange={this.ChangeValue}
                            className="form-control form-control-user "
                            name="email" placeholder="Mailing Address" />

                        </div>

                      </div>
                      <div className="form-group row">
                        <div className="col-md-3 mb-3 mb-sm-0">
                          <select className="form-control from-control-user"
                            value={this.state.qualification} onChange={this.ChangeValue}
                            name="qualification">
                            <option defaultChecked>Qualification  </option>
                            <option value="Bs(Own's) ( 4 year )">Bs(Own's) ( 4 year )</option>
                            <option value="Bachelor ( 14 year )">Bachelor ( 14 year )</option>
                            <option value="Msc ( 16 year )">Msc ( 16 year )</option>
                            <option value="Msc ( 18 year )">Msc ( 18 year )</option>


                          </select>
                        </div>
                        <div className="col-md-3 ">
                          <select className="form-control from-control-user"
                            value={this.state.experience} onChange={this.ChangeValue}
                            name="experience">
                            <option defaultChecked>  Experience </option>
                            <option value="1 year ">1 year </option>
                            <option value="2 year ">2 year </option>
                            <option value="3 year ">3 year</option>
                            <option value="4 year ">4 year </option>


                          </select>
                        </div>

                        <div className="col-md-6 ">
                          <select className="form-control from-control-user"
                            value={this.state.base} onChange={this.ChangeValue}
                            name="base">
                            <option defaultChecked>Please Select ( Appoint Base ) </option>
                            <option value="Contract">Contract</option>
                            <option value="Permanent">Permament</option>

                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input type="file"
                            className="form-control"
                            onChange={this.FileChange}
                            name="picture" id="picture" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="text"
                          value={this.state.address} onChange={this.ChangeValue}
                          className="form-control form-control-user"
                          name="address" placeholder="Permament Address" />


                      </div>                        <div className="col-md-12 mb-3 mb-sm-0">

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
const mapStateToProps = (state) => ({
  errors: state.errors,
  staff : state.staff,
  SucessMessage: state.staff.SucessMessage,

})
export default connect(mapStateToProps , {registerStaff}) (RegStaff)