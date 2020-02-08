import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const PrivateDRoute = ({ component: Component,doctor, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            doctor.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        }
    />
);
PrivateDRoute.propTypes = {
    doctor: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    doctor : state.doctor
});
export default connect(mapStateToProps)(PrivateDRoute);