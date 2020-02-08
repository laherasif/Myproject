import React, { Component } from 'react';
// import axios from 'axios'
import classnames from 'classnames'
import { connect } from 'react-redux';
import { updatestaff} from '../../actions/StaffAction'
// import store from '../../store'
// import Loading from '../../components/Loading';
class StaffUpdate extends Component {
    constructor(props){
        super(props);
        this.state={
            staffs:{

           _id: this.props.data ? this.props.data._id : null,
           fname: this.props.data ? this.props.data.fname : '',
           lname:  this.props.data ? this.props.data.lname : '',
           gender:  this.props.data ? this.props.data.gender : '',
           cnic:  this.props.data ? this.props.data.cnic : '',
           mobile:  this.props.data ? this.props.data.mobile : '',
           specil:  this.props.data ? this.props.data.specil : '',
           joinAs:  this.props.data ? this.props.data.joinAs : '',
           email:  this.props.data ? this.props.data.email : '',
           qualification : this.props.data ? this.props.data.qualification : '',
           experience :  this.props.data ? this.props.data.experience : '',
           base :  this.props.data ? this.props.data.base : '',
           password :  this.props.data ? this.props.data.password : '',
           dateofbirth:  this.props.data ? this.props.data.dateofbirth : '',
           picture:  this.props.data ? this.props.data.picture : '',
           address:  this.props.data ? this.props.data.address : '',
         


            visibal : false
            },
            loading :{}
        }
    }


 


    componentDidMount(){

        setTimeout(() => {
            this.setState({

                loading: false
            })
        }, 1000);

        
    }


    componentWillReceiveProps(nextprops){
        if(nextprops.isloading){
            this.setState({
                loading : nextprops.isloading
            })
        }

        if(nextprops.data){
            this.setState({
                staffs : nextprops.data
            })
        }
    }



    

    Update = (e) => {
      e.preventDefault()

    const {  fname, lname, gender, cnic, dateofbirth, mobile, specil, joinAs, email,  picture ,qualification  , experience , base , password , address } = this.state.staffs
    var url = window.location.pathname
    var id = url.substr(url.lastIndexOf('/') + 1 )
   let  values = {
       
       id : id ,
    fname : fname ,
    lname : lname ,
    gender : gender,
    cnic  : cnic,
    dateofbirth  : dateofbirth ,
    mobile : mobile,
    specil : specil,
    joinAs : joinAs ,
    email : email ,
    picture : picture ,
    qualification : qualification,
    experience : experience,
    base : base,
    address: address

    }

   
    this.props.updatestaff(values)
    



    }


    ChangeValue = (e) =>{
        this.setState({ staffs :{
           ...this.state.staffs, [e.target.name] : e.target.value
        }
        })
    }
    render(){

        if(this.state.loading)
        {
            return (
                <div>
              
            </div>
            )
        }
        else {
          

       

        console.log("state ", this.state)


  
        return(
            <div>

                        
<form className="user" onSubmit={this.Update}>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3  mb-sm-0 ">
                          <input type="text" className="form-control form-control-user"
                            name="fname" value={this.state.staffs.fname}
                            onChange={this.ChangeValue} placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user"
                            value={this.state.staffs.lname} onChange={this.ChangeValue}
                            name="lname" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <select className="form-control from-control-user"
                            value={this.state.staffs.gender} onChange={this.ChangeValue} name="gender">
                            <option defaultChecked>Please Select ( Gender ) </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-user"
                            name="cnic" value={this.state.staffs.cnic}
                            onChange={this.ChangeValue}
                            placeholder="Cnic (e.g xxxxx-xxxxxxx-x) " />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0">
                          <input type="date" className="form-control "
                            value={this.state.staffs.dateofbirth} onChange={this.ChangeValue}
                            name="dateofbirth" />

                        </div>
                        <div className="col-md-6">
                          <input type="text"
                            className="form-control form-control-user"
                            name="mobile"
                            value={this.state.staffs.mobile} onChange={this.ChangeValue}
                            placeholder="Mobile ( e.g +92-xxx-xxxxxxx )" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-sm-0 ">
                          <select className="form-control "
                            value={this.state.staffs.Specilist} onChange={this.ChangeValue}
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
                            value={this.state.staffs.email} onChange={this.ChangeValue}
                            className="form-control form-control-user "
                            name="email" placeholder="Mailing Address" />

                        </div>

                      </div>
                      <div className="form-group row">
                        <div className="col-md-3 mb-3 mb-sm-0">
                          <select className="form-control from-control-user"
                            value={this.state.staffs.qualification} onChange={this.ChangeValue}
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
                            value={this.state.staffs.experience} onChange={this.ChangeValue}
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
                            value={this.state.staffs.base} onChange={this.ChangeValue}
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
                          value={this.state.staffs.address} onChange={this.ChangeValue}
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
                               
        
        
        )
                        
        
    }
}
    
    
}

 const mapToStateoOfProps =(state , props) =>{
    var url = window.location.pathname
    var id = url.substr(url.lastIndexOf('/') + 1 )
        return{
            data : state.staff.find(item => item._id === id)
        }
 }
export default connect( mapToStateoOfProps , { updatestaff })  (StaffUpdate)