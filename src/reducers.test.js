import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  it('should return the initail state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots({}, { type: CHANGE_SEARCHFIELD, payload: 'le' })
    ).toEqual({ searchField: 'le' });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: true,
  };
  it('should return the initail state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(
        {
          robots: [],
        },
        { type: REQUEST_ROBOTS_PENDING }
      )
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(
        {
          robots: [],
        },
        { type: REQUEST_ROBOTS_SUCCESS, payload: [{ name: 'Bob' }] }
      )
    ).toEqual({
      robots: [{ name: 'Bob' }],
      isPending: false,
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(
        {
          robots: [],
        },
        {
          type: REQUEST_ROBOTS_FAILED,
          payload: 'Error occured please try again',
        }
      )
    ).toEqual({
      robots: [],
      error: 'Error occured please try again',
    });
  });
});
