import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Input from './display';


it('renders correctly', () => {
  const input = shallow(
    <Input />,
  );
  expect(toJson(input)).toMatchSnapshot();
});

