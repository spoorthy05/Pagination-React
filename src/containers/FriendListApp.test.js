import React from 'react';
import { shallow, mount } from 'enzyme';
import FriendListApp from './FriendListApp';
import AddFriendInput from '../components/AddFriendInput';
import configureStore from 'redux-mock-store';
import Pagination from '../components/Pagination/Pagination';

describe('<FriendListApp />', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    const myMock = jest.fn();

    const items = {friendsById: [
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
    ]};
      const itemsUpd = [
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
        }];
    it('should test whether <FriendListApp /> renders app friend input', () => {
       const component = shallow(<FriendListApp store={store} addFriend={myMock}/>);
       expect(component.find(AddFriendInput)).toBeTruthy();
    });

   it('should test whether <FriendListApp /> renders pagination', () => {
      const component = shallow(<FriendListApp store={store} addFriend={myMock}
         onChangePage={myMock} friendsById={items}/>);
      expect(component.find(Pagination)).toBeTruthy();
      component.setProps({items:itemsUpd});
      expect(component.exists(Pagination)).toBeFalsy();
   });
  })