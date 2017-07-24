import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { signout } from '../../../actions';
import Signout from './display';

const connectToStore = connect(null, { signout });

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.signout();
  },
});

export default compose(connectToStore, onDidMount)(Signout);
