import { connect } from 'react-redux';
import React from 'react';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

import Signin from './display';

import { signin } from '../../../actions/thunks';
import getSigninState from './selector';

const mapStateToProps = (state, ownProps) => getSigninState(state);

const createForm = reduxForm({ form: 'signin' });

const connectToStore = connect(mapStateToProps, { signin });

const addHandlers = withHandlers({
  renderAlert: ({ errorMessage }) => () => {
    if (errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops!</strong> {errorMessage}
        </div>
      );
    }
    return null;
  },
});


export default compose(createForm, connectToStore, addHandlers)(Signin);
