import { shallow } from 'enzyme';
import React from 'react';
import App from '../containers/App.js';

it('should render the app component', () => {
  const mockStore = {
    robots: [],
    searchField: '',
  };
  expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});
