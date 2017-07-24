import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import SigninLayout from './layout';
import Input from '../../../components/common/input/display';

export const Signin = ({ handleSubmit, signin, renderAlert }) => (
  <SigninLayout>
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
    </form>
  </SigninLayout>
);

Signin.defaultProps = {
  renderAlert: '',
  handleSubmit: PropTypes.func,
  signin: PropTypes.func,
};
Signin.propTypes = {
  handleSubmit: PropTypes.func,
  signin: PropTypes.func,
};

export default Signin;

