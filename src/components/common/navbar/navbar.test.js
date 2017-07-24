import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Navbar from './display';


it('renders correctly', () => {
  const Navbar = shallow(
    <Navbar />,
  );
  expect(toJson(Navbar)).toMatchSnapshot();
});

