
// import React,{Component} from 'react'
// class Login extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         scrolled: 0,
//         isShow : false,
//       };
//     }
  
//     componentDidMount() {
//       window.addEventListener("scroll", this.scrollProgress);
//     }
  
//     componentWillUnmount() {
//       window.removeEventListener("scroll", this.scrollProgress);
//     }
  
//     scrollProgress = () => {
//       const scrollPx = document.documentElement.scrollTop;
//       const winHeightPx =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
        
//       const scrolled = `${scrollPx / winHeightPx * 100}%`;
//       this.setState({
//         scrolled: scrolled,

//       });
//     };


//     data = () =>{
//         alert("hellow")
//     }

    

    
  
//     render() {
//       const progressContainerStyle = {
//         background: "#f8bbd0",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
//         height: "5px",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         zIndex: 99
//       };
  
//       const progressBarStyle = {
//         height: "5px",
//         background: "#e91e63",
//         width: this.state.scrolled
//       };
     
//       return (

//         <div>

           
//                { document.documentElement.scrollTop > 0 ? alert("hellow") : "hyy" }
            


           
//           <div className="progress-container" style={progressContainerStyle}>
//             <div className="progress-bar" style={progressBarStyle} />
//           </div>
//           <div className="content">
//             <h1>
//               <div className="arrow-down" />
//             </h1>
//             <br />
//             <h1>S</h1>
//             <h1>C</h1>
//             <h1>R</h1>
//             <h1>O</h1>
//             <h1>L</h1>
//             <h1>L</h1>
//             <br />
//             <h1>O</h1>
//             <h1>N</h1>
//             <br />
//             <h1>
//               <div className="arrow-down" />
//             </h1>
//             <br />
//             <h1>S</h1>
//             <h1>C</h1>
//             <h1>R</h1>
//             <h1>O</h1>
//             <h1>L</h1>
//             <h1>L</h1>
//             <br />
//             <h1>O</h1>
//             <h1>N</h1>
//             <br />
//             <h1>
//               <div className="arrow-down" />
//             </h1>
//             <br />
//             <h1>S</h1>
//             <h1>C</h1>
//             <h1>R</h1>
//             <h1>O</h1>
//             <h1>L</h1>
//             <h1>L</h1>
//             <br />
//             <h1>O</h1>
//             <h1>N</h1>
//             <br />
//             <h1>
//               <div className="arrow-down" />
//             </h1>
//             <br />
//             <h1>T</h1>
//             <h1>H</h1>
//             <h1>E</h1>
//             <br />
//             <h1>E</h1>
//             <h1>N</h1>
//             <h1>D</h1>
//           </div>


        
//         </div>
//       );
//     }
//   }
  
// export default Login
  


















import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link , Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { loginAdmin } from '../actions/Admin';
import classnames from 'classnames';
import { loginDoctor } from '../actions/doctorActon';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            ischecked : false ,
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hendleCheck = ( e )=>{
        this.setState({ischecked : !this.state.ischecked})
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginAdmin(user);
        
    }
    DoctorSubmit = ( e ) =>{
        e.preventDefault();
        const doctor = {
            email : this.state.email,
            password : this.state.password
        }
        this.props.loginDoctor(doctor);
        
    }
    
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/Dashboard');
        }
       else  if(this.props.doctor.isAuthenticated){
            this.props.history.push('/D_Dashboard')
        }
    }

    
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/Dashboard')
        }
         else if(nextProps.doctor.isAuthenticated){
            this.props.history.push('/D_Dashboard')
        }
      else  if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        // console.log("auther" , this.props.auth.isAuthenticated)
        // console.log("autherdoctor" , this.props.doctor.isAuthenticated)
        console.log("data" , this.props.doctor)



        return(
        <div>
            <div className="jumbotron" id="ap">
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <h1>Please Login First</h1>
                    </div>
                    <div className="col-md-4" id="tabs">
                        <ul>

                            <li><a href="">User Login</a></li>
                            {/* <li><Link to="/">Home \</Link></li> */}
                        </ul>
                    </div>

                </div>
            </div>
            </div>
           
            <div className="row">
                <div className="offset-md-3 col-md-6 offset-md-3 " style={{border:'1pt solid black' , padding:40}}>
            <form onSubmit={ this.state.ischecked ? this.DoctorSubmit : this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })} 
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Login User
                    </button>
                    <div className="form-group">
                        <input type="checkbox" value={this.state.ischecked}  onChange={this.hendleCheck} />
                <span>{this.state.ischecked ? 'user data' : 'doctor'}</span>
                        </div>
                </div>
            </form>
            
            </div>
            </div>
        </div>
        )
    }
}

Login.propTypes = {
    loginAdmin: PropTypes.func.isRequired,
    doctor: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    doctor : state.doctor,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginAdmin , loginDoctor } )(Login)



