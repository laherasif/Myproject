import React, { Component } from 'react'
import '../admin.css'
import Nav from '../Navbar/navbar'
import { connect } from 'react-redux'
import { Get_workers } from '../../actions/workerAction'
class AllWorkers extends Component {
    componentDidMount() {

        
        this.props.Get_workers();

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
                                        <h6 className="m-0 font-weight-bold text-primary">AllWorkers Information</h6>
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
                                                        <th>Work</th>
                                                        <th>Status</th>
                                                        <th>Picture</th>
                                                        <th>Permanent Address</th>
                                                        <th>Delete</th>
                                                        <th>Update</th>
                                                    </tr>
                                                </thead>

                                          


                                                  
                                                { this.props.worker.length > 0 ?
                                                    < tbody >

                                                        {
                                                             this.props.worker.map((workers, index) => {

                                                                return (
                                                                    <tr key={workers._id}>
                                                                        <td >{workers.fname}{workers.lname}</td>
                                                                        <td>{workers.gender}</td>
                                                                        <td>{workers.dateofbirth}</td>
                                                                        <td>{workers.cnic}</td>
                                                                        <td>{workers.mobile}</td>
                                                                        <td>{workers.specilist}</td>
                                                                        <td>{workers.status}</td>
                                                                        <td><img src={`http://localhost:5000/${workers.picture}`} alt="pic"   width="60%" height="50%" /></td>
                                                                        <td>{workers.address}</td>
                                                                        <td><button className="btn btn-danger" onClick={() => this.DeleteQuery(workers._id)}>Delete </button></td>
                                                                        <td><i className="fa fa-edit"></i></td>



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
    worker : state.worker.Workers
})
export default connect (mapTosateToprops , { Get_workers } ) (AllWorkers)
