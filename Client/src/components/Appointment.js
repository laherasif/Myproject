import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Review_Info from './Reviews'
import { Get_Doctors } from '../actions/doctorActon'
import './appoint.css'
// import './home.css'
import img from './img/3.jpg'
import { Link } from 'react-router-dom'
import Cencel_Change from './cenceAppoint'
class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
                fname: '',
                lname: '',
                gender: '',
                cnic: '',
                mobile: '',
                nationality: '',
                country: '',
                email: '',
                dateofbirth: '',
                picture: '',
                date1: '',
                time1: '',
                date2: '',
                time2: '',
                medical: '',
                condition: '',
                spelist_doctor:'',
                hospital: '',
                language : '',
                name_doctor:'',
                contect_no :'',
                first_message:'',
                message : '',
                visited : false,
                first : false,
                Second : false,
                third : false ,
                forth :false,
                fifth : false,
                


                ischecked: false,
                ischecked2: true,
                ischecked3: false,
                ischecked4: true,
                errors: {},
                isfield: false,
                IsNew: true ,
                hidden: true,
        }
    }





    componentWillReceiveProps(nextprops) {
        if (nextprops.errors) {
            this.setState({
                errors: nextprops.errors
            })
        }
    }
    ChangeValue = (e) => {
        this.setState({
           
                [e.target.name]: e.target.value,
                
            
        })
    }

    ChangeValue1 = (e) => {
        this.setState({
           
                [e.target.name]: e.target.value,
                isfield : true
                
            
        })
    }


    ChangeFile = (e) =>{
        this.setState({
          [e.target.id]:e.target.files[0]
        })
    }


RadoiChange =() =>{
    this.setState({
        ischecked : !this.state.ischecked,
        ischecked2 : !this.state.ischecked2,

    })
}
RadoiChange1 = () =>{
    this.setState({
        ischecked2 : !this.state.ischecked2,
        ischecked: false,
        
    })
}


RadoiChange3 =() =>{
    this.setState({
        ischecked3 : !this.state.ischecked3,
        ischecked4 : !this.state.ischecked4,
    })
}

    ComponentChange = (e)=>{
        this.setState({
            hidden : false
            
        })
    }

    // componentDidMount() {
    //     this.props.Get_Doctors()
    // }






   




    render() {

        console.log("setstate" , this.state.hidden)

        const FIelds = (
            <div id="colorchange">
                                        <div className="row">
                                            <div className="col-md-3"></div>
                                            <div className="col-md-6">
                                                <div className="step">
                                                    <div className="step__item  active" id="divStep1">
                                                        <p className="step__item__text">Appointment Details</p>
                                                        <p className="step__item__number">1
    
    
                                </p>
    
                                                    </div>
                                                    <div className="step__item" id="divStep2" >
                                                        <p className="step__item__text">Patient's information</p>
                                                        <p className="step__item__number">
                                                            2
                                </p>
                                                    </div>
                                                    <div className="step__item" id="divStep3">
                                                        <p className="step__item__text">Additional Services</p>
                                                        <p className="step__item__number">3</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3"></div>
    
                                        </div>
    
                                        
                                        {/* Appointrment  Simple */}
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div className="row">
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-7">
                                                        <form className="user" style={{ marginTop: 20 }} >
                                                            <div className="form-group row">
                                                                <div className="col-md-12 mb-3 mb-sm-0">
                                                                    <label style={{ color: '#0bb288'}}>Type your condition and or treatment here</label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="type your condition"
                                                                        className="form-control form-control-sm "
                                                                        name="condition"
                                                                        onChange={this.ChangeValue}
                                                                        value={this.state.condition}
                                                                    />
                                                                </div>
    
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-md-8 mb-3 mb-sm-0">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-6 col-xs-6 ">
                                                                            <input type="checkbox" 
                                                                                onChange={this.RadoiChange1}
                                                                               checked={this.state.ischecked2 ? true : false}
                                                                             
                                                                            />
                                                                            <label style={{paddingLeft:'10px' , color:'#0bb288'}}>choose a preferred date</label>
    
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-6 col-xs-6 ">
    
                                                                            <div className="new">
                                                                                <input type="checkbox" id="radiobtn2"
                                                                                      checked={this.state.ischecked ? true : false} 
                                                                                      onChange={this.RadoiChange} />
                                                                            <label style={{paddingLeft:'10px' , color:'#0bb288'}}>Earliest date avaliable</label>
                                                                            </div>

                                                                        </div>
                                                                    </div>
    
                                                                    <div className="col-md-4 mb-3 mb-sm-0"></div>
    
                                                                </div>
                                                            </div>
                                                            <div hidden={this.state.ischecked ? true : false}>
                                                            <label style={{ color: '#0bb288'}}>Preferred data and time option 1*</label>
                                                            <div className="form-group row">
                                                                <div className="col-md-8 mb-3 mb-sm-0">
                                                                    <input type="date"
                                                                        className="form-control form-control-sm"
                                                                         
                                                                        onChange={this.ChangeValue}
                                                                        value={this.state.date1}
                                                                        name="date1" />
                                                                    {/* {errors.mobile && (<div className="invalid-feedback">{errors.mobile} </div>)} */}
    
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <select className="form-control form-control-sm"
                                                                        name="time1" onChange={this.ChangeValue} value={this.state.time1}>
                                                                        <option defaultChecked>Any time </option>
                                                                        <option value="1:00 - 2:00">1:00 - 2:00</option>
                                                                        <option value="3:00 - 4:00">3:00 - 4:00</option>
                                                                        <option value="5:00 - 6:00">5:00 - 6:00</option>
                                                                        <option value=" 7:00 - 8:00">7:00 - 8:00</option>
                                                                        <option value="9:00 - 10:00">9:00 - 10:00</option>
                                                                        <option value="11:00 - 12:00">11:00 - 12:00</option>
    
                                                                    </select>
    
                                                                </div>
                                                            </div>
    
                                                            <label style={{ color: '#0bb288'}}>Preferred data and time option 2*</label>
                                                            <div className="form-group row">
                                                                <div className="col-md-8 mb-3 mb-sm-0">
                                                                    <input type="date"
                                                                        className='form-control form-control-sm'
                                                                        onChange={this.ChangeValue}
                                                                        value={this.state.date2}
                                                                        name="date2"  />
                                                                    {/* {errors.mobile && (<div className="invalid-feedback">{errors.mobile} </div>)} */}
    
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <select className="form-control form-control-sm"
                                                                        name="time2" onChange={this.ChangeValue} value={this.state.time2}>
                                                                        <option defaultChecked>Any time </option>
                                                                        <option value="1:00 - 2:00">1:00 - 2:00</option>
                                                                        <option value="3:00 - 4:00">3:00 - 4:00</option>
                                                                        <option value="5:00 - 6:00">5:00 - 6:00</option>
                                                                        <option value=" 7:00 - 8:00">7:00 - 8:00</option>
                                                                        <option value="9:00 - 10:00">9:00 - 10:00</option>
                                                                        <option value="11:00 - 12:00">11:00 - 12:00</option>
    
                                                                    </select>
    
                                                                </div>
                                                            </div>
                                                            </div>
    
    
                                                            <div className="form-group row">
                                                                <div className="col-md-12 mb-3 mb-sm-0">
                                                                    <label style={{ color: '#0bb288'}}>Medical concern and request</label>
                                                                    <textarea className="form-control form-control-sm "
                                                                     value={this.state.desc} name="medical" rows="2"
                                                                     onChange={this.ChangeValue}
                                                                      cols="1" ></textarea>
                                                                </div>
    
                                                            </div>
    
                                                            <div className="form-group row">
                                                                <div className="col-md-12 mb-3 mb-sm-0">
                                                                    <label style={{ color: '#0bb288'}}>Attach files(jpg .png .pdf -less then 5MB in size</label>
    
                                                                    <input type="file" name="picture"
                                                                        className="form-control form-control-sm"
                                                                        id="picture" onChange={this.ChangeFile} />
                                                                </div>
    
                                                            </div>
    
    
                                                            <div className="form-group row" style={{ paddingTop: '40px' }}>
                                                                <div className="col-md-6"></div>
                                                                <div className="col-md-6 mb-3 mb-sm-0">
                                                                    {/* <button className="btn  btn-success" id="next">Next</button>
                                     */}
                                                                    <a className="btn btn-success" id="next" data-toggle="tab" href="#nav-patient-info" role="tab" aria-controls="nav-profile" aria-selected="false">Next</a>
                                                                </div>
    
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-4"></div>
    
    
                                                </div>
                                            </div>
    
    
                                            {/* <PatientInfo /> */}
    
                                            <div className="tab-pane fade" id="nav-patient-info" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <form className="user"  style={{ marginTop: 20 }} encType="multipart/form-data">
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 mb-3 mb-sm-0">
                                                                        <label style={{ color: '#0bb288'}}>First name *</label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="First Name"
                                                                            className='form-control form-control-sm'
                                                                            name="fname"
                                                                            onChange={this.ChangeValue}
                                                                            value={this.state.fname}
                                                                        />
                                                                    </div>
    
                                                                    <div className="col-md-6">
                                                                        <label style={{ color: '#0bb288' }}>Last name *</label>
                                                                        <input type="text"
                                                                            className='form-control form-control-sm '
                                                                            onChange={this.ChangeValue}
                                                                            name="lname"
                                                                            value={this.state.lname}
                                                                            placeholder="Last Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 mb-3 mb-sm-0">
                                                                        <label style={{ color: '#0bb288'}}>Primary Phone Number *</label>
                                                                        <input type="number"
                                                                            className="form-control form-control-sm"
                                                                            name="mobile"
                                                                            value={this.state.mobile}
                                                                            onChange={this.ChangeValue} placeholder="Phone (e.g +92xxx-xxxxxxxx) " />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label style={{ color: '#0bb288' }}>Email *</label>
                                                                        <input type="email" name="email"
                                                                            value={this.state.email}
                                                                            onChange={this.ChangeValue}
                                                                            placeholder="Example : ABC@gmail.com"
                                                                            className="form-control form-control-sm" />
    
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 mb-3 mb-sm-0">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <div className="row">
                                                                                    <div className="col-md-2">
                                                                                        <input type="checkbox"
                                                                                           checked={this.state.visited ? true : false}
                                                                                            onChange={() => this.setState({ visited : !this.state.visited})}
                                                                                            style={{ marginTop: '20px' }} />
    
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <label style={{ color: '#0bb288', float: 'right' , paddingTop:'12px' }}> Have you visit  Hospital Before</label>
    
                                                                                    </div>
                                                                                </div>
    
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <label style={{ color: '#0bb288'}} > Hospital Number</label>
                                                                                <input type="text"
                                                                                    className='form-control form-control-sm'
                                                                                    onChange={this.ChangeValue}
                                                                                    value={this.state.hospital}
                                                                                    name="hospital" placeholder="Example :HD12345678" />
                                                                            </div>
                                                                        </div>
    
    
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <label style={{ color: '#0bb288'}} > Date Of Birth</label>
    
                                                                                <input type="date"
                                                                                    className='form-control form-control-sm'
                                                                                    onChange={this.ChangeValue}
                                                                                    value={this.state.dateofbirth}
                                                                                    name="dateofbirth" placeholder="Date of Birth" />
    
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <label style={{ color: '#0bb288'}} > Gender *</label>
    
                                                                                <select className="form-control form-control-sm"
                                                                                    onChange={this.ChangeValue}
                                                                                    name="gender" value={this.state.gender}>
                                                                                    <option defaultChecked>Please Select</option>
                                                                                    <option value="Male">Male</option>
                                                                                    <option value="Female">Female</option>
                                                                                </select>
                                                                            </div>
    
                                                                        </div>
    
                                                                    </div>
                                                                </div>
    
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 mb-3 mb-sm-0 ">
                                                                        <label style={{ color: '#0bb288'}}> Nationality *</label>
                                                                        <select className="form-control form-control-sm "
                                                                            name="nationality" value={this.state.nationality}
                                                                            onChange={this.ChangeValue}>
                                                                            <option defaultChecked>Please Select  </option>
                                                                            <option value="Pakistan">Pakistan</option>
                                                                            <option value="Liver Specilist">Malasia</option>
                                                                            <option value="Eyes Specilist">Indonasia</option>
                                                                            <option value="Ear Specilist">Ear Specilist</option>
                                                                            <option value="Ultra-Sound Specilist">Ultra-Sound Specilist</option>
                                                                            <option value="Bone Specilist">Bone Specilist</option>
                                                                            <option value="Chust Specilist">Chust Specilist</option>
                                                                            <option value="Skin Specilist">Skin Specilist</option>
                                                                            <option value="Dentest Specilist">Dentest Specilist</option>
    
    
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label style={{ color: '#0bb288'}}> Country of residence *</label>
    
                                                                        <select className="form-control form-control-sm"
                                                                            name="country" onChange={this.ChangeValue} value={this.state.country}>
                                                                            <option defaultChecked>Please Select  </option>
                                                                            <option value="Pakistan">Pakistan</option>
                                                                            <option value="Sub Assistant Medical Officer">Assistant Medical Officer</option>
                                                                            <option value="Juniour Medical Officer">Juniour Medical Officer</option>
                                                                            <option value=" Assistant Medicine Officer">Assistant Medicine Officer</option>
                                                                            <option value="juniour Medical Officer">Juniour Medicine Officer</option>
                                                                            <option value="Surgen Officer">Surgen Officer</option>
    
                                                                        </select>
                                                                    </div>
    
                                                                </div>
    
                                                                <div className="form-group row" style={{ paddingTop: '30px' }}>
                                                                    <div className="col-md-2"></div>
                                                                    <div className="col-md-9 mb-3 mb-sm-0">
                                                                        <button className="btn  btn-success" id="back">Back</button>
                                                                        <a className="btn btn-success" id="next" data-toggle="tab" href="#nav-addition-info" role="tab" aria-controls="nav-profile" aria-selected="false">Next</a>
    
                                                                    </div>
                                                                    <div className="col-md-1"></div>
    
                                                                </div>
    
    
    
                                                            </form>
                                                        </div>
    
    
    
                                                    </div>
                                                </div>
                                            </div>
    
                                            {/* <Additional_Info /> */}
    
                                            <div className="tab-pane fade" id="nav-addition-info" role="tabpanel" aria-labelledby="nav-profile-tab">
                                              <form>
                                                <div className="row">
                                                    <div className="col-md-1"></div>
                                                   
                                                    <div className="col-md-10">
                                                        <div className="row " >
                                                            <div className="col-md-1">
                                                            <input type="checkbox" 
                                                        checked={this.state.first ? true : false} 
                                                        onChange={()=>this.setState({first : !this.state.first})}      
                                                            />
                                                            </div>
                                                            <div className="col-md-11" id="para">
                                                                <h6 >Culture Suppport Services</h6>
                                                                <p>Alhanif || Shamshad Hospital has a good Hospital please visit it </p>
                                                              <div hidden={this.state.first ? false : true} >
                                                                  <div className="row" style={{paddingBottom:'10px'}}>
                                                                      <div className="col-md-7">
                                                                      <label style={{ color: '#0bb288'}}>Message *</label>
                                                                    <textarea className="form-control form-control-sm "
                                                                     value={this.state.first_message}
                                                                      name="first_message"  rows="2"
                                                                     onChange={this.ChangeValue}
                                                                      cols="1" ></textarea>
                                                                      </div>
                                                                      <div className="col-md-5"></div>

                                                                  </div>
                                                             
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
    
                                                    </div>
                                                    <div className="col-md-1"></div>
    
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-10">
                                                        <div className="row " >
                                                            <div className="col-md-1">
                                                                <input type="checkbox"
                                                                checked={this.state.Second ? true : false}
                                                                onChange={()=>this.setState({Second : !this.state.Second})}      


    
                                                                   />
                                                            </div>
                                                            <div className="col-md-11" id="para">
                                                                <h6 >Need to hospital doctor to contect your doctor</h6>
                                                                <p>Alhanif || Shamshad Hospital has a good Hospital please visit it </p>
                                                                
                                                                <div hidden={this.state.Second ? false : true} >
                                                                  <div className="row" style={{paddingBottom:'10px'}}>
                                                                      <div className="col-md-7">

                                                                      <label style={{ color: '#0bb288'}}>Doctor name *</label>
                                                                      <input type="text" name="name_doctor"
                                                                      value={this.state.name_doctor}
                                                                      onChange={this.ChangeValue}
                                                                      className="form-control form-control-sm" />
                                                                      </div>
                                                                      <div className="col-md-5"></div>
                                                                      </div>

                                                                      <div className="row" style={{paddingBottom:'10px'}}>
                                                                      <div className="col-md-7">
                                                                      <label style={{ color: '#0bb288'}}>Contect number / email address *</label>
                                                                      <input type="text"
                                                                        value={this.state.contect_no}
                                                                        onChange={this.ChangeValue}
                                                                       name="contect_no" 
                                                                      className="form-control form-control-sm" /> 
                                                                      </div>
                                                                      <div className="col-md-5"></div>

                                                                  </div>
                                                                  <div className="row" >
                                                                      <div className="col-md-7">

                                                                      <label style={{ color: '#0bb288'}}>Message *</label>
                                                                    <textarea className="form-control form-control-sm "
                                                                     value={this.state.message} name="message"  rows="2"
                                                                     onChange={this.ChangeValue}
                                                                      cols="1" ></textarea>
                                                                      </div>
                                                                      <div className="col-md-5"></div>

                                                                  </div>
                                                             
                                                                </div>
                                                           
                                                            </div>
                                                        </div>
    
                                                    </div>
                                                    <div className="col-md-1"></div>
    
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-10">
                                                        <div className="row " >
                                                            <div className="col-md-1">
                                                                <input type="checkbox" 
                                                                  checked={this.state.third ? true : false}
                                                                  onChange={()=>this.setState({third : !this.state.third})}      

                                                                    
                                                                     />
                                                            </div>
                                                            <div className="col-md-11" id="para">
                                                                <h6 >Need a interpreter</h6>
                                                                <p>Alhanif || Shamshad Hospital has a good Hospital please visit it </p>
                                                                <div hidden={this.state.third ? false : true }>
                                                                <div className="form-group row">
                                                                    <div className="col-md-4 ">
                                                                        <label style={{ color: '#0bb288'}}> Nationality *</label>
                                                                        <select className="form-control form-control-sm "
                                                                            name="language" value={this.state.language}
                                                                            onChange={this.ChangeValue}>
                                                                            <option defaultChecked>Please Select  </option>
                                                                            <option value="Pakistan">Pakistan</option>
                                                                            <option value="Liver Specilist">Malasia</option>
                                                                            <option value="Eyes Specilist">Indonasia</option>
                                                                            <option value="Ear Specilist">Ear Specilist</option>
                                                                            <option value="Ultra-Sound Specilist">Ultra-Sound Specilist</option>
                                                                            <option value="Bone Specilist">Bone Specilist</option>
                                                                            <option value="Chust Specilist">Chust Specilist</option>
                                                                            <option value="Skin Specilist">Skin Specilist</option>
                                                                            <option value="Dentest Specilist">Dentest Specilist</option>
    
    
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-8"></div>
 
                                                            </div>
                                                            </div>
                                                            </div>
                                                        </div>
    
                                                    </div>
                                                    <div className="col-md-1"></div>
    
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-10">
                                                        <div className="row " >
                                                            <div className="col-md-1">
                                                                <input type="checkbox"
                                                                value={this.state.forth ? true : false }
                                                                onChange={()=> this.setState({forth : !this.state.forth})}
                                                                   />
                                                            </div>
                                                            <div className="col-md-11" id="para">
                                                                <h6>Agree to terms and condition</h6>
                                                            </div>
                                                            </div>
                                                            <div className="col-md-1"></div>
                                                            </div>
                                                        </div>
                                                          

                                                
                                                
                                                <div className="row">
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-10">
                                                        <div className="row " >
                                                            <div className="col-md-1">
                                                                <input type="checkbox" 
                                                                checked={this.state.fifth ? true : false}
                                                                    onChange={() => this.setState({fifth : !this.state.fifth})}
    
                                                                    name="culture4"  />
                                                            </div>
                                                            <div className="col-md-11" id="para">
                                                                <h6 style={{ color: 'grey' }}>Agree to recieve relivent offers and Services</h6>
                                                            </div>
                                                        </div>
    
                                                    </div>
    
    
                                                    <div className="col-md-1"></div>
    
                                                </div>
                                                <div className="row" style={{paddingTop:'40px'}}>
    
                                                    <div className="col-md-2"></div>
                                                    <div className="col-md-9 mb-3 mb-sm-0">
                                                        <button className="btn  btn-success" id="back">Back</button>
                                                      <button onClick={this.ComponentChange}  className="btn btn-success" id="next">Next</button>
                                                    </div>
                                                    <div className="col-md-1"></div>
                                                </div>
                                            </form>
                                            </div>
    
    


                                        {/* Appointment for Specilist Doctor  */}
    
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <div className="row">
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-6">
                                                        <form className="user"  style={{ marginTop: 20 }} encType="multipart/form-data">
                                                            <div className="form-group row">
                                                                <div className="col-md-9 mb-3 mb-sm-0">
                                                                <div className="row">
                                                                        <div className="col-md-6 col-sm-6 col-xs-6 ">
                                                                            <input type="checkbox"
                                                                               checked={this.state.ischecked2 ? true : false } 
                                                                               onChange={this.RadoiChange}
                                                                            />
                                                                            <label style={{paddingLeft:'10px' , color:'#0bb288'}}>Recmended doctor</label>
    
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-6 col-xs-6 ">
    
                                                                            <div className="new">
                                                                                <input type="checkbox" 
                                                                                checked={this.state.ischecked ? true : false}
                                                                                    onChange={this.RadoiChange}

                                                                                    />
                                                                            <label style={{paddingLeft:'10px' , color:'#0bb288'}}>I will choose my doctor</label>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 mb-3 mb-sm-0"></div>
    
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-md-12 mb-3 mb-sm-0">
                                                                    <label style={{ color: '#0bb288', }}>Specilist</label>
                                                                    <select className="form-control form-control-sm"
                                                                        name="specil" onChange={this.ChangeValue} value={this.state.specil}>
                                                                        <option defaultChecked> --- please select ---</option>
                                                                        <option value="Assistant Medical Officer">Assistant Medical Officer</option>
                                                                        <option value="Sub Assistant Medical Officer">Assistant Medical Officer</option>
                                                                        <option value="Juniour Medical Officer">Juniour Medical Officer</option>
                                                                        <option value=" Assistant Medicine Officer">Assistant Medicine Officer</option>
                                                                        <option value="juniour Medical Officer">Juniour Medicine Officer</option>
                                                                        <option value="Surgen Officer">Surgen Officer</option>
    
                                                                    </select>
                                                                </div>
    
                                                            </div>
                                                            <div hidden={ this.state.ischecked ? false : true}>

                                                            <div className="form-group row" >
                                                                <div className="col-md-12 mb-3 mb-sm-0">
                                                                    <label style={{ color: '#0bb288', }}>Search the doctor name or surname</label>
                                                                    <select className="form-control form-control-sm"
                                                                        name="spelist_doctor" onChange={this.ChangeValue1} value={this.state.spelist_doctor}>
                                                                        <option defaultChecked> --- please select ---</option>
                                                                        <option value="Assistant Medical Officer">Assistant Medical Officer</option>
                                                                        <option value="Sub Assistant Medical Officer">Assistant Medical Officer</option>
                                                                        <option value="Juniour Medical Officer">Juniour Medical Officer</option>
                                                                        <option value=" Assistant Medicine Officer">Assistant Medicine Officer</option>
                                                                        <option value="juniour Medical Officer">Juniour Medicine Officer</option>
                                                                        <option value="Surgen Officer">Surgen Officer</option>
    
                                                                    </select>
                                                                </div>
    
                                                            </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-md-9 mb-3 mb-sm-0">
                                                                <div className="row">
                                                                        <div className="col-md-6 col-sm-6 col-xs-6 ">
                                                                            <input type="checkbox"
                                                                               checked={this.state.ischecked4 ? true : false } 
                                                                               onChange={this.RadoiChange3}
                                                                            />
                                                                            <label style={{paddingLeft:'10px' , color:'#0bb288'}}>choose a preferred date</label>
    
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-6 col-xs-6 ">
    
                                                                            <div className="new">
                                                                                <input type="checkbox" 
                                                                                  checked={this.state.ischecked3 ? true : false}
                                                                                  onChange={this.RadoiChange3}
                                                                                     />
                                                                            <label style={{paddingLeft:'10px' , color:'#0bb288'}}>Earliest date avaliable</label>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 mb-3 mb-sm-0"></div>
    
                                                                </div>
                                                            </div>
                                                           <div hidden={this.state.ischecked3 ? true : false}>
                                                            <label style={{ color: '#0bb288', }}>Preferred data and time option 1*</label>
                                                            <div className="form-group row">
                                                                <div className="col-md-8 mb-3 mb-sm-0">
                                                                    <input type="date"
                                                                        className='form-control form-control-sm'
                                                                        onChange={this.ChangeValue}
                                                                        value={this.state.date1}
                                                                        name="date1" />
    
                                                                </div>
                                                                <div className="col-md-4">
                                                                <select className="form-control form-control-sm"
                                                                        name="time1" onChange={this.ChangeValue} value={this.state.time1}>
                                                                        <option defaultChecked>Any time </option>
                                                                        <option value="1:00 - 2:00">1:00 - 2:00</option>
                                                                        <option value="3:00 - 4:00">3:00 - 4:00</option>
                                                                        <option value="5:00 - 6:00">5:00 - 6:00</option>
                                                                        <option value=" 7:00 - 8:00">7:00 - 8:00</option>
                                                                        <option value="9:00 - 10:00">9:00 - 10:00</option>
                                                                        <option value="11:00 - 12:00">11:00 - 12:00</option>
    
                                                                    </select>
    
                                                                </div>
                                                            </div>
    
    
                                                            <label style={{ color: '#0bb288', }}>Preferred data and time option 2*</label>
                                                            <div className="form-group row">
                                                                <div className="col-md-8 mb-3 mb-sm-0">
                                                                    <input type="date"
                                                                        className='form-control form-control-sm'
                                                                        onChange={this.ChangeValue}
                                                                        value={this.state.date2}
                                                                        name="date2" />
    
                                                                </div>
                                                                <div className="col-md-4">
                                                                <select className="form-control form-control-sm"
                                                                        name="time2" onChange={this.ChangeValue} value={this.state.time2}>
                                                                        <option defaultChecked>Any time </option>
                                                                        <option value="1:00 - 2:00">1:00 - 2:00</option>
                                                                        <option value="3:00 - 4:00">3:00 - 4:00</option>
                                                                        <option value="5:00 - 6:00">5:00 - 6:00</option>
                                                                        <option value=" 7:00 - 8:00">7:00 - 8:00</option>
                                                                        <option value="9:00 - 10:00">9:00 - 10:00</option>
                                                                        <option value="11:00 - 12:00">11:00 - 12:00</option>
    
                                                                    </select>
    
                                                                </div>
                                                            </div>
                                                            </div>
    
                                                            <div className="form-group row">
                                                                <div className="col-md-12 mb-3 mb-sm-0">
                                                                    <label style={{ color: '#0bb288', }}>Medical concern or request*</label>
                                                                    <textarea className="form-control form-control-sm " 
                                                                    name="medical" rows="2"
                                                                     cols="1"
                                                                     onChange={this.ChangeValue}
                                                                    ></textarea>
                                                                </div>
    
                                                            </div>
    
                                                            <div className="form-group row">
                                                                <div className="col-md-12 mb-3 mb-sm-0">
                                                                    <label style={{ color: '#0bb288', }}>Attach files (.jpg .png .pdf .less then 5 MB in size ) </label>
    
                                                                    <input type="file" name="picture"
                                                                        className="form-control form-control-sm"
                                                                        id="picture" onChange={this.ChangeFile} />
                                                                </div>
    
                                                            </div>
    
    
                                                            <div className="form-group row" style={{ paddingTop: '40px' }}>
                                                                <div className="col-md-4"></div>
                                                                <div className="col-md-8 mb-3 mb-sm-0">
                                                                <a className="btn btn-success" id="next" data-toggle="tab" href="#nav-patient-info" role="tab" aria-controls="nav-profile" aria-selected="false">Next</a>
                                                                   
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-4">
                                                    <div hidden={this.state.isfield ? false : true }>
                                                        <div className="card shadow  " style={{width: '100%'}}>
                                                          <div className="card-body">
                                                   
                                                           <div className="img" style={{alignSelf:'center'}}>
                                                               <img src={img} style={{width:200 , height:200 } }/>
                                                          <p style={{textAlign:'center' , fontSize : 17 , paddingTop: 10}}>Doctor Name</p>
                                                          
                                                           </div>

                                                           <hr/>
                                                           <h6 style={{ textAlign : 'center' , color : '#0bb288' }}>Specilist</h6>
                                                           <p>Check up in Medical </p>

                                                           <div>
                                                               <h5 style={{color:'#0bb288' , paddingBottom:'10px' , fontSize:'18px'}}>Doctor's Schedule</h5>
                                                              

                                            
                                                                    <table className="table " id="dataTable" width="100%">
                                                                        < thead style={{ backgroundColor: '#0bb288' }}>
                                                                            <tr style={{ color: 'white', textAlign: 'center' }}>
                                                                                <th>DAY</th>
                                                                                <th>TIME</th>
                                                                                <th>LOCATION</th>

                                                                            </tr>
                                                                        </thead>
                                                                        < tbody >
                                                                            <tr>
                                                                                <td>SUN</td>
                                                                                <td style={{ fontSize: '14px', width: '50%' }}>9:00 - 15:00</td>
                                                                                <td style={{ width: '100%' }}>Alhanif Center
                                                                                    (BIC 11th Floor)
                                                                                    </td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td>SUN</td>
                                                                                <td style={{ fontSize: '14px', width: '50%' }}>9:00 - 15:00</td>
                                                                                <td style={{ width: '100%' }}>Alhanif Center
                                                                                    (BIC 11th Floor)
                                                                                    </td>
                                                                            </tr>




                                                                        </ tbody>
                                                                    </table>

                                                                </div>
                                                            </div>
                                                            </div>

                                              

                                                    </div>
                                                           </div> 
                                                    <div className="col-md-1"></div>
                                                 
                                                </div>
                                            </div>
    
                                            
    
                                        </div>
    
                    
    
    
    
    
                                    
                                    </div>
        )

    


        console.log("state  ", this.state)
        return (
            <div>
            
            
               

              { this.state.hidden ?
                  
                  



            
                
                <section id="tabs" className="project-tab">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                { this.state.IsNew ? 
                                      <nav>
                                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Book by condition or treatment</a>
                                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Book by specility</a>
                                            <a className="nav-item " id="nav-contact-tab" ></a>
                                            <a className="nav-item"> <Link to="/cancel/change" >Cencel and Change Appointment</Link></a>

                                        </div>
                                    </nav>
                               
                               :
                              ""
    }

{ this.state.IsNew ? FIelds : <Cencel_Change/>}
   

                            
                             
                                    


                            </div>  {/** col-md-12 */}
                        </div> 
                    
                    </div> { /* container  */}

                </section>
   :
      <Review_Info upload={this.state}/>
}

{/* <footer className="main-footer">
        <div className="widgets-section">
        	<div className="auto-container">
            	<div className="row clearfix">
                
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                        <div className="row clearfix">
							
                            <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="logo">
                                        <a href="index-2.html"><img src="images/footer-logo.png" alt="" /></a>
                                    </div>
									<div className="text">This is Photoshop's version  of Lorem]psukroin gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auctor</div>
									<ul className="social-icon-one">
										<li><Link to="" className="fa fa-twitter"></Link></li>
										<li><Link to="" className="fa fa-facebook"></Link></li>
										<li><Link to="" className="fa fa-google-plus"></Link></li>
									</ul>
								</div>
							</div>
							
                            <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-widget recent-post">
									<h2>Recent Posts</h2>
									<div className="post-block">
										<div className="text"><a href="s">We’re Superior In Repair.</a></div>
										<div className="post-date">12.10.2018</div>
									</div>
									<div className="post-block">
										<div className="text"><a href="x">Experts In Diesel Motors.</a></div>
										<div className="post-date">12.10.2018</div>
									</div>
									<div className="post-block">
										<div className="text"><a href="x">We Do It Right, The First Time.</a></div>
										<div className="post-date">12.10.2018</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                        <div className="row clearfix">
							
                            <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-widget footer-links">
									<h2>Useful Links</h2>
									<ul className="links">
										<li><a href="a">About Us</a></li>
										<li><a href="a">Our Team</a></li>
										<li><a href="a">Testimonials</a></li>
										<li><a href="a">Brand</a></li>
										<li><a href="a">Ecosystem</a></li>
										<li><a href="s">Sitemap</a></li>
									</ul>
								</div>
							</div>
							
                            <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-widget contact-widget">
									<h2>Get In Contact</h2>
									<ul className="opening-time">
										<li><span>Monday:</span> 9:30 am - 6.00 pm</li>
										<li><span>Tuesday:</span> 9:30 am - 6.00 pm</li>
										<li><span>Wednesday:</span> 9:30 am - 6.00 pm</li>
										<li><span>Thursday:</span> 9:30 am - 6.00 pm</li>
										<li><span>Friday:</span> 9:30 am - 6.00 pm</li>
										<li><span>Saturday:</span> 9:30 am - 6.00 pm</li>
										<li><span>Sunday:</span>Closed</li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
        <div className="footer-bottom">
        	<div className="auto-container">
            	<div className="bottom-inner">
                    <div className="row clearfix">
                        
                        <div className="nav-column col-lg-6 col-md-12 col-sm-12">
							<ul className="footer-nav">
								<li><a href="d">Home</a></li>
								<li><a href="d">services</a></li>
								<li><a href="d">about us</a></li>
								<li><a href="d">gallery</a></li>
								<li><a href="d">contact</a></li>
							</ul>
						</div>
						
						<div className="copyright-column col-lg-6 col-md-12 col-sm-12">
							<div className="copyright"><a href="https://www.templateshub.net">Templates Hub</a></div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		
	</footer>
      */}





            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    errors: state.errors,
    doctor: state.doctor.doctors,
    SendMessage: state.doctor.SendMessage,

})
export default connect(mapStateToProps, { Get_Doctors })(Appointment)

