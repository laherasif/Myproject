import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerAppointment } from '../actions/appointmentAction'
import { Link } from 'react-router-dom'
import './appoint.css'
class Review_Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            condition: this.props.upload.condition,
            fname: this.props.upload.fname,
            lname: this.props.upload.lname,
            gender: this.props.upload.gender,
            mobile: this.props.upload.mobile,
            nationality: this.props.upload.nationality,
            spelist_doctor: this.props.upload.spelist_doctor,
            country: this.props.upload.country,
            email: this.props.upload.email,
            dateofbirth: this.props.upload.dateofbirth,
            // picture: this.props.upload.picture,
            date1: this.props.upload.date1,
            time1: this.props.upload.time1,
            date2: this.props.upload.date2,
            time2: this.props.upload.time2,
            visited: this.props.upload.visited,
            medical: this.props.upload.medical,
            hospital: this.props.upload.hospital,
            language: this.props.upload.language,
            name_doctor: this.props.upload.name_doctor,
            contect_no: this.props.upload.contect_no,
            first_message: this.props.upload.first_message,
            address : this.props.upload.address,
            message: this.props.upload.message,
            first: this.props.upload.first,
            Second: this.props.upload.Second,
            third: this.props.upload.third,
            forth: this.props.upload.forth,
            fifth: this.props.upload.fifth,



        }
    }


    DataSubmit = (e) =>{
    e.preventDefault();
    let formdata =  new FormData();
    formdata.append('fname' , this.state.fname)
    formdata.append('lname' , this.state.lname)
    formdata.append('gender' , this.state.gender)
    formdata.append('email' , this.state.email)
    formdata.append('dateofbirth' , this.state.dateofbirth)
    formdata.append('mobile' , this.state.mobile)
    formdata.append('hospital' , this.state.hospital)
    // formdata.append('picture' , this.state.picture)
    formdata.append('medical' , this.state.medical)
    formdata.append('date1' , this.state.date1)
    formdata.append('time1' , this.state.time1)
    formdata.append('date2' , this.state.date2)
    formdata.append('time2' , this.state.time2)
    formdata.append('nationality' , this.state.nationality)
    formdata.append('country' , this.state.country)
    formdata.append('condition' , this.state.condition)
    formdata.append('first_message' , this.state.first_message)
    formdata.append('name_doctor' , this.state.name_doctor)
    formdata.append('contect_no' , this.state.contect_no)
    formdata.append('message' , this.state.message)
    formdata.append('language' , this.state.language)
    // formdata.append('address' , this.state.address)

    this.props.registerAppointment(formdata);

   


    }

    render() {
        // console.log('review state', this.state.spelist_doctor)
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.DataSubmit}>
                        <div className="row">
                            <div id="bgcolor">
                                <div className="col-md-12">

                                    <div className="container-fluid">

                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h5 className="h5 mb-0 text-gray-800" id="detail">
        Appointments details</h5>
                                        </div>
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h5 className="h5 mb-0 text-gray-800" id="recmended">
                                            {this.state.spelist_doctor ? this.state.spelist_doctor  : "Recmended a doctor"}</h5>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-1">
                                                <span>
                                                    <i className="fa fa-file fa-2x text-gray-400"></i>
                                                </span>
                                            </div>
                                            <div className="col-md-11">
                                                <div id="fistpara">
                                                    <p id="Condition">Condition or Treatment</p>
                                                    <p>{this.state.condition}</p>
                                                </div>
                                            </div>


                                        </div>

                                        <div id="file">
                                            <div className="row">
                                                <div className="col-md-1">
                                                    <span>
                                                        <i className="fa fa-file fa-2x text-gray-400"></i>
                                                    </span>
                                                </div>
                                                <div className="col-md-11">
                                                    <div id="fistpara">
                                                        <p id="Condition">Medical concern or request</p>
                                                        <p>Forhensic medicine</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div id="file">
                                            <div className="row">
                                                <div className="col-md-1">
                                                    <span>
                                                        <i className="fa fa-upload fa-2x text-gray-400"></i>
                                                    </span>
                                                </div>
                                                <div className="col-md-11">
                                                    <div id="fistpara">
                                                        <p id="Condition">Attatch files(jpg .png .pdf -less ten 5MB in size)</p>
                                                        {/* <p>{this.state.picture}</p> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div id="patient_date">
                            <div className="row">
                                <div id="bgcolor2">
                                    <div className="col-md-12">

                                        <div className="container-fluid">

                                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                                <h5 className="h5 mb-0 text-gray-800" id="detail">Appointment date</h5>
                                            </div>


                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div id="fistpara">
                                                        <p id="Condition">Preferred date and time option 1* </p>
                                                        <p>{this.state.date1}</p>
                                                        <p>{this.state.time1}</p>


                                                    </div>
                                                </div>


                                            </div>

                                            <div id="file">
                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <div id="fistpara">
                                                            <p id="Condition">Preferred date and time option 2* </p>
                                                            <p>{this.state.date2}</p>
                                                            <p>{this.state.time2}</p>


                                                        </div>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                    </div>





                                </div>
                            </div>
                        </div>

                        <div id="additional">
                            <div className="row">
                                <div id="bgcolor2">
                                    <div className="col-md-12">

                                        <div className="container-fluid">

                                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                                <h5 className="h5 mb-0 text-gray-800" id="detail">Patient information</h5>
                                            </div>


                                            <div className="row">

                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <span><i className="fa fa-user fa-2x" style={{ paddingTop: '5px' }}></i></span>
                                                                </div>
                                                                <div className="col-md-10">
                                                                    <div id="name">
                                                                        <p id="namepara">Name</p>
                                                                        <p>{this.state.fname}{"-"}{this.state.lname}</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <span><i className="fa fa-mobile fa-2x" style={{ paddingTop: '5px' }}></i></span>
                                                                </div>
                                                                <div className="col-md-10">
                                                                    <div id="name">
                                                                        <p id="namepara">Primary phone number</p>
                                                                        <p>{this.state.mobile}</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="col-md-6"></div>




                                            </div>

                                            <div id="file">
                                                <div className="row">

                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-2">
                                                                        <span><i className="fa fa-box fa-2x" style={{ paddingTop: '5px' }}></i></span>
                                                                    </div>
                                                                    <div className="col-md-10">
                                                                        <div id="name">
                                                                            <p id="namepara">Email</p>
                                                                            <p>{this.state.email}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-2">
                                                                        <span><i className="fa fa-calendar fa-2x" style={{ paddingTop: '5px' }}></i></span>
                                                                    </div>
                                                                    <div className="col-md-10">
                                                                        <div id="name">
                                                                            <p id="namepara">Date of birth</p>
                                                                            <p>{this.state.dateofbirth}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>
                                                    <div className="col-md-6"></div>




                                                </div>

                                            </div>



                                        </div>
                                    </div>







                                </div>


                            </div>
                        </div>

                        <div id="additional">
                            <div className="row">
                                <div id="bgcolor2">
                                    <div className="col-md-12">

                                        <div className="container-fluid">

                                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                                <h5 className="h5 mb-0 text-gray-800" id="detail">Additional Services</h5>
                                            </div>


                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div id="fistpara">
                                                        <div className="row">
                                                            <div className="col-md-1">
                                                                <input type="checkbox"
                                                                    checked={this.state.first} />
                                                            </div>
                                                            <div className="col-md-11">
                                                                <p id="Culture_para">Culture support Services </p>

                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>


                                            </div>
                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div id="fistpara">
                                                        <div className="row">
                                                            <div className="col-md-1">
                                                                <input type="checkbox"
                                                                    checked={this.state.Second} />
                                                            </div>
                                                            <div className="col-md-11">
                                                                <p id="Culture_para">Need a hospital  doctor to contect you'r doctor</p>
                                                                <div id="name_of_doc">
                                                                    <h6 >Name of doctor</h6>
                                                                    <p>{this.state.name_doctor}</p>
                                                                    <h6>Contect number / email address</h6>
                                                                    <p>{this.state.contect_no}</p>
                                                                    <h6>Message</h6>
                                                                    <p>{this.state.message}</p>

                                                                </div>


                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>


                                            </div>
                                            <div hidden={this.state.forth ? false : true}>
                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div id="fistpara">
                                                        <div className="row">
                                                            <div className="col-md-1">
                                                                <input type="checkbox"
                                                                    checked={this.state.forth} />
                                                            </div>
                                                            <div className="col-md-11">
                                                                <p id="Culture_para">Agree to terms and condition </p>

                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>


                                            </div>
                                            </div>
                                            <div hidden={this.state.fifth ? false : true}>


                                            
                                            <div className="row" >

                                                <div className="col-md-12">
                                                    <div id="fistpara">
                                                        <div className="row">
                                                            <div className="col-md-1">
                                                                
                                                                <input type="checkbox"
                                                                    checked={this.state.fifth} />
                                                            </div>
                                                            <div className="col-md-11">
                                                                <p id="Culture_para">Agree to recieve relivent offers and services </p>

                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>


                                            </div>

                                            </div>

                                        </div>
                                    </div>





                                </div>
                            </div>
                        </div>
                        <div id="submit_btn" style={{ marginBottom: '20px' }}>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-5">
                                    <Link to="Appointment" className="btn btn-success" id="link" style={{ marginRight: '10px' }}>RESET</Link>
                                    <button className="btn btn-success" id="submit">SUBMIT</button>
                                </div>
                                <div className="col-md-3"></div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const maptoStatetoProps = ( state ) =>{
    return{

    }
}



export default  connect(maptoStatetoProps , { registerAppointment }) (Review_Info) 