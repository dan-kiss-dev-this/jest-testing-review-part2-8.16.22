import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
// beforeEach comes with jest
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('should render the MainPage component without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'John',
    isPending: false,
  };
  // instance gets us access to methods
  expect(wrapper.instance().filterRobots([])).toEqual([]);
  wrapper = shallow(<MainPage {...mockProps2} />);
  expect(wrapper.instance().filterRobots([])).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com',
    },
  ]);
});
