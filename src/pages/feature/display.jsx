import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import Card from '../../components/common/card';
import Loading from '../../components/common/loading';

const Feature = ({ list, pending, error }) => {
  let display = null;
  if (pending) display = <Loading />;
  if (list.length > 0) display = list.map(recording => <Card {...recording} key={uuid()} />);
  if (error) display = <div>{error}</div>;
  return (
    <div className="feature">{display}</div>
  );
};

Feature.defaultProps = {
  list: [],
  pending: false,
  error: null,
};
Feature.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  pending: PropTypes.bool,
};

export default Feature;
