import { compose } from 'recompose';
import { connect } from 'react-redux';
import Navbar from './display';

const connectToStore = connect(({ auth: { authenticated } }) => ({ authenticated }));

export default compose(connectToStore)(Navbar);

