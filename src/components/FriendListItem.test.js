import React from 'react';
import { mount } from 'enzyme';
import FriendListItem from './FriendListItem';

describe('<FriendListItem />',() => {

    const myMock = jest.fn();
    it('Should count whether the starred icon is updated properly', () => {
        let starred=true, id=1;
        const component = mount(<FriendListItem name='XYZ' sex='Male' starred={starred} starFriend={myMock} id={id}/>);
        expect(component.find('[name="starFriend"] i').prop('className')).toBe('fa fa-star');
        starred = false;
        component.setProps({ starred: starred});
        expect(component.find('[name="starFriend"] i').prop('className')).toBe('fa fa-star-o');
    });

    it('Should trigger the starred friend action on click of star button', () => {
        let starred=true, id=1;
        const component = mount(<FriendListItem name='XYZ' sex='Male' starred={starred} starFriend={myMock} id={id}/>);
        component.find('[name="starFriend"]').simulate('click');
        expect(myMock).toHaveBeenCalled();
    });

    it('Should trigger the delete friend action on click of trash button', () => {
        let starred=true, id=1;
        const component = mount(<FriendListItem name='XYZ' sex='Male' starFriend={myMock} starred={starred} deleteFriend={myMock} id={id}/>);
        component.find('[name="deleteFriend"]').simulate('click');
        expect(myMock).toHaveBeenCalled();
    });
})