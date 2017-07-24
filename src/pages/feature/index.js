import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchRecordingList } from '../../actions/thunks';
import Feature from './display';
import './style.css';
import getFeaturePageState from './selector';


const mapStateToProps = state => getFeaturePageState(state);

const connectToStore = connect(mapStateToProps, { fetchRecordingList });

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.fetchRecordingList();
  },
});

export default compose(connectToStore, onDidMount)(Feature);
