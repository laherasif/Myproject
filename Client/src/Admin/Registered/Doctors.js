import React, { Component } from 'react'
import '../admin.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux'
import { Get_Doctors, Delete_Doctor , UpdateDoctor  } from '../../actions/doctorActon'
// import { UPDATE_DOCTOR } from '../../actions/types'
import  UpdateData from './Upload'
import { Link } from 'react-router-dom'
import Nav from '../Navbar/navbar';
import Loading from '../../components/Loading';
class AllDoctors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id :'',
            loading: {},
            Data: {},
            visibal: false,




        }
    }


    toggle = () => {
        this.setState(PreviState => ({
            visibal: !PreviState.visibal
        })
        )
    }

    ChangeValue = (e) => {
        this.setState({ Data: { ...this.state.Data, [e.target.name]: e.target.value } })

    }

    ChangeFile = (e) => {
        this.setState({
            [e.target.id]: e.target.files[0]
        })
    }




    componentWillReceiveProps(nextprops) {
        if (nextprops.isloading) {
            this.setState({
                loading: nextprops.isloading
            })
        }
    }

    DeleteQuery = (id) => {
        this.props.Delete_Doctor(id, this.props.history)
    }

    componentDidMount(e) {

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000);
        this.props.Get_Doctors();

    }


    Update = (e) => {
        e.preventDefault()
        // let formData = new FormData();
        // formData.append('_id',this.state.Data._id)
        // formData.append('lname', this.state.Data.lname)
        // formData.append('cnic', this.state.Data.cnic)
        // formData.append('gender', this.state.Data.gender)
        // formData.append('dateofbirth', this.state.Data.dateofbirth)
        // formData.append('mobile', this.state.Data.mobile)
        // formData.append('specil', this.state.Data.specil)
        // formData.append('joinAs', this.state.Data.joinAs)
        // formData.append('email', this.state.Data.email)
        // formData.append('qualification' , this.state.Data.qualification)
        // formData.append('experience' , this.state.Data.experience)
        // formData.append('base' , this.state.Data.base)
        // formData.append('address', this.state.Data.address)

    //     let value ={
    //         id : this.state.Data._id,
    //        fname :this.state.Data.fname,
    //         lname: this.state.Data.lname,
    //         cnic: this.state.Data.cnic,
    //         gender: this.state.Data.gender,
    //         dateofbirth: this.state.Data.dateofbirth,
    //         mobile: this.state.Data.mobile,
    //         specil: this.state.Data.specil,
    //         joinAs: this.state.Data.joinAs,
    //         email: this.state.Data.email,
    //         qualification : this.state.Data.qualification,
    //         experience : this.state.Data.experience,
    //         base: this.state.Data.base,
    //         address: this.state.Data.address,

    //     }

    //     this.props.UpdateDoctor(value);

        
    }


    render() {

        // console.log("", this.props.doctor)


        console.log("state loding", this.state.Data)
        console.log("state new value ", this.state)

        if (this.state.loading) {
            return (
                <div>
                    <Loading />
                </div>

            )
        }
        else {
            return (

                <div>




                    <div id="wrapper">



                        <div id="content-wrapper" className="d-flex flex-column">

                            <div id="content">

                                <Nav />

                                <div className="container-fluid">

                                    <h1 className="h3 mb-2 text-gray-800">AL-Hanif  || Shamshad Akhtar Memorial Hospital </h1>
                                    <p className="mb-4">24 / 7 are open .. Chak no 67 j.b sadhar Faisalabad.</p>


                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Specilist Doctor Information</h6>
                                        </div>

                                        <div >
                                            {/* <img src="http://localhost:5000/backend/Uploads/car2.jpg"/> */}
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                                    < thead >
                                                        <tr>
                                                            <th>Full-Name</th>
                                                            <th>Gender</th>
                                                            <th>Date of Birth</th>
                                                            <th>Cnic</th>
                                                            <th>Mobile</th>
                                                            <th>Specilist</th>
                                                            <th>Join As</th>
                                                            <th>Qualify / Experience</th>
                                                            <th>Job Status</th>
                                                            <th>Email Address</th>
                                                            <th>Picture</th>
                                                            <th>Permanent Address</th>
                                                            <th>Delete</th>
                                                            <th>Update</th>
                                                        </tr>
                                                    </thead>
                                                    {this.props.doctor.length > 0 ?
                                                        < tbody >

                                                            {
                                                                this.props.doctor.map((doctors, index) => {
                                                                    console.log("doctorpicture", doctors.picture)
                                                                    return (

                                                                        <tr key={doctors._id}>
                                                                            <td >{doctors.fname}{doctors.lname}</td>
                                                                            <td>{doctors.gender}</td>
                                                                            <td>{doctors.dateofbirth}</td>
                                                                            <td>{doctors.cnic}</td>
                                                                            <td>{doctors.mobile}</td>
                                                                            <td>{doctors.specil}</td>
                                                                            <td>{doctors.joinAs}</td>
                                                                            <td>{doctors.qualification} - {doctors.experience}</td>
                                                                            <td>{doctors.base}</td>
                                                                            <td>{doctors.email}</td>
                                                                            <td><img src={`http://localhost:5000/${doctors.picture}`} alt="pic" width="60%" height="50%" /></td>

                                                                            <td>{doctors.address}</td>
                                                                            <td><button className="btn btn-danger" onClick={() => this.DeleteQuery(doctors._id)}>Delete </button></td>
                                                                            {/* <td><button className="btn btn-info" onClick={()=>this.setState({ visibal : true , Data : doctors})} >Edit</button></td> */}
                                                                            <td><Link to={`/Edit/${doctors._id}`} className="btn btn-info">Edit</Link></td>




                                                                        </tr>


                                                                    )
                                                                }
                                                                )

                                                            }







                                                        </tbody>
                                                        : <span style={{ color: 'red' }}>No Doctor Avaliable Now</span>}


                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                     {/* <Modal isOpen={this.state.visibal} toggle={this.toggle} > 
                                        <ModalHeader toggle={this.toggle}>Edit Doctor</ModalHeader>
                                        <ModalBody>
                                        <UpdateData upload={this.state.Data}/>

                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" >Upload</Button>{' '}
                                            <Button color="secondary" >Cancel</Button>
                                        </ModalFooter>
                                    </Modal>  */}
                                                       

                                </div>
                            </div>

                            <footer className="sticky-footer bg-white">
                                <div className="container my-auto">
                                    <div className="copyright text-center my-auto">
                                        <span>Copyright &copy; Your Website 2019</span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div >

            )
        }
    }
}

const mapStateToProps = (state) => ({

    doctor: state.doctor.doctors,
    isloading: state.doctor.isloading,
  
})


export default connect(mapStateToProps, { Get_Doctors, Delete_Doctor , UpdateDoctor })(AllDoctors)
