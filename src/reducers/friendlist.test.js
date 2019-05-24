import reducer from './friendlist';
import * as actionTypes from '../constants/ActionTypes';
import { addFriend, getFirendsPerPage, deleteFriend, starFriend } from '../actions/FriendsActions';

describe('Friendlist reducer', () => {
    
  it('should test whether initial state is returned', () => {
    expect(reducer(undefined, {})).toEqual({
        friendsById: [
            {
              name: 'Theodore Roosevelt',
              starred: true,
              sex: 'male', 
              id: 1
            },
            {
              name: 'Abraham Lincoln',
              starred: false,
              sex: 'male', 
              id: 2
            },
            {
              name: 'George Washington',
              starred: false,
              sex: 'male', 
              id: 3
            }
          ],
          friendsPerPage: [],
          pageSize: 2
    });
  });

  it('should store the data on add friend', () => {
    let friendData = {name: 'some-name', sex: 'Male', id: 2, starred: false};
    expect(reducer({friendsById :[{
        name: 'George Washington',
        starred: false,
        sex: 'male', 
        id: 1
      }]}
      , {type: actionTypes.ADD_FRIEND, name: 'some-name', sex: 'Male'})).toEqual(
          expect.objectContaining({
              'friendsById':[
            {
                name: 'George Washington',
                starred: false,
                sex: 'male', 
                id: 1
            },
            {
            ...friendData
            }
        ]}))
  });

  it('should delete the data on delete friend', () => {
    let friendData = {name: 'some-name', sex: 'Male', id: 1, starred: false};
    expect(reducer({friendsById :[{
        name: 'some-name',
        starred: false,
        sex: 'Male', 
        id: 1
      }]}
      , {type: actionTypes.DELETE_FRIEND, id: 1})).toEqual(
          expect.objectContaining({
              'friendsById':[
        ]}))
  });
}); 