import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchRecordingList } from '../../actions';
import Feature from './display';
import './style.css';
import getFeaturePageState from './selector';


const mapStateToProps = ({ recording }) => ({
	list: recording.list,
	pending: recording.pending,
	error: recording.error,
});

const connectToStore = connect(mapStateToProps, { fetchRecordingList });

const onDidMount = lifecycle({
	componentDidMount() {
		this.props.fetchRecordingList();
	},
});

export default compose(connectToStore, onDidMount)(Feature);
