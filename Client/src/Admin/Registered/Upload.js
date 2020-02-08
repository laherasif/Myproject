import React, { Component } from 'react';
import axios from 'axios'
import classnames from 'classnames'
import { connect } from 'react-redux';
import { UpdateDoctor} from '../../actions/doctorActon'
import { UPDATE_DOCTOR, EDIT_DOCTOR } from '../../actions/types'
import store from '../../store'
import Loading from '../../components/Loading';
class UpdateData extends Component {
    constructor(props){
        super(props);
        this.state={
            doctors:{

           _id:'',
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

        var url = window.location.pathname
        var id = url.substr(url.lastIndexOf('/') + 1 )

        this.props.UpdateDoctor(id)
    }


    componentWillReceiveProps(nextprops){
        if(nextprops.isloading){
            this.setState({
                loading : nextprops.isloading
            })
        }
    }



    

    Update = (e) => {
      e.preventDefault()

    // const { fname, lname, gender, cnic, dateofbirth, mobile, specil, joinAs, email,  picture ,qualification  , experience , base , password , address } = this.state.doctors
    var url = window.location.pathname
    var id = url.substr(url.lastIndexOf('/') + 1 )
   
    this.props.UpdateDoctor(id)
    



    }


    ChangeValue = (e) =>{
        this.setState({ doctors :{
           ...this.state.doctors, [e.target.name] : e.target.value
        }
        })
    }
    render(){

        if(this.state.loading)
        {
            return (
                <div>
               <Loading/>
            </div>
            )
        }
        else {
          

       

        console.log("state ", this.state)


  
        return(
            <div>

                {this.props.doctor.map((item)=>{
                    
                })}

                         { 
                           this.props.doctor.length > 0 ?  this.props.doctor.map((item, index)=>{
                                return(
                                  <div key={index}>
                                     
                                       <form className="user" onSubmit={this.Update}  style={{ marginTop: 20 }} encType="multipart/form-data">
                        
                                                <div className="form-group row">
                                                    <div className="col-md-6 mb-3 mb-sm-0">
                                                        <input
                                                            type="text"
                                                            placeholder="First Name"
                                                            className={classnames('form-control form-control-user'

                                                            )}
                                                            name="fname"
                                                            onChange={this.ChangeValue}
                                                            value={item.fname}
                                                        />
                                                    </div>


                                                    <div className="col-md-6">
                                                        <input type="text"
                                                            className={classnames('form-control form-control-user'

                                                            )}
                                                            onChange={this.ChangeValue}
                                                            name="lname"
                                                            value={item.lname}
                                                            placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-6 mb-3 mb-sm-0">
                                                        <select className="form-control from-control-user"
                                                            onChange={this.ChangeValue}
                                                            name="gender" value={item.gender}>
                                                            <option defaultChecked>Please Select</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text"
                                                            className={classnames('form-control form-control-user')}
                                                            onChange={this.ChangeValue}
                                                            value={item.cnic}
                                                            name="cnic"
                                                            placeholder="Cnic (e.g - xxxxx-xxxxxxx-x) " />

                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-6 mb-3 mb-sm-0">
                                                        <input type="text"
                                                            className={classnames('form-control form-control-user')}
                                                            onChange={this.ChangeValue}
                                                            value={item.mobile}
                                                            name="mobile" placeholder="Mobile" />

                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="date"
                                                            className={classnames('form-control form-control-user'

                                                            )}
                                                            onChange={this.ChangeValue}
                                                            value={item.dateofbirth}
                                                            name="dateofbirth" placeholder="Date of Birth" />

                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <div className="col-md-6 mb-3 mb-sm-0 ">
                                                        <select className="form-control "
                                                            name="specil" value={item.specil}
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
                                                            name="joinAs" onChange={this.ChangeValue} value={item.joinAs}>
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
                                                            className={classnames('form-control form-control-user',

                                                            )}
                                                            value={item.email}
                                                            onChange={this.ChangeValue}
                                                            name="email" placeholder="Email" />
                                                    </div>
                                                    <div className="col-md-6 ">
                                                        <input type="file" onChange={this.ChangeFile} id="picture" className="form-control" name="picture" />
                                                    </div>

                                                </div>

                                                <div className="form-group row">
                                                    <div className="col-md-3 mb-3 mb-sm-0">
                                                        <select className="form-control from-control-user" name="qualification"
                                                            value={item.qualification} onChange={this.ChangeValue} >
                                                            <option defaultChecked>Qualification  </option>
                                                            <option value="MBBSC">MBBSC</option>
                                                            <option value="MBBS">MBBS</option>



                                                        </select>
                                                    </div>
                                                    <div className="col-md-3 ">
                                                        <select className="form-control from-control-user" name="experience"
                                                            value={item.experience} onChange={this.ChangeValue}>
                                                            <option defaultChecked>  Experience </option>
                                                            <option value="3 year ">3 year </option>
                                                            <option value="4 year ">4 year </option>
                                                            <option value="5 year ">5 year</option>
                                                            <option value="6 year ">6 year </option>


                                                        </select>
                                                    </div>

                                                    <div className="col-md-6 ">
                                                        <select className="form-control from-control-user" name="base"
                                                            value={item.base} onChange={this.ChangeValue}>
                                                            <option defaultChecked>Please Select ( Appoint Base ) </option>
                                                            <option value="Permanent">Permament</option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="text"
                                                        className={classnames('form-control form-control-user')}
                                                        onChange={this.ChangeValue}
                                                        value={item.address}
                                                        name="address"
                                                        placeholder="Permament Address" />

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
                            )
                            : "Error are there"
                            
                         }
          

            </div>
        
        )
                        
        
    }
}
    
    
}

 const mapToStateoOfProps =(state) =>{
    var url = window.location.pathname
    var id = url.substr(url.lastIndexOf('/') + 1 )
return{
    doctor : state.doctor.doctors.filter((item) =>{ return  item._id === id} ),
    isloading : state.doctor.isloading
}
 }
export default connect( mapToStateoOfProps, { UpdateDoctor })  (UpdateData)