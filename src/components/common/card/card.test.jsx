import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Card from './display';


it('renders correctly', () => {
	const card = shallow(
		<Card />,
	);
	expect(toJson(card)).toMatchSnapshot();
});

