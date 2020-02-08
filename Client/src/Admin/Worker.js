import React, { Component } from 'react'
import './admin.css'
import Include from './include'
import Nav from './Navbar/navbar';
import { connect } from 'react-redux'
import { registerWorker } from '../actions/workerAction'
class RegWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      gender: '',
      cnic: '',
      mobile: '',
      specilist: '',
      status : '',
      dateofbirth: '',
      picture: '',
      address: '',
      errors: {}
      ,
      SuccessMessage: {}

    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.SuccessMessage) {
      this.setState({
        SuccessMessage: nextProps.SuccessMessage
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
     
    )

  }
  

  OnSubmit = (e) => {
    e.preventDefault()
    const { fname, lname, gender, cnic, dateofbirth, mobile, specilist, picture , address , status } = this.state


    let formData = new FormData();
    formData.append('fname', fname)
    formData.append('lname', lname)
    formData.append('cnic', cnic)
    formData.append('gender', gender)
    formData.append('dateofbirth', dateofbirth)
    formData.append('mobile', mobile)
    formData.append('specilist', specilist)
    formData.append('status' , status)
    formData.append('picture', picture)
    formData.append('address', address)
    this.props.registerWorker(formData);
    setTimeout(() => {
      this.setState({
        fname: '',
        lname: '',
        cnic: '',
        gender: '',
        dateofbirth: '',
        mobile: '',
        specilist: '',
        email: '',
        picture : '',
        password : '',
        address: '',
      })
      setTimeout(() => {
        this.setState({
          SuccessMessage: ''
        })
      }, 5000);

    }, 1500);



  }

  render() {
    console.log("state" , this.state)
    return (
      <div>
        <div id="wrapper">
          <Include/>


          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

              <Nav/>

              <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Worker Registration</h1>
                </div>

                <div className="row">

                  <div className="col-xl-1 col-md-2 ">

                  </div>

                  <div className="col-xl-10">

                  {this.state.SuccessMessage.length > 0 ? <div className="alert alert-success" >{
                      this.state.SuccessMessage
                    }</div> : ''}

                    <form className="user" onSubmit={this.OnSubmit}>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3  mb-sm-0 ">
                          <input type="text" className="form-control form-control-user"
                          onChange={this.ChangeValue}
                          name="fname"
                          value={this.state.fname} 
                          placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user"
                           name="lname"
                           onChange={this.ChangeValue}

                           value={this.state.lname} 
                           placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <select className="form-control from-control-user"
                           value={this.state.gender} 
                           onChange={this.ChangeValue}
                           
                           name="gender">
                            <option defaultChecked>Please Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user"
                           name="cnic"
                           onChange={this.ChangeValue}

                           value={this.state.cnic} 
                           placeholder="Cnic (e.g - xxxxx-xxxxxxx-x) " />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                        <input type="date"
                            onChange={this.ChangeValue}
                  
                         value={this.state.dateofbirth} 
                         className="form-control " name="dateofbirth" />

                          </div>
                          <div className="col-md-6 mb-3 mb-sm-0">
                          <input type="text" 
                          className="form-control form-control-user"
                          name="mobile"
                          onChange={this.ChangeValue}
                      
                          value={this.state.mobile} 
                           placeholder="Mobile" />
                          </div>
                          </div>
                      <div className="form-group row">
                      
                        <div className="col-md-6 mb-3 mb-sm-0 ">
                          <select className="form-control " name="specilist"
                            onChange={this.ChangeValue}
                           value={this.state.specilist} >
                            <option defaultChecked>Please Select </option>
                            <option value="Sweeper">Sweeper</option>
                            <option value="Air-Conditioner Mecanic">Air-Conditioner Mecanic</option>
                            <option value="Security Guard">Security Guard</option>
                            <option value="Plumbber">Plumbber</option>
                            <option value="Electrician">Electrician</option>
                            {/* <option value="Chust Specilist"></option>
                            <option value="Skin Specilist">Skin Specilist</option>
                            <option value="Dentest Specilist">Dentest Specilist</option> */}


                          </select>
                        </div>
                        <div className="col-md-6 mb-3 mb-sm-0">
                        <select className="form-control " name="status"
                        value={this.state.status}
                        onChange={this.ChangeValue}
                        >
                            <option defaultChecked>Please Select (Status) </option>
                            <option value="permanent">Permament</option>
                            </select>
                        </div>
                      </div>
                      <div className="form-group row">
                      <div className="col-md-6 mb-3 mb-sm-0">
                        <input type="file" className="form-control"
                         name="picture" id="picture" onChange={this.ChangeFile}/>
</div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12 mb-3 mb-sm-0">
                          <input type="text"
                           className="form-control form-control-user"
                            name="address"
                            value={this.state.address}
                            onChange={this.ChangeValue}
                             placeholder="Permament Address" />
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
const mapStateToProps = (state) => ({
  errors: state.errors,
  worker : state.worker,
  SuccessMessage: state.worker.SuccessMessage,

})
export default connect(mapStateToProps , { registerWorker} ) (RegWorker)