import React from 'react';
import { mount } from 'enzyme';
import Card from './index';

describe('app', () => {
  it('renders without crashing', () => {
    mount(<Card />);
  });
});
