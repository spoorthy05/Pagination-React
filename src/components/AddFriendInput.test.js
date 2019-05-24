import React from 'react';
import { mount } from 'enzyme';
import AddFriendInput from './AddFriendInput';

describe('AddFriendInput', () => {
    const myMock = jest.fn();
    it('Should check whether the input elements are controlled by state', () => {
        let name='XYZ', sex='male';
        const component = mount(<AddFriendInput addFriend={myMock}/>);
        component.setState({name: name, sex: sex});
        expect(component.find('input#friendName').prop('value')).toEqual(name);
        expect(component.find('input#chkMale').prop('value')).toEqual(sex);
    })

    it('Should check whether the add friend is enabled and triggers the addFriend prop method', () => {
        let name='XYZ', sex='male';
        const component = mount(<AddFriendInput addFriend={myMock} name='' sex=''/>);
        expect(component.exists('.disabled')).toBeTruthy();
        component.setState({name: name, sex: sex});
        expect(component.exists('.disabled')).toBeFalsy();
        component.find('[name="addFriend"]').simulate('click');
        expect(myMock).toHaveBeenCalled();
    })
})