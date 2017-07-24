import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Signout from './display';


it('renders correctly', () => {
  const signout = shallow(
    <Signout />,
  );
  expect(toJson(signout)).toMatchSnapshot();
});

