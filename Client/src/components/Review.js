
import React, { Component } from 'react'
import './appoint.css'
import { Link } from 'react-router-dom'
class Review_Info extends Component {
    constructor(props){
        super(props);
        this.state={
            doctors:[]
        }
    }

    componentWillReceiveProps(next){
        if(next.upload)
        {
            this.setState({
                doctors : next.upload
            })
        }
    }
    render() {
        console.log('review state' , this.props.state)
        return (
            <div>
                <div className="container">
                    <form>
                    <div className="row">
                        <div id="bgcolor">
                            <div className="col-md-12">

                                <div className="container-fluid">

                                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h5 className="h5 mb-0 text-gray-800" id="detail">Appointments details</h5>
                                    </div>
                                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h5 className="h5 mb-0 text-gray-800" id="recmended">Recmended a doctor</h5>
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
                                                <p>Forhensic medicine</p>
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
                                                    <p id="Condition">Condition or Treatment</p>
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
                                                    <p id="Condition">Condition or Treatment</p>
                                                    <p>Forhensic medicine</p>
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
                                                    <p>29-Nov-2019</p>
                                                    <p>11:00 - 12:00</p>


                                                </div>
                                            </div>


                                        </div>

                                        <div id="file">
                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div id="fistpara">
                                                        <p id="Condition">Preferred date and time option 2* </p>
                                                        <p>29-Nov-2019</p>
                                                        <p>11:00 - 12:00</p>


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
        <p>{this.state.doctors.fname}</p>
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
                                                                    <p>+923039332336</p>
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
                                                                        <p>laherasif@gmail.com</p>
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
                                                                        <p>22-Feb-1997</p>
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
                                                            <input type="radio" id="culutre" className="form-control" />
                                                        </div>
                                                        <div className="col-md-11">
                                                    <p id="Culture_para">Preferred date and time option 1* </p>
                                                          
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
                                                            <input type="radio" id="culutre" className="form-control" />
                                                        </div>
                                                        <div className="col-md-11">
                                                    <p id="Culture_para">Preferred date and time option 1* </p>
                                                          
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
                                                            <input type="radio" id="culutre" className="form-control" />
                                                        </div>
                                                        <div className="col-md-11">
                                                    <p id="Culture_para">Preferred date and time option 1* </p>
                                                          
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
                                                            <input type="radio" id="culutre" className="form-control" />
                                                        </div>
                                                        <div className="col-md-11">
                                                    <p id="Culture_para">Preferred date and time option 1* </p>
                                                          
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
<div id="submit_btn" style={{marginBottom:'20px'}}>
                    <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-5">
                        <Link to="Appointment" className="btn btn-success" id="link" style={{marginRight:'10px'}}>RESET</Link>
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
export default Review_Info