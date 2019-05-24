import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    var addButtonClass = 'disabled';
    if(this.state.name !== '' && this.state.sex !== '') {
      addButtonClass = 'active';
    }
    return (
      <div className={styles.addFriend}>
        <input
          type="text"
          autoFocus="true"
          id="friendName"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}/>
          <div className={styles.sex}>
            <label className="radio-inline">
              <input type="radio" name="sex" id="chkMale" value="male" 
                onChange={this.handlesexChange.bind(this)}
                checked={this.state.sex === 'male'}/>Male
            </label>
            <label className="radio-inline">
              <input type="radio" name="sex" id="chkFemale" value="female" 
                onChange={this.handlesexChange.bind(this)}
                checked={this.state.sex === 'female'}/>Female
            </label>
          </div>
          <div className="text-center">
            <button type="button" name="addFriend" className={classnames('btn btn-primary btn-sm', addButtonClass )} 
              onClick={this.handleSubmit.bind(this)}>Add</button>
          </div>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex: this.props.sex || ''
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handlesexChange(e) {
    this.setState({sex: e.target.value})
  }

  handleSubmit (e) {
      this.props.addFriend(this.state.name, this.state.sex);
      this.setState({ name: '', sex: '' });
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
