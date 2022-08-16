import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render card componenent', () => {
  expect(shallow(<Card />).length).toEqual(1);
});
