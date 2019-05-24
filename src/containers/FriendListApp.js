import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend, getFirendsPerPage} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';
import Pagination from '../components/Pagination/Pagination';

class FriendListApp extends Component {

  render () {
    const { friendlist: { friendsById, friendsPerPage, pageSize }} = this.props;
    
    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      getFriends: this.props.getFirendsPerPage
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsPerPage} actions={actions} />
        <Pagination onChangePage={actions.getFriends} items={friendsById} pageSize={pageSize}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  getFirendsPerPage
})(FriendListApp)
