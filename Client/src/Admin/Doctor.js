import React, { Component } from 'react'
import './admin.css'
import { connect } from 'react-redux'
import Include from './include';
import classnames from 'classnames'
import { registerDoctor } from '../actions/doctorActon';
import { setTimeout } from 'timers';
import Nav from './Navbar/navbar';
class RegDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      gender: '',
      cnic: '',
      mobile: '',
      specil: '',
      joinAs: '',
      email: '',
      qualification :'',
      experience : '',
      base : '',
      password : '',
      dateofbirth: '',
      picture: '',
      address: '',
      errors: {}
      ,
      SendMessage: {}

    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
          errors: nextProps.errors
      });
  }
    if (nextProps.SendMessage) {
      this.setState({
        SendMessage: nextProps.SendMessage
      })
    }
  }

  ChangeFile = (e) => {
    this.setState({ [e.target.id]: e.target.files[0] })
}


  ChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    },
      // () => {
      //   this.setState({
      //     isProces: true
      //   }, () => {
      //     this.RunError()
      //   })
      // }
    )

  }


  // RunError = () => {
  //   const { fname } = this.state
  //   this.setState({
  //     fnameError:
  //       fname.length > 0 ? null : "First name must be 1 to 32 charchor"
  //   })


  // }

  OnSubmit = (e) => {
    e.preventDefault()
    const { fname, lname, gender, cnic, dateofbirth, mobile, specil, joinAs, email,  picture ,qualification  , experience , base , password , address } = this.state


    let formData = new FormData();
    formData.append('fname', fname)
    formData.append('lname', lname)
    formData.append('cnic', cnic)
    formData.append('gender', gender)
    formData.append('dateofbirth', dateofbirth)
    formData.append('mobile', mobile)
    formData.append('specil', specil)
    formData.append('joinAs', joinAs)
    formData.append('email', email)
    formData.append('qualification' , qualification)
    formData.append('experience' , experience)
    formData.append('base' , base)
    formData.append('picture', picture)
    formData.append('password', password)
    formData.append('address', address)
    this.props.registerDoctor(formData);
    setTimeout(() => {
      this.setState({
        fname: '',
        lname: '',
        cnic: '',
        gender: '',
        dateofbirth: '',
        mobile: '',
        specil: '',
        joinAs: '',
        email: '',
        picture : '',
        password : '',
        address: '',
      })
      setTimeout(() => {
        this.setState({
          SendMessage: ''
        })
      }, 5000);

    }, 1500);



  }




  render() {
    const { errors } = this.state



    console.log("state  ", this.state)
    return (

      <div>
        <div id="wrapper">
          <Include />


          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

              <Nav/>

              <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Doctor Registration</h1>
                </div>

                <hr></hr>

                <div className="row">

                  <div className="col-xl-1 col-md-2">

                  </div>

                  <div className="col-xl-10">

                    {/* {console.log("error eamil ", this.props.errors)}S */}
                    {this.state.SendMessage.length > 0 ? <div className="alert alert-success" >{
                      this.state.SendMessage
                    }</div> : ''}

                    <form className="user" onSubmit={this.OnSubmit} style={{ marginTop: 20 }} encType="multipart/form-data">
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            placeholder="First Name"
                            className={classnames('form-control form-control-user', {
                              'is-invalid':errors.fname 
                            })}
                            name="fname"
                            // onBlur={this.RunError}
                            onChange={this.ChangeValue}
                            value={this.state.fname}
                          />
                          {/* {<div className="invalid-feedback">{this.state.fnameError}</div>} */}
                        </div>
                          {errors.fname && (<div className="invalid-feedback">{errors.fname}</div>)}
                          
                        <div className="col-md-6">
                          <input type="text"
                            className={classnames('form-control form-control-user', {
                              'is-invalid': errors.lname 
                            })}
                            onChange={this.ChangeValue}
                            // onBlur={this.RunError}
                            name="lname"
                            value={this.state.lname}
                            placeholder="Last Name" />
                          {/* {<div className="invalid-feedback" > {this.state.lnameError} </div>} */}
                          {errors.lname && (<div className="invalid-feedback">{errors.lname} </div>)}
                        </div>
                        {console.log("errors in field" , this.state.errors)}
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <select className="form-control from-control-user"
                            onChange={this.ChangeValue}
                            name="gender" value={this.state.gender}>
                            <option defaultChecked>Please Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input type="text"
                            className={classnames('form-control form-control-user', {
                              'is-invalid': errors.cnic
                            })}
                            onChange={this.ChangeValue}
                            value={this.state.cnic}
                            name="cnic"
                            placeholder="Cnic (e.g - xxxxx-xxxxxxx-x) " />
                          {errors.cnic && (<div className="invalid-feedback">{errors.cnic} </div>)}

                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input type="text"
                            className={classnames('form-control form-control-user', {
                              'is-invalid': errors.mobile
                            })}
                            onChange={this.ChangeValue}
                            value={this.state.mobile}
                            name="mobile" placeholder="Mobile" />
                          {errors.mobile && (<div className="invalid-feedback">{errors.mobile} </div>)}

                        </div>
                        <div className="col-md-6">
                          <input type="date"
                            className={classnames('form-control form-control-user', {
                              'is-invalid': errors.dateofbirth
                            })}
                            onChange={this.ChangeValue}
                            value={this.state.dateofbirth}
                            name="dateofbirth" placeholder="Date of Birth" />
                          {errors.dateofbirth && (<div className="invalid-feedback">{errors.dateofbirth} </div>)}

                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0 ">
                          <select className="form-control "
                            name="specil" value={this.state.specil}
                            onChange={this.ChangeValue}>
                            <option defaultChecked>Please Select ( Specilization) </option>
                            <option value="Hurt Surgun">Hurt Surgun</option>
                            <option value="Liver Specilist">Liver Specilist</option>
                            <option value="Eyes Specilist">Eyes Specilist</option>
                            <option value="Ear Specilist">Ear Specilist</option>
                            <option value="Ultra-Sound Specilist">Ultra-Sound Specilist</option>
                            <option value="Bone Specilist">Bone Specilist</option>
                            <option value="Chust Specilist">Chust Specilist</option>
                            <option value="Skin Specilist">Skin Specilist</option>
                            <option value="Dentest Specilist">Dentest Specilist</option>


                          </select>
                        </div>
                        <div className="col-md-6">
                          <select className="form-control from-control-user"
                            name="joinAs" onChange={this.ChangeValue} value={this.state.joinAs}>
                            <option defaultChecked>Please Select (Appoint As) </option>
                            <option value="Assistant Medical Officer">Assistant Medical Officer</option>
                            <option value="Sub Assistant Medical Officer">Assistant Medical Officer</option>
                            <option value="Juniour Medical Officer">Juniour Medical Officer</option>
                            <option value=" Assistant Medicine Officer">Assistant Medicine Officer</option>
                            <option value="juniour Medical Officer">Juniour Medicine Officer</option>
                            <option value="Surgen Officer">Surgen Officer</option>

                          </select>
                        </div>

                      </div>

                      
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input type="email"
                            className={classnames('form-control form-control-user', {
                              'is-invalid': errors.email
                            })}
                            value={this.state.email}
                            onChange={this.ChangeValue}
                            name="email" placeholder="Email" />
                          {errors.email && (<div className="invalid-feedback">{errors.email} </div>)}
                        </div>
                        <div className="col-md-6 ">
                          <input type="file"   onChange={this.ChangeFile} id="picture" className="form-control " name="picture" />
                        </div>

                      </div>

                      <div className="form-group row">
                        <div className="col-md-3 mb-3 mb-sm-0">
                          <select className="form-control from-control-user" name="qualification"
                          value={ this.state.qualification } onChange={this.ChangeValue} >
                            <option defaultChecked>Qualification  </option>
                            <option value="MBBSC">MBBSC</option>
                            <option value="MBBS">MBBS</option>
                         


                          </select>
                        </div>
                        <div className="col-md-3 ">
                          <select className="form-control from-control-user" name="experience"
                          value={this.state.experience} onChange={this.ChangeValue}>
                            <option defaultChecked>  Experience </option>
                            <option value="3 year ">3 year </option>
                            <option value="4 year ">4 year </option>
                            <option value="5 year ">5 year</option>
                            <option value="6 year ">6 year </option>


                          </select>
                        </div>

                      <div className="col-md-6 ">
                        <select className="form-control from-control-user" name="base"
                        value={this.state.base} onChange={this.ChangeValue}>
                          <option defaultChecked>Please Select ( Appoint Base ) </option>
                          <option value="Permanent">Permament</option>

                        </select>
                      </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input type='password' 
                          value={this.state.password} 
                          onChange={this.ChangeValue} 
                          placeholder="Password Here.."
                          className="form-control form-control-user" name="password" />
                        </div>
                        <div className="col-md-6 ">
                          <input type="text"
                            className={classnames('form-control form-control-user', {
                              'is-invalid': errors.address
                            })}
                            onChange={this.ChangeValue}
                            value={this.state.address}
                            name="address"
                            placeholder="Permament Address" />
                          {errors.address && (<div className="invalid-feedback">{errors.address} </div>)}

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

            <footer className="sticky-footer bg-white ">
              <div className="container-fluid">
                <div className="copyright text-center ">
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
  doctor : state.doctor,
  SendMessage: state.doctor.SendMessage,

})
export default connect(mapStateToProps, { registerDoctor })(RegDoctor)