import React, { Component } from 'react'
import './appoint.css'
import './home.css'
import { Link } from 'react-router-dom'
class Cencel_Change extends Component{
    constructor(props){
        super(props);
        this.state={
            fname : '',
            lname :'',
            gender :'',
            dateofbirth :'',
            hospital :'',
            email1 :'',
            email2 :'',
            MM:'',
            HH:'',
            MM2:'',
            HH2:'',
            NewDate:'',
            name_doctor :'',

        }
    }
    render(){
        return(
            <div>

          <section id="tabs" className="project-tab">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                               
                               <nav>
                                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cencel Appointment</a>
                                            <a className="nav-item nav-link" id="nav-change-tab" data-toggle="tab" href="#nav-change" role="tab" aria-controls="nav-profile" aria-selected="false">Change Appointment</a>
                                            <a className="nav-item "></a>
                                            <a className="nav-item "></a>
                                            <a className="nav-item "></a>


                                        </div>
                              </nav>
        
      <div id="colorchange">
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <form className="user" style={{ marginTop: 30 }} encType="multipart/form-data">
                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0">
                                    <label style={{ color: '#0bb288' }}>First name *</label>
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
                                    <label style={{ color: '#0bb288' }}>Email *</label>
                                    <input type="email"
                                        className="form-control form-control-sm"
                                        name="email1"
                                        value={this.state.email1}
                                        onChange={this.ChangeValue} />
                                </div>
                                <div className="col-md-6">
                                    <label style={{ color: '#0bb288' }}>Confirm email address *</label>
                                    <input type="email" name="email2"
                                        value={this.state.email2}

                                        className="form-control form-control-sm" />

                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0">


                                    <label style={{ color: '#0bb288' }} > Hospital Number</label>
                                    <input type="text"
                                        className='form-control form-control-sm'
                                        onChange={this.ChangeValue}
                                        value={this.state.hospital}
                                        name="hospital" />



                                </div>
                                <div className="col-md-6 mb-3 mb-sm-0">
                                    <label style={{ color: '#0bb288' }} > Name of doctor</label>

                                    <input type="text"
                                        className='form-control form-control-sm'
                                        onChange={this.ChangeValue}
                                        value={this.state.name_doctor}
                                        name="name_doctor" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0">
                                    <label style={{ color: '#0bb288' }} >Origianl Appointment Date*</label>

                                    <input type="date"
                                        className='form-control form-control-sm'
                                        onChange={this.ChangeValue}
                                        value={this.state.dateofbirth}
                                        name="dateofbirth" />
                                </div>

                                <div className="col-md-6" style={{marginTop:'10px'}}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label style={{ color: '#0bb288' }} > </label>


                                            <select className="form-control form-control-sm"
                                                onChange={this.ChangeValue}
                                                name="MM" value={this.state.MM}>
                                                <option defaultChecked>MM</option>
                                                <option value="Male">male</option>
                                                <option value="Female">Female</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ color: '#0bb288' }} > </label>

                                            <select className="form-control form-control-sm"
                                                onChange={this.ChangeValue}
                                                name="HH" value={this.state.HH}>
                                                <option defaultChecked>HH</option>
                                                <option value="Male">male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0 ">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <input type="checkbox"
                                                // checked={this.state.visited ? true : false}
                                                // onChange={() => this.setState({ visited: !this.state.visited })}
                                                style={{ marginTop: '20px' }} />

                                        </div>
                                        <div className="col-md-11">
                                            <label style={{ color: '#0bb288', paddingTop: '14px' }}>Cancel all appointment (same day)</label>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 mb-3 mb-sm-0 "></div>


                            </div>
                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0 ">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <input type="checkbox"
                                            // checked={this.state.visited ? true : false}
                                            // onChange={() => this.setState({ visited: !this.state.visited })}
                                            />

                                        </div>
                                        <div className="col-md-11">
                                            <label style={{ color: '#0bb288' }}>Cancel relative appointments (same day)</label>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 mb-3 mb-sm-0 "></div>

                            </div>
                            <div className="form-group row" >
                                <div className="col-md-5"></div>
                                <div className="col-md-3 mb-4 mb-sm-0">
                                    <button className="btn btn-success">Submit</button>
                                </div>
                                <div className="col-md-4"></div>

                            </div>



                        </form>
                    </div>



                </div>
            </div>
            </div>

            {/* change Appointment */}

            <div className="tab-pane fade " id="nav-change" role="tabpanel">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <form className="user" style={{ marginTop: 30 }} encType="multipart/form-data">
                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0">
                                    <label style={{ color: '#0bb288' }}>First name *</label>
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
                                    <label style={{ color: '#0bb288' }}>Email *</label>
                                    <input type="email"
                                        className="form-control form-control-sm"
                                        name="email1"
                                        value={this.state.email1}
                                        onChange={this.ChangeValue} />
                                </div>
                                <div className="col-md-6">
                                    <label style={{ color: '#0bb288' }}>Confirm email address *</label>
                                    <input type="email" name="email2"
                                        value={this.state.email2}

                                        className="form-control form-control-sm" />

                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0">


                                    <label style={{ color: '#0bb288' }} > Hospital Number</label>
                                    <input type="text"
                                        className='form-control form-control-sm'
                                        onChange={this.ChangeValue}
                                        value={this.state.hospital}
                                        name="hospital" />



                                </div>
                                <div className="col-md-6 mb-3 mb-sm-0">
                                    <label style={{ color: '#0bb288' }} > Name of doctor</label>

                                    <input type="text"
                                        className='form-control form-control-sm'
                                        onChange={this.ChangeValue}
                                        value={this.state.name_doctor}
                                        name="name_doctor" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0">
                                    <label style={{ color: '#0bb288' }} >Origianl Appointment Date*</label>

                                    <input type="date"
                                        className='form-control form-control-sm'
                                        onChange={this.ChangeValue}
                                        value={this.state.dateofbirth}
                                        name="dateofbirth" />
                                </div>
                                
                                <div className="col-md-6" style={{marginTop:'10px'}}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label style={{ color: '#0bb288' }}></label>


                                            <select className="form-control form-control-sm"
                                                onChange={this.ChangeValue}
                                                name="MM" value={this.state.MM}>
                                                <option defaultChecked>MM</option>
                                                <option value="Male">male</option>
                                                <option value="Female">Female</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ color: '#0bb288' }} > </label>

                                            <select className="form-control form-control-sm"
                                                onChange={this.ChangeValue}
                                                name="HH" value={this.state.HH}>
                                                <option defaultChecked>HH</option>
                                                <option value="Male">male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            
            
                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0">
                                    <label style={{ color: '#0bb288' }} >New Appointment Date*</label>

                                    <input type="date"
                                        className='form-control form-control-sm'
                                        onChange={this.ChangeValue}
                                        value={this.state.NewDate}
                                        name="NewDate" />
                                </div>

                                <div className="col-md-6" style={{marginTop:'10px'}}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label style={{ color: '#0bb288' }} > </label>


                                            <select className="form-control form-control-sm"
                                                onChange={this.ChangeValue}
                                                name="MM2" value={this.state.MM2}>
                                                <option defaultChecked>MM</option>
                                                <option value="Male">male</option>
                                                <option value="Female">Female</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ color: '#0bb288' }} > </label>

                                            <select className="form-control form-control-sm"
                                                onChange={this.ChangeValue}
                                                name="HH2" value={this.state.HH2}>
                                                <option defaultChecked>HH</option>
                                                <option value="Male">male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6 mb-3 mb-sm-0 ">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <input type="checkbox"
                                                // checked={this.state.visited ? true : false}
                                                // onChange={() => this.setState({ visited: !this.state.visited })}
                                                style={{ marginTop: '20px' }} />

                                        </div>
                                        <div className="col-md-11">
                                            <label style={{ color: '#0bb288', paddingTop: '14px' }}>Change retative appointment (same day)</label>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 mb-3 mb-sm-0 "></div>


                            </div>
                            <div className="form-group row" >
                                <div className="col-md-5"></div>
                                <div className="col-md-3 mb-4 mb-sm-0">
                                    <button className="btn btn-success">Submit</button>
                                </div>
                                <div className="col-md-4"></div>

                            </div>



                        </form>
                    </div>



                </div>
            </div>
            </div>


            </div>
            </div>

     



                            
                             
                                    


                            </div>  {/** col-md-12 */}
                        </div> 
                    
                    </div> { /* container  */}

                </section>



                <footer className="main-footer">
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
     

            </div>
        )
    }
}

export default Cencel_Change 