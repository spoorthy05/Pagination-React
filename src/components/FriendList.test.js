import React from 'react';
import { shallow} from 'enzyme';
import FriendList from './FriendList';
import FriendListItem from './FriendListItem';
import {addFriend, deleteFriend, starFriend, getFirendsPerPage} from '../actions/FriendsActions';

describe('FriendList', () => {
  const actions = {
    addFriend: addFriend,
    deleteFriend: deleteFriend,
    starFriend: starFriend,
    getFriends: getFirendsPerPage
  };
    let data =   [
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
        ]
    it('should render correctly with props and updated props', () => {
        const component = shallow(<FriendList friends={data} actions={actions}/>);
        expect(component.find(FriendListItem)).toHaveLength(3);
        component.setProps({friends:[]});
        expect(component.find(FriendListItem)).toHaveLength(0);
      });

});
