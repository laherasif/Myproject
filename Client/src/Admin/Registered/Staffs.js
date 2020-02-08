import React, { Component } from 'react'
import '../admin.css'
import Nav from '../Navbar/navbar'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetStaff , delete_staff } from '../../actions/StaffAction'
class AllStaff extends Component {
 
    
    componentDidMount() {

        
        this.props.GetStaff();

    }


    DeleteQuery =(id)=>{
        this.props.delete_staff(id , this.props.history)
    }

    render() {
        return (
            <div>
                <div id="wrapper">



                    <div id="content-wrapper" className="d-flex flex-column">

                        <div id="content">

                            <Nav/>
                            
                            <div className="container-fluid">

                                <h1 className="h3 mb-2 text-gray-800">AL-Hanif  || Shamshad Akhtar Memorial Hospital </h1>
                                <p className="mb-4">24 / 7 are open .. Chak no 67 j.b sadhar Faisalabad.</p>
                               
                             
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Staffs Information</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Full-Name</th>
                                                        <th>Gender</th>
                                                        <th>Date of Birth</th>
                                                        <th>Cnic</th>
                                                        <th>Mobile</th>
                                                        <th>Specilist</th>
                                                        <th>qualification / Experience</th>
                                                        <th>Status</th>
                                                        <th>Email Address</th>
                                                        <th>picture</th>
                                                        <th>Permanent Address</th>
                                                        <th>Delete</th>
                                                        <th>Update</th>
                                                    </tr>
                                                </thead>

                                                { this.props.staff.length > 0 ?
                                                    < tbody >

                                                        {
                                                             this.props.staff.map((staffs, index) => {

                                                                return (
                                                                    <tr key={staffs._id}>
                                                                        <td >{staffs.fname}{staffs.lname}</td>
                                                                        <td>{staffs.gender}</td>
                                                                        <td>{staffs.dateofbirth}</td>
                                                                        <td>{staffs.cnic}</td>
                                                                        <td>{staffs.mobile}</td>
                                                                        <td>{staffs.specilist}</td>
                                                                        <td>{staffs.qualification} - {staffs.experience}</td>
                                                                        <td>{staffs.base}</td>
                                                                        <td>{staffs.email}</td>
                                                                        <td><img src={`http://localhost:5000/${staffs.picture}`} alt="pic"   width="60%" height="50%" /></td>
                                                                        <td>{staffs.address}</td>
                                                                        <td><button className="btn btn-danger" onClick={() => this.DeleteQuery(staffs._id)}>Delete </button></td>
                                                                        {/* <td><i className="fa fa-edit"></i></td> */}
                                                                        <td><Link to={`/EditStaff/${staffs._id}`} className="btn btn-info">Edit</Link></td>




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
            </div>

        )
    }
}

const mapTosateToprops = (state)=> ({
    staff : state.staff
})
export default connect (mapTosateToprops , { GetStaff , delete_staff } ) (AllStaff)
