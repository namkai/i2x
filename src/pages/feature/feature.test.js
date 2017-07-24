import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Feature from './display';


it('renders correctly', () => {
  const feature = shallow(
    <Feature />,
  );
  expect(toJson(feature)).toMatchSnapshot();
});

