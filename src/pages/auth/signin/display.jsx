import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import Input from '../../../components/common/input/display';

export const Signin = ({ handleSubmit, signin, renderAlert }) => (
  <div className="container-fluid container-fill-height">
    <div className="container-content-middle">
      <form className="mx-auto text-center app-login-form" onSubmit={handleSubmit(user => signin(user))}>
        <fieldset className="form-group">
          <label htmlFor="">Email:</label>
          <Field
            name="email"
            type="email"
            component={Input}
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="">Password:</label>
          <Field
            name="password"
            type="password"
            component={Input}
          />
        </fieldset>
        {renderAlert()}
        <div className="mb-5">
          <button className="btn btn-primary" action="submit">Sign In</button>
        </div>
        <footer className="screen-login">
          <a href="#" className="text-muted">Forgot password</a>
        </footer>
      </form>
    </div>
  </div>
);

//Signin.defaultProps = {
//  error: '',
//  handleSubmit: PropTypes.func,
//  signinUser: PropTypes.func,
//};
//Signin.propTypes = {
//  handleSubmit: PropTypes.func,
//  signinUser: PropTypes.func,
//};

export default Signin;

