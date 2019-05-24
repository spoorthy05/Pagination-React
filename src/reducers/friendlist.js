import * as types from '../constants/ActionTypes';

const initialState = {
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
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      let friendID = state.friendsById ? state.friendsById.length + 1 :  1;
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            starred: false,
            sex: action.sex,
            id: friendID
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => item.id !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => item.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    case types.GET_FRIEND_LIST:
      return {
        ...state,
        friendsPerPage: action.friendList
      }
    default:
      return state;
  }
}
