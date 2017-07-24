import React from 'react';
import uuid from 'uuid';
import Card from '../../components/common/card';
import Loading from '../../components/common/loading';

const Feature = ({ list, pending, error }) => {
  console.log(list);
  let display = null;
  if (pending) display = <Loading />;
  if (list.length > 0) display = list.map(recording => <Card {...recording} key={uuid()} />);
  if (error) display = <div>{error}</div>;
  return (
    <div className="feature">{display}</div>
  );
};

export default Feature;
