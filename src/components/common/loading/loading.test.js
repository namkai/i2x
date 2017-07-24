import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Loading from './display';


it('renders correctly', () => {
  const loading = shallow(
    <Loading />,
  );
  expect(toJson(loading)).toMatchSnapshot();
});

