import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './home.css'
import  './Responsive.css'
 class Home extends Component {
    render() {
        return (
			<div class="page-wrapper">


                  <div class="preloader"></div>

                  
            <header className="main-header" style={{backgroundColor:'yellow'}}>
    	
    	<div className="header-top">
        	<div className="auto-container">
            	<div className="top-outer clearfix">
                    
                    <div className="top-left">
                    	<ul className="links clearfix">
                        	<li><Link to=""><span className="icon fa fa-phone"></span>  Call us 1-555-133-447</Link></li>
                            <li><Link to=""><span className="icon fa fa-envelope-o"></span>contact@mechanic.com</Link></li>
                        </ul>
                    </div>
                    
                    <div className="top-right clearfix">
                    	<ul className="links">
                        	<li><Link to="">Find us on map </Link></li>
                            <li className="language dropdown"><a className="btn btn-default dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" href="s">English</a>
                                <ul className="dropdown-menu style-one" aria-labelledby="dropdownMenu2">
                                    <li><Link to="">English</Link></li>
                                    <li><Link to="">German</Link></li>
                                    <li><Link to="">Arabic</Link></li>
                                    <li><Link to="">Hindi</Link></li>
                                </ul>
                            </li>
                        </ul>  
						<ul class="social-icon-one">
							<li><Link to="" className="fa fa-twitter"></Link></li>
							<li><Link to=""className="fa fa-facebook"></Link></li>
							<li><Link to="" className="fa fa-google-plus"></Link></li>
						</ul>				
                    </div>
                    
                </div>
                
            </div>
        </div>
     
        <div className="header-upper" >
        	<div className="auto-container">
            	<div className="header-upper-inner clearfix" >
                	
                	<div className="pull-left logo-box">
                    	<div className="logo"><a href="index.html"><img src="images/logo.png" alt="" title=""/></a></div>
                    </div>
                   	
                   	<div className="nav-outer clearfix">
                    
						
						<nav className="main-menu navbar-expand-md">
							<div className="navbar-header">
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>

							<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
								<ul className="navigation clearfix">
									<li className="current dropdown"><a href="s">Home</a>
										<ul>
											<li><a href="index-2.html">Homepage One</a></li>
											<li><a href="index-3.html">Homepage Two</a></li>
										</ul>
									</li>
									<li className="dropdown"><a href="s">About</a>
										<ul>
											<li><a href="about.html">About Us</a></li>
											<li><a href="team.html">Team</a></li>
											<li><a href="clients.html">Clients</a></li>
											<li><a href="faq.html">Faq</a></li>
											<li><a href="price.html">Price</a></li>
											<li><a href="we-do.html">What We Do</a></li>
										</ul>
									</li>
									<li><a href="services.html">Services</a></li>
									<li><a href="gallery.html">Gallery</a></li>
									<li className="dropdown"><a href="s">Blog</a>
										<ul>
											<li><a href="blog-standard.html">Blog Standard</a></li>
											<li><a href="blog-masonry.html">Blog Masonry</a></li>
											<li><a href="blog-single.html">Blog Single</a></li>
										</ul>
									</li>
									<li><a href="contact.html">Contact us</a></li>
									<li><Link to="/register">Sign Up</Link></li>
								<li><Link to="/login">Sign In</Link></li>
								</ul>
							</div>
							
						</nav>
						
					</div>
					<div className="btn-box">
						<a href="s" className="theme-btn btn-style-one">Make a Appoinment</a>
					</div>
                </div>
            </div>
        </div>
        
        <div className="sticky-header">
        	<div className="auto-container clearfix">
            	<div className="logo pull-left">
                	<a href="index.html" className="img-responsive"><img src="images/logo-small.png" alt="" title=""/></a>
                </div>
                
                <div className="right-col pull-right">
                    <nav className="main-menu navbar-expand-md">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        
                        <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent1" style={{border:'1pt solid blue'}}>
                            <ul className="navigation clearfix">
                                <li className="current dropdown"><a href="s">Home</a>
									<ul>
										<li><a href="index-2.html">Homepage One</a></li>
										<li><a href="index-3.html">Homepage Two</a></li>
									</ul>
								</li>
								<li className="dropdown"><a href="s">About</a>
									<ul>
										<li><a href="about.html">About Us</a></li>
										<li><a href="team.html">Team</a></li>
										<li><a href="clients.html">Clients</a></li>
										<li><a href="faq.html">Faq</a></li>
										<li><a href="price.html">Price</a></li>
										<li><a href="we-do.html">What We Do</a></li>
									</ul>
								</li>
								<li><a href="services.html">Services</a></li>
								<li><a href="gallery.html">Gallery</a></li>
								<li className="dropdown"><a href="ss">Blog</a>
									<ul>
										<li><a href="blog-standard.html">Blog Standard</a></li>
										<li><a href="blog-masonry.html">Blog Masonry</a></li>
										<li><a href="blog-single.html">Blog Single</a></li>
									</ul>
								</li>
								<li><a href="contact.html">Contact us</a></li>
								
							

                            </ul>
                        </div>
                        </nav>
                </div>
                
            </div>
        </div>
    </header>

	<section className="main-slider">
    	
        <div className="main-slider-carousel owl-carousel owl-theme">
            
            <div className="slide" >
				<img src="images/background/11.jpg"/>
                <div className="auto-container">
					<div className="content">
						<div className="rating">
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
						</div>
						<h2>Building Your Trust <span>Since 1968.</span></h2>
					</div>
                </div>
            </div>
            
            <div className="slide" style={{backgroundImage:'images/main-slider/image-2.jpg'}}>
                <div className="auto-container">
					<div className="content">
						<div className="rating">
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
						</div>
						<h2>Building Your Trust <span>Since 1968.</span></h2>
					</div>
                </div>
            </div>
			
        </div>
    </section>
	
	<section className="services-section" style={{backgroundImage:"images/main-slider/image-2.jpg"}}>
		<div className="auto-container">
			
			<div className="upper-section">
				<div className="row clearfix">
					
					<div className="services-block col-lg-4 col-md-6 col-sm-12">
						<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
							<div className="content">
								<div className="image">
									<img src="images/resource/service-1.jpg" alt="" />
									<div className="overlay-box">
										<div className="overlay-inner">
											<div className="icon-box">
												<div className="icon flaticon-funnel"></div>
											</div>
										</div>
									</div>
								</div>
								<h3><a href="services.html">Full Service</a></h3>
								<div className="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor </div>
							</div>
						</div>
					</div>
					
					<div className="services-block col-lg-4 col-md-6 col-sm-12">
						<div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
							<div className="content">
								<div className="image">
									<img src="images/resource/service-2.jpg" alt="" />
									<div className="overlay-box">
										<div className="overlay-inner">
											<div className="icon-box">
												<div className="icon flaticon-funnel"></div>
											</div>
										</div>
									</div>
								</div>
								<h3><a href="services.html">AC Repair</a></h3>
								<div className="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor </div>
							</div>
						</div>
					</div>
					
					<div className="services-block col-lg-4 col-md-6 col-sm-12">
						<div className="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
							<div className="content">
								<div className="image">
									<img src="images/resource/service-3.jpg" alt="" />
									<div className="overlay-box">
										<div className="overlay-inner">
											<div className="icon-box">
												<div className="icon flaticon-funnel"></div>
											</div>
										</div>
									</div>
								</div>
								<h3><a href="services.html">Oil Change</a></h3>
								<div className="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor </div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
			<div className="lower-section">
				<div className="row clearfix">
					
					<div className="image-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column">
							<div class="image">
								<img src="images/resource/car.jpg" alt="" />
								<span className="icon"><img src="images/resource/duty.png" alt="" /></span>
							</div>
						</div>
					</div>
					
					<div className="content-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column">
							<h2>Don’t Let Your Truck Leak Oil, Make It Sweat Horse Power!</h2>
							<h3>If It Runs On Diesel…We’ll Fix It!</h3>
							<div className="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </div>
							<a href="about.html" className="theme-btn btn-style-two">read more</a>
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	</section>

	<section className="map-section">
		<div className="image-layer" style={{backgroundImage:"images/background/1.jpg"}}></div>
		<div className="auto-container">
			<h2>Your Automotive Repair Experts.<span> Where to find us?</span></h2>
			<div className="map-box">
				<div className="map-canvas"
					data-zoom="12"
					data-lat="-37.817085"
					data-lng="144.955631"
					data-type="roadmap"
					data-hue="#ffc400"
					data-title="Envato"
					data-icon-path="images/icons/map-marker.png"
					data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
				</div>
			</div>
		</div>
	</section>
	
	<section className="services-section-two">
		<div className="auto-container">
			<div className="row clearfix">
			
				<div className="services-block-two col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="icon-box">
							<span className="icon flaticon-car"></span>
						</div>
						<h3><a href="services.html">Full Service</a></h3>
						<div className="text">This is Photoshop's version  of Lorem Ipsukroin gravida nibh</div>
					</div>
				</div>
				
				<div className="services-block-two col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="icon-box">
							<span className="icon flaticon-pressure"></span>
						</div>
						<h3><a href="services.html">Tire Balance</a></h3>
						<div className="text">This is Photoshop's version  of Lorem Ipsukroin gravida nibh</div>
					</div>
				</div>
				
				<div className="services-block-two col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div className="icon-box">
							<span className="icon flaticon-plumber"></span>
						</div>
						<h3><a href="services.html">Oil Change</a></h3>
						<div className="text">This is Photoshop's version  of Lorem Ipsukroin gravida nibh</div>
					</div>
				</div>
				
				<div className="services-block-two col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
						<div className="icon-box">
							<span className="icon flaticon-tools-2"></span>
						</div>
						<h3><a href="services.html">AC Repair</a></h3>
						<div className="text">This is Photoshop's version  of Lorem Ipsukroin gravida nibh</div>
					</div>
				</div>
				
				<div className="services-block-two col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="icon-box">
							<span className="icon flaticon-car-repair"></span>
						</div>
						<h3><a href="services.html">Full Service</a></h3>
						<div className="text">This is Photoshop's version  of Lorem Ipsukroin gravida nibh</div>
					</div>
				</div>
				
				<div className="services-block-two col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="icon-box">
							<span className="icon flaticon-tyre"></span>
						</div>
						<h3><a href="services.html">Tire Balance</a></h3>
						<div className="text">This is Photoshop's version  of Lorem Ipsukroin gravida nibh</div>
					</div>
				</div>
				
				<div className="services-block-two col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div className="icon-box">
							<span class="icon flaticon-diesel"></span>
						</div>
						<h3><a href="services.html">Oil Change</a></h3>
						<div className="text">This is Photoshop's version  of Lorem Ipsukroin gravida nibh</div>
					</div>
				</div>
				
				<div className="services-block-two col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
						<div className="icon-box">
							<span className="icon flaticon-battery"></span>
						</div>
						<h3><a href="services.html">AC Repair</a></h3>
						<div className="text">This is Photoshop's version  of Lorem Ipsukroin gravida nibh</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>

	<section className="accordian-section" style={{backgroundImage:"images/resource/image-2.png"}}>
		<div className="auto-container">
			<div className="row clearfix">
				
				<div className="accordian-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						
						<ul className="accordion-box accordion-style-one">
                                    
							<li className="accordion block">
								<div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span class="icon icon-minus flaticon-substract"></span></div> Strong Engines Require Strong Parts.</div>
								<div className="acc-content">
									<div className="content">
										<div className="text">
											<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat </p>
										</div>
									</div>
								</div>
							</li>

							<li className="accordion block active-block">
								<div className="acc-btn active"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span class="icon icon-minus flaticon-substract"></span></div>Working Hard For The Hard Working.</div>
								<div className="acc-content current">
									<div className="content">
										<div className="text">
											<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat </p>
										</div>
									</div>
								</div>
							</li>
							
							<li className="accordion block">
								<div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span class="icon icon-minus flaticon-substract"></span></div> Prices Never Lower, Customer Care Never Higher.</div>
								<div className="acc-content">
									<div className="content">
										<div className="text">
											<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat </p>
										</div>
									</div>
								</div>
							</li>
			
						</ul>
						
					</div>
				</div>
				
				<div className="content-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<h2>Don’t Let Your Truck Leak Oil, Make It Sweat Horse Power!</h2>
						<h3>If It Runs On Diesel…We’ll Fix It!</h3>
						<div className="text">This is Photoshop's version velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </div>
						<a href="about.html" className="theme-btn btn-style-three">read more</a>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	
	<section className="expert-section" style={{backgroundImage:"images/background/2.png"}}>
		<div className="auto-container">
			<div className="sec-title centered">
				<h2>Our Team of Experts</h2>
				<div className="text">If It Runs On Diesel…We’ll Fix It!</div>
			</div>
			
			<div className="row clearfix">
				
				<div className="team-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="image">
							<a href="team.html"><img src="images/resource/team-1.jpg" alt="" /></a>
						</div>
						<div className="lower-content">
							<h3><a href="team.html">Jacob Reyes</a></h3>
							<div className="designation">Master Technician</div>
							<div className="text">This is Photoshop's version  of Lorem]psukroin nibh vel velit auctor aliquet.</div>
							<a href="team.html" className="theme-btn btn-style-two">read more</a>
						</div>
					</div>
				</div>
				
				<div className="team-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="image">
							<a href="x"><img src="images/resource/team-2.jpg" alt="" /></a>
						</div>
						<div className="lower-content">
							<h3><a href="team.html">Jacob Reyes</a></h3>
							<div className="designation">Master Technician</div>
							<div className="text">This is Photoshop's version  of Lorem]psukroin nibh vel velit auctor aliquet.</div>
							<a href="team.html" className="theme-btn btn-style-two">read more</a>
						</div>
					</div>
				</div>
				
				<div className="team-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="image">
							<a href="x"><img src="images/resource/team-3.jpg" alt="" /></a>
						</div>
						<div className="lower-content">
							<h3><a href="team.html">Jacob Reyes</a></h3>
							<div className="designation">Master Technician</div>
							<div className="text">This is Photoshop's version  of Lorem]psukroin nibh vel velit auctor aliquet.</div>
							<a href="team.html" className="theme-btn btn-style-two">read more</a>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
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
        );
    }
}
export default Home