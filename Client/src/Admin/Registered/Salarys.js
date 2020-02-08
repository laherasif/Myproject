import React, { Component } from 'react'
import '../admin.css'
import Nav from '../Navbar/navbar'

class AllSalary extends Component {
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
                                        <h6 className="m-0 font-weight-bold text-primary">Salarys Information</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered" id="dataTable" width="100" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Full-Name</th>
                                                        <th>Gender</th>
                                                        <th>Appoited</th>
                                                        <th>Date</th>
                                                        <th>Secdule</th>
                                                        <th>payment</th>
                                                    </tr>
                                                </thead>

                                                <tbody>


                                                    <tr>
                                                        <td>male</td>
                                                        <td>London</td>
                                                        <td>21</td>
                                                        <td>2009/02/27</td>
                                                        <td>$103,500</td>
                                                        <td>$103,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>30</td>
                                                        <td>2010/07/14</td>
                                                        <td>$86,500fdasdadasd</td>
                                                        <td>$103,500</td>
                                                    </tr>

                                                </tbody>
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
export default AllSalary
