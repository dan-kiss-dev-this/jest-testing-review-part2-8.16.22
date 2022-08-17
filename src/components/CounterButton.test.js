import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render card componenent', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  console.log(13, wrapper);
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  // to grab the state!
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual('red');
});
